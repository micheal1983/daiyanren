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
const scale = ref(1);
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

// 计算缩放比例函数（基于设计稿宽度1170）
const updateScale = () => {
  requestAnimationFrame(() => {
    const baseWidth = 1170;
    const clientWidth = document.documentElement.clientWidth;
    scale.value = clientWidth / baseWidth;
    console.log("当前缩放比例:", scale.value.toFixed(2));
  });
};

// 页面挂载后执行（保证 DOM 完全加载）
onMounted(() => {
  nextTick(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
  });
});

// 页面卸载前移除监听
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScale);
});

const showOverlay = ref(true) // 控制是否显示蒙版
</script>

<template>
  <!-- 动态加载 Popup 组件 -->
  <Popup v-if="showPopup" @close="close" />
  <button @click="show">点击显示弹窗</button>
  <div class="scale-wrapper">
    <div
        id="wrap"
        class="content"
        :style="{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: '1170px',
        height:'auto'
      }"
    >



      <top msg="Hello World"/>
      <banner/>
      <recommend/>
      <mainenter/>
      <gzoriginals/>
      <biggest_winings/>
      <table_game/>
      <new_game/>
      <game_providers/>
      <about_gamezone/>
      <!-- <picList msg="Vite + Vue" /> -->
      <bottom/>
    </div>
  </div>
</template>

<style scoped>
.scale-wrapper {
  width: 100%;
  height: auto;
  overflow-x: hidden;
  background: #252328;
}

.content {
  margin: 0 auto;
  /* 注意：transform 缩放后 margin 视觉上不会影响居中 */
  overflow-x: hidden;
  height: auto;
}
#lottie{ width: 200px; height: 452px; margin: 0 auto; background:#535bf2}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 半透明黑色 */
  z-index: 9999; /* 保证在最顶层 */
}
#mask{
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 999;
  display: flex;
  justify-content: center;   /* 水平居中 */
  align-items: center;       /* 垂直居中 */
  height: 100vh;             /* 视口高度 */
}
</style>