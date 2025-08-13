<script setup>

import SpinePixi from "../components/SpinePixi.vue";
</script>

<template>
  <div class="video-fullscreen">
    <SpinePixi></SpinePixi>
    <div class="gamepic">
      <img src="/images/color%20game.webp" width="100%" />
    </div>
    <video
        ref="videoPlayer"
        src="/video/game2.mp4"
        autoplay
        muted
        loop
        playsinline
        width="100%"
    />
  </div>


</template>

<style scoped>
.video-fullscreen {
  position: relative;
  width: 390px;
  object-fit: contain;
  z-index: 1;
}
.gamepic{ width: 72px; height: 80px; position: fixed; right: 2px; margin-top: 260px; z-index: 999;}
</style>