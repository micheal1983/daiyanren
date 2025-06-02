<script setup>
defineProps({
  msg: String,
  pic: String,
  isLottie: Boolean,
  isImg: Boolean,
  isJson: Boolean,
});
import { Vue3Lottie } from 'vue3-lottie'
import animationData from '../assets/lottie/icon_opt.json' // 可本地导入 JSON

import '@lottiefiles/lottie-player'
const src = 'https://lottie.host/ba5e7fa4-6c83-40df-8539-9029f31826e4/MGEfFty0i5.lottie' // 或本地文件路径

</script>

<template>
<div class="ico">
  <div class="pic">
    <div v-if="isImg"><img :src="pic" width="100%"/></div>
    <div class="lottie" v-if="isJson"><Vue3Lottie :animationData="animationData" :loop="true" :autoplay="true" style="width: 100%;" /></div>
    <div class="lottie" v-if="isLottie"><lottie-player :src="src" background="transparent" speed="1" loop autoplay style="width: 100%;" ></lottie-player></div>
  </div>
  <div class="text">{{msg}}</div>
</div>
</template>

<style scoped>
.ico{ width: 90px; height: 86px; display: flex; flex-direction: column; /* 垂直排列 */ align-items: center;    /* 水平居中对齐 */}
.pic{ width: 52px; height: 52px;}
.lottie{ margin-top: -11px;}
.text{ font-size: 12px; margin-top: 4px; text-align: center; font-family: 'Inter', sans-serif; font-weight: 700;}
</style>