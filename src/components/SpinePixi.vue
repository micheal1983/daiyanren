<template>
  <div id="player" style="width: 600px; height: 600px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

// 需要先加载 spine-web-player 的 js 文件
// 推荐用官方 CDN：https://esotericsoftware.com/files/spine-web-player/spine-web-player.min.js
// 你需要在 public/index.html 里手动引入，或者用动态加载脚本

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.jsdelivr.net/npm/@esotericsoftware/spine-player@4.2.82/dist/iife/spine-player.min.js'
  script.onload = () => {
    const container = document.getElementById('player')

    // eslint-disable-next-line no-undef
    const player = new spine.SpinePlayer(container, {
      jsonUrl: 'spine/anim1.json',
      atlasUrl: 'spine/anim1.atlas',
      animation: 'animation',  // 你动画名
      showControls: true,
      loop: true,
      backgroundColor: '#ffffff',
      alpha: true,
      premultipliedAlpha: false,
      mipmaps: false,
      debugBones: false,
      debugMeshes: false,
      debugSlots: false,
      debugRegionAttachments: false,
      debugBoundingBoxes: false,
    })
  }
  document.body.appendChild(script)
})
</script>
