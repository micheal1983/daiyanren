<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'

const scrollEl = ref(null)
const images = [
  new URL('../assets/pic-game/Color Game.webp', import.meta.url).href,
  new URL('../assets/pic-game/JILI_Mines.webp', import.meta.url).href,
  new URL('../assets/pic-game/Jackpot Fishing.webp', import.meta.url).href,
  new URL('../assets/pic-game/Texas.webp', import.meta.url).href,
  new URL('../assets/pic-game/Lucky9.webp', import.meta.url).href,
  new URL('../assets/pic-game/JILI_Color Game.webp', import.meta.url).href,
]

const loopImages = computed(() => [...images, ...images])

let scrollTimer = null
let isTouching = false
let autoScrollPaused = false
let resumeTimeout = null

function autoScrollStep() {
  const el = scrollEl.value
  if (!el || isTouching || autoScrollPaused || el.scrollWidth === 0) return

  el.scrollLeft += 0.5

  const halfScroll = el.scrollWidth / 2
  if (el.scrollLeft >= halfScroll) {
    el.scrollLeft -= halfScroll
  }
}

function startAutoScroll() {
  stopAutoScroll()
  scrollTimer = setInterval(autoScrollStep, 16)
}

function stopAutoScroll() {
  clearInterval(scrollTimer)
  scrollTimer = null
}

function onTouchStart() {
  isTouching = true
  stopAutoScroll()
}

function onTouchEnd() {
  isTouching = false
  autoScrollPaused = true
  clearTimeout(resumeTimeout)
  resumeTimeout = setTimeout(() => {
    autoScrollPaused = false
    startAutoScroll()
  }, 2000)
}

// 确保图片加载完后再启动滚动
function waitForImagesLoaded() {
  const images = scrollEl.value?.querySelectorAll('img') || []
  const promises = Array.from(images).map(img => {
    return new Promise(resolve => {
      if (img.complete) return resolve()
      img.onload = resolve
      img.onerror = resolve
    })
  })
  return Promise.all(promises)
}

onMounted(async () => {
  await nextTick()
  await waitForImagesLoaded()
  scrollEl.value.scrollLeft = 1
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
  clearTimeout(resumeTimeout)
})
</script>

<template>
  <div id="recommend">
    <div id="recommend-title">
      <div class="ico inline">
        <img src="../assets/ms/ico-recommend.webp" width="100%" />
      </div>
      <div class="title inline">Recommend</div>
    </div>

    <div
        ref="scrollEl"
        class="scroll-container"
        @pointerdown="onTouchStart"
        @pointerup="onTouchEnd"
        @pointercancel="onTouchEnd"
        @pointerleave="onTouchEnd"
    >
      <div class="scroll-content">
        <div v-for="(img, index) in loopImages" :key="index" class="item">
          <img :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#recommend {
  width: 100%;
  overflow: hidden;
}

#recommend-title {
  padding: 0 12px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

#recommend-title .ico {
  width: 22px;
  height: 22px;
}

#recommend-title .title {
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
}

.scroll-container {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: auto;
  scroll-snap-type: none;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-content {
  display: inline-flex;
}

.item {
  width: 60px;
  margin-right: 8px;
  flex: 0 0 auto;
}

.item img {
  width: 60px;
  height: 74px;
  border-radius: 8px;
  object-fit: cover;
}
</style>
