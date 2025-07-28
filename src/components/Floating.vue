<script setup>

</script>

<template>
  <div class="floating"><img src="../assets/ms/2.0.webp" height="100%" width="100%"/></div>
  <div class="floating a2"><img src="../assets/ms/2.1.webp" height="100%" width="100%"/></div>
</template>

<style scoped>
.floating{ width: 72px; height: 88px; position: fixed; z-index: 999; right: 8px; bottom: calc(92px + env(safe-area-inset-bottom));}
.a2{ bottom: calc(188px + env(safe-area-inset-bottom))}
</style>