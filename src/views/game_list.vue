<script setup>
import {onMounted, onBeforeUnmount, ref, nextTick} from 'vue';

import top from '../components/top.vue';
import Bottom from "../components/bottom.vue";
import Banner from "../components/Banner.vue";
import Recommend from "../components/recommend.vue";
import All_games from "../components/all_games.vue";



</script>

<template>
  <div id="wrap" class="content">
  <top msg="Hello World"/>
  <banner/>
  <all_games />
    <bottom />
  </div>
</template>

<style scoped>


.content {
  margin: 0 auto;
}
</style>