<!-- Popup.vue -->
<template>
  <div class="popup">
    <div class="popup-overlay" @click="closePopup"></div>
    <div class="popup-content">
      <h2>这是一个弹窗</h2>
      <p>点击遮罩或关闭按钮来关闭它</p>
      <button @click="closePopup">关闭</button>
    </div>
  </div>
</template>

<script setup>
const closePopup = () => {
  // 向父组件发送关闭事件
  const closeEvent = new CustomEvent('close', { bubbles: true })
  window.dispatchEvent(closeEvent)
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.popup-content {
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 8px;
  z-index: 10;
}
</style>
