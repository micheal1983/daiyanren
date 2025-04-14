<script setup>
import picList from './components/picList.vue'
import top from './components/top.vue'
import Bottom from "./components/bottom.vue";
</script>

<template>
  <top msg="Hello World"></top>
  <picList msg="Vite + Vue" />
  <bottom/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
