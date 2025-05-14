<script setup>
import {ref} from "vue";
import Popup from "./Popup.vue";

const message = 'Hello from MyComponent'
const props = defineProps({
  msg: String,
})

const showPopup = ref(false);
// 显示弹窗
const show = () => {
  showPopup.value = true
}
// 关闭弹窗
const close = () => {
  showPopup.value = false
}
// 监听全局关闭事件（例如点击遮罩时关闭）
window.addEventListener('close', close);
</script>

<template>
  <!-- 动态加载 Popup 组件 -->
  <Popup v-if="showPopup" @close="close" />

  <div id="top">
    <div class="left">
      <div id="logo" class="inline"><router-link to="/"><img src="../assets/ms/logo.webp" /></router-link></div>
    </div>
    <div class="right">
      <div id="btn-login" class="inline top-btn" @click="show">Sign in</div>
      <div id="btn-reg" class="inline top-btn"><img src="../assets/ms/btn-reg.webp" width="100%"/></div>
      <div id="btn-search" class="inline top-btn"><img src="../assets/ms/btn-search.webp" width="100%"/></div>
      <div id="btn-service" class="inline top-btn"><img src="../assets/ms/btn-service.webp" width="100%"/></div>
    </div>
  </div>

</template>

<style scoped>
#top{ width: calc(100% + 1px); background: linear-gradient(180deg, #252328 5.26%, #312F36 100%); margin-top: -1px;
  position: fixed; top: 0; left: 0; z-index: 9998;
  display: flex; justify-content: space-between; align-items: center;
  height: 54px;
  padding-top: env(safe-area-inset-top);

}
#top img{ width: 100%; height: auto;}
.top-btn{ margin-left: 8px;}
.left{ margin-left: 12px;}
.right{ margin-right: 12px;}

#logo{width: 54px; height: 32px;}
#btn-login{ font-size: 14px;}
#btn-reg{ width: 86px; height: 38px;}
#btn-search{ width: 38px; height: 38px;}
#btn-service{ width: 38px; height: 38px;}
</style>