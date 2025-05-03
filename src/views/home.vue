<script setup>
import {onMounted, onBeforeUnmount, ref, nextTick} from 'vue';

import picList from '../components/picList.vue';
import top from '../components/top.vue';
import Bottom from "../components/bottom.vue";
import Banner from "../components/Banner.vue";
import Recommend from "../components/recommend.vue";
import Mainenter from "../components/mainenter.vue";
import Gzoriginals from "../components/gz_originals.vue";
import Game_providers from "../components/game_providers.vue";
import About_gamezone from "../components/about_gamezone.vue";
import Table_game from "../components/table_game.vue";
import New_game from "../components/new_game.vue";
import Biggest_winings from "../components/biggest_winings.vue";
import Popup from '../components/Popup.vue'
import {Vue3Lottie} from "vue3-lottie";
import animationData from '../lottie/2.json'

// 缩放比例
const showPopup = ref(false);
// 显示弹窗
const show = () => {
  showPopup.value = true
}
// 关闭弹窗
const close = () => {
  showPopup.value = false
}
// 监听全局关闭事件（例如点击遮罩时关闭）
window.addEventListener('close', close);

const showOverlay = ref(true) // 控制是否显示蒙版
</script>

<template>
  <!-- 动态加载 Popup 组件 -->
  <Popup v-if="showPopup" @close="close" />
    <div id="wrap" class="content">
      <top msg="Hello World" :showPopup="show"/>
      <banner/>
      <recommend/>
      <mainenter/>
      <gzoriginals/>
      <biggest_winings/>
<!--      <table_game/>-->
<!--      <new_game/>-->
      <game_providers/>
      <about_gamezone/>
<!--      &lt;!&ndash; <picList msg="Vite + Vue" /> &ndash;&gt;-->
      <bottom/>
    </div>
</template>

<style scoped>

.content {
  margin: 0 auto;
  overflow-x: hidden;
}
#lottie{ width: 200px; height: 452px; margin: 0 auto; background:#535bf2}

</style>