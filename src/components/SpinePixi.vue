<template>
  <div>
    <div
        id="player-container"
        :class="{ hidden: isHidden }"
        @click="handleIdleClick"
    ></div>

    <!-- 假设这是你的系统菜单 -->
    <div v-if="menuVisible" class="menu">
      <button @click="closeMenu">关闭菜单</button>
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
    skeleton: "spine/robots/robots.json",
    atlas: "spine/robots/robots.atlas",
    animation: "fly",
    loop: false,
    scale: 1,
    backgroundColor: null,
    alpha: true,
    fit: "none",
    showControls: false,
    success: () => {
      // 播放 fly 后延迟 1s 切换到 fly2idle
      setTimeout(() => {
        player.setAnimation("fly2idle", false)


        // 当 fly2idle 播放完后，切换为 idle 循环
        player.addAnimation("idle", true, 0);
      }, 1000)
    }
  })
})

const handleIdleClick = () => {
  isHidden.value = true
  menuVisible.value = true
}

const closeMenu = () => {
  isHidden.value = false
  menuVisible.value = false

  // 恢复 idle 动作（可选）
  player.setAnimation("idle", true)
}
</script>

<style scoped>
#player-container {
  width: 100%;
  height: 250px;
  transition: transform 0.5s ease;
  cursor: pointer;
  margin-left: 100px;
}

/* 向右平移出视口外 */
.hidden {
  transform: translateX(120%);
}

/* 模拟系统菜单 */
.menu {
  position: absolute;
  width: 168px;
  height: 488px;
  top: 50%;
  right: 0;
  margin-top: -244px;
  color: white;
  background:url("../assets/ms/menu.png") no-repeat;
}
</style>
