<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 图片文件名数组
const images = [
  'image1.webp',
  'image2.webp',
  'image3.webp'
]
const currentIndex = ref(0)
const total = images.length
let intervalId = null

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % total
  }, 5000)
}

const stopAutoSlide = () => clearInterval(intervalId)

// 滑动支持
let startX = 0
let deltaX = 0

const onTouchStart = (e) => {
  stopAutoSlide()
  startX = e.touches[0].clientX
}

const onTouchMove = (e) => {
  deltaX = e.touches[0].clientX - startX
}

const onTouchEnd = () => {
  if (deltaX > 50) {
    currentIndex.value = (currentIndex.value - 1 + total) % total
  } else if (deltaX < -50) {
    currentIndex.value = (currentIndex.value + 1) % total
  }
  startAutoSlide()
  deltaX = 0
}

onMounted(startAutoSlide)
onUnmounted(stopAutoSlide)
</script>

<template>
<!--  <video class="banner" width="100%" muted playsinline loop autoplay>-->
<!--    <source src="../assets/video/banner-before-loop.mp4" type="video/mp4">-->
<!--    您的浏览器不支持 video 属性。-->
<!--  </video>-->
  <div id="banner"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd">
    <div class="fade-wrapper">
      <img v-for="(img, index) in images"
           :key="index"
           :src="`./images/${img}`"
           class="fade-image"
           :class="{ active: index === currentIndex }" />
    </div>
  </div>

  <div id="page">
    <span v-for="(dot, index) in total" :key="index"
          :class="{ focus: index === currentIndex }"></span>
  </div>
</template>

<style scoped>
#banner {
  width: 362px;
  height: 130px;
  margin: 8px auto 0;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
}

.fade-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.fade-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 362px;
  height: 130px;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 1;
  border-radius: 15px;
}

.fade-image.active {
  opacity: 1;
  z-index: 2;
}

#page {
  width: 58px;
  height: 4px;
  margin: 8px auto 10px;
  display: flex;
  justify-content: center;
  gap: 6px;
}

#page span {
  width: 8px;
  height: 4px;
  background: #514D58;
  display: inline-block;
  border-radius: 100px;
}

#page span.focus {
  width: 16px;
  background: linear-gradient(317deg, #FFD67D 28.26%, #FF821B 100.27%);
}
</style>
