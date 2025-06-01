<script setup>
defineProps({
  msg: String,
  pic: String
});
import { Vue3Lottie } from 'vue3-lottie'
import animationData from '../assets/lottie/2.json' // 可本地导入 JSON

</script>

<template>
<div class="ico">
  <div class="pic">
    <img :src="pic" width="100%"/>
<!--    <Vue3Lottie :animationData="animationData" :loop="true" :autoplay="true" style="width: 52px; height: 52px" />-->
  </div>
  <div class="text">{{msg}}</div>
</div>
</template>

<style scoped>
.ico{ width: 90px; height: 86px; display: flex; flex-direction: column; /* 垂直排列 */ align-items: center;    /* 水平居中对齐 */}
.pic{ width: 52px; height: 52px;}
.text{ font-size: 12px; margin-top: 4px; text-align: center; font-family: 'Inter', sans-serif; font-weight: 700;}
</style>