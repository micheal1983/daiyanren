<template>
  <div id="player-container" style="width: 390px; height: 390px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 确保 spine-player 脚本已引入（通常在 index.html 中）
  new spine.SpinePlayer("player-container", {
    skeleton: "spine/Anim1.json",
    atlas: "spine/Anim1.atlas",
    animation: "animation",
    scale: 1,
    loop: true,
    backgroundColor: null,
    alpha: true,
    showControls: false
  })
})

</script>

<style scoped>

</style>