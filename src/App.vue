<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Tab_navigation from './components/tab_navigation.vue'

const route = useRoute()

const showTabBar = computed(() => {
  return route?.meta?.showTabBar !== false
})
</script>

<template>
  <router-view />

  <Tab_navigation v-if="showTabBar" />
</template>

<style scoped>

</style>
