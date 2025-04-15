<script setup>
import picList from './components/picList.vue'
import top from './components/top.vue'
import Bottom from "./components/bottom.vue";
</script>

<template>
  <div id="wrap">
  <top msg="Hello World"></top>
  <picList msg="Vite + Vue" />
  <bottom/>
  </div>
</template>

<style scoped>
#wrap{ width: 750px; margin: 0 auto; background: #252328;}

</style>
