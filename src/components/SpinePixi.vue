<template>
  <div>
    <div
        id="player-container"
        :class="{ hidden: isHidden }"
        @click="handleIdleClick"
    ></div>

    <!-- 假设这是你的系统菜单 -->
    <div v-if="menuVisible" class="menu">

      <div class="tips float-bob"></div>
      <div class="deposit"></div>
      <div class="refresh"></div>
      <div class="quit"></div>
      <div @click="closeMenu" class="close"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let player = null
const isHidden = ref(false)
const menuVisible = ref(false)

onMounted(() => {
  player = new spine.SpinePlayer("player-container", {
    skeleton: "spine/crocodile/crocodile.json",
    atlas: "spine/crocodile/crocodile.atlas",
    animation: "close",
    loop: false,
    scale: 1,
    backgroundColor: null,
    alpha: true,
    fit: "none",
    showControls: false,
    success: () => {
      // 播放 fly 后延迟 1s 切换到 fly2idle
      setTimeout(() => {
        // 当 fly2idle 播放完后，切换为 idle 循环
        player.addAnimation("close", true, 0);
      }, 1000)
    }
  })
})

const handleIdleClick = () => {
  isHidden.value = true
  menuVisible.value = true
  // 恢复 idle 动作（可选）
  player.setAnimation("close2open", false)
  player.addAnimation("open", true, 0);
}

const closeMenu = () => {
  isHidden.value = false
  menuVisible.value = false

  // 恢复 idle 动作（可选）
  player.setAnimation("close", true)
}
</script>

<style scoped>
#player-container {
  width: 150px;
  height: 150px;
  cursor: pointer;
  position: fixed;
  left: -65px;
  top: -10px;
}

/* 向右平移出视口外 */
.hidden {
transform: translateX(30px);
}

/* 模拟系统菜单 */
.menu {
  position: fixed;
  width: 150px;
  height: 150px;
}
.close{
  width: 26px;
  height: 30px;
  background:url("/images/crocodile/Button-close.png") no-repeat;
  background-size: contain;
  margin-left: 29px;
  margin-top: -18px;
}
.deposit{
  width: 26px;
  height: 30px;
  background:url("/images/crocodile/Button-deposit.png") no-repeat;
  background-size: contain;
  margin-left: 110px;
}
.quit{
  width: 26px;
  height: 30px;
  background:url("/images/crocodile/Button-quit.png") no-repeat;
  background-size: contain;
  margin-left: 70px;
  margin-top: -1px;
}
.refresh{
  width: 26px;
  height: 30px;
  background:url("/images/crocodile/Button-refresh.png") no-repeat;
  background-size: contain;
  margin-left: 95px;
  margin-top: 5px;
}
.tips{
  width: 65px;
  height: 33px;
  background:url("/images/crocodile/Button-tips.png") no-repeat;
  background-size: contain;
  margin-left: 75px;
  margin-top: 10px;
}

.float-bob{
  animation: bobY 1.2s ease-in-out infinite;
  will-change: transform;
}

@keyframes bobY{
  /* 底部停顿一下 */
  0%,10%   { transform: translateY(0); }
  50%      { transform: translateY(-3px); } /* 上浮高度 */
  /* 顶部也停一下 */
  90%,100% { transform: translateY(0); }
}
</style>