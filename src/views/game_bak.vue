<script setup>

</script>

<template>
  <video
      ref="videoPlayer"
      src="/video/game.mp4"
      autoplay
      muted
      loop
      playsinline
      class="video-fullscreen"
      width="100%"
  ></video>
</template>

<style scoped>
.video-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>