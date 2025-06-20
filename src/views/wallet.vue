<script setup>
import {onMounted, onBeforeUnmount, ref, nextTick} from 'vue';
import { useFetchImages } from '../composables/useFetchImages';

import top from '../components/top.vue';
import Bottom from "../components/bottom.vue";
import Banner from "../components/Banner.vue";
import Recommend from "../components/recommend.vue";
import Mainenter from "../components/mainenter.vue";
import Gzoriginals from "../components/scrolling_home.vue";
import Game_providers from "../components/game_providers.vue";
import About_gamezone from "../components/about_gamezone.vue";
import Table_game from "../components/scrolling_home.vue";
import New_game from "../components/scrolling_home.vue";
import Biggest_winings from "../components/biggest_winings.vue";
import Popup from '../components/Popup.vue'
import tab_navigation from "../components/tab_navigation.vue";



onMounted(() => {
  console.log("ok");
});

</script>

<template>
  <!-- 动态加载 Popup 组件 -->
  <Popup v-if="showPopup" @close="close" />
  <div id="wrap">

    <div class="gift">
      <div class="box cover absolute">
        <div class="box_front cover absolute"></div>
        <div class="coin-star-2 cover absolute"></div>
        <div class="coin-star-1 cover absolute"></div>
        <div class="coin-star-3 cover absolute"></div>
        <div class="cover_gift cover absolute"></div>
      </div>

    </div>
    <top msg="Hello World" />


  </div>
</template>

<style scoped>

#wrap {
  margin: 0 auto;
  overflow-x: hidden;
  padding: 53px 0 64px 0;
}
.gift{ width: 300px; height: 400px; background: #535bf2; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);}
.gift img{ width: 100%; height: 100%;}
.gift .box{ width: 204px; height: 196px; background: url("/images/gift/box.webp"); margin: 200px 0 0 50px;}
.gift .box_front{ width: 209px; height: 163px; background: url("/images/gift/box_front.webp"); margin: 36px 0 0 0;}
.gift .coin-star-1{ width: 57px; height: 59px; background: url("/images/gift/coin-star-1.webp"); margin: 50px 0 0 150px; z-index: 1;}
.gift .coin-star-2{ width: 67px; height: 65px; background: url("/images/gift/coin-star-2.webp"); margin: 60px 0 0 -50px; transform: rotate(45deg); z-index: -1;}
.gift .coin-star-3{ width: 67px; height: 65px; background: url("/images/gift/coin-star-2.webp"); margin: -80px 0 0 200px; transform: scale(.5) rotate(135deg); }
.gift .cover_gift{ width: 252px; height: 157px; background: url("/images/gift/cover.webp"); margin: -50px 0 0 -22px;}
.gift .absolute{ position: absolute; top: 0; left: 0;}
.gift .cover{ background-size: cover; background-repeat: no-repeat;}
</style>