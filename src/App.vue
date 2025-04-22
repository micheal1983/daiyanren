<script setup>
import picList from './components/picList.vue'
import top from './components/top.vue'
import Bottom from "./components/bottom.vue";
import Banner from "./components/Banner.vue";
import Recommend from "./components/recommend.vue";
import Mainenter from "./components/mainenter.vue";
import Gzoriginals from "./components/gz_originals.vue";
import Game_providers from "./components/game_providers.vue";
import About_gamezone from "./components/about_gamezone.vue";
import Table_game from "./components/table_game.vue";
import New_game from "./components/new_game.vue";
import Biggest_winings from "./components/biggest_winings.vue";
import {onMounted, ref} from "vue";

console.log(1234);
let mywidth;
const wrap = document.getElementById('wrap');
window.onresize = () => {
  return (() => {
    console.log(mywidth);
    mywidth = document.documentElement.clientWidth/1170;
    const bbb = "33333";
  })()
};



</script>

<template>
  <div id="wrap" :style="{zoom:.99}">
  <top msg="Hello World"></top>
  <banner></banner>
  <recommend></recommend>
  <mainenter></mainenter>
    <gzoriginals></gzoriginals>
    <biggest_winings></biggest_winings>
    <table_game></table_game>
    <new_game></new_game>
    <game_providers></game_providers>
    <about_gamezone></about_gamezone>
<!--  <picList msg="Vite + Vue" />-->
  <bottom/>
  </div>
</template>

<style scoped>
#wrap{ width: 1170px; margin: 0 auto; background: #252328;}

</style>
