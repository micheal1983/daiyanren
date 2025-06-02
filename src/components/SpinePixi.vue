<template>
  <div id="player-container" style="width: 100%; height: 250px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 确保 spine-player 脚本已引入（通常在 index.html 中）
  new spine.SpinePlayer("player-container", {
    skeleton: "spine/robots/robots.json",
    atlas: "spine/robots/robots.atlas",
    animation: "idle",
    scale: 1,
    loop: true,
    backgroundColor: null,
    alpha: true,
    fit: "none",
    showControls: false
  })
})

</script>

<style scoped>
#player-container{ margin-left: 100px;}
</style>