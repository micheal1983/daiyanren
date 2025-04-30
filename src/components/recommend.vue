<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const scrollEl = ref(null)

const images = [
  new URL('../assets/pic-game/Color Game.webp', import.meta.url).href,
  new URL('../assets/pic-game/JILI_Mines.webp', import.meta.url).href,
  new URL('../assets/pic-game/Jackpot Fishing.webp', import.meta.url).href,
  new URL('../assets/pic-game/Texas.webp', import.meta.url).href,
  new URL('../assets/pic-game/Lucky9.webp', import.meta.url).href,
  new URL('../assets/pic-game/JILI_Color Game.webp', import.meta.url).href,
]

// 克隆形成无缝循环
const loopImages = computed(() => [...images, ...images])

let scrollTimer = null
let isTouching = false
let autoScrollPaused = false
let frameId = null

function autoScroll() {
  if (!scrollEl.value || isTouching || autoScrollPaused) return
  scrollEl.value.scrollLeft += 1

  // 无缝循环：到头回到一半
  const el = scrollEl.value
  const maxScroll = el.scrollWidth / 2
  if (el.scrollLeft >= maxScroll) {
    el.scrollLeft = 0
  }

  frameId = requestAnimationFrame(autoScroll)
}

function startAutoScroll() {
  cancelAnimationFrame(frameId)
  frameId = requestAnimationFrame(autoScroll)
}

function stopAutoScroll() {
  cancelAnimationFrame(frameId)
}

function onTouchStart() {
  isTouching = true
  stopAutoScroll()
}

function onTouchMove() {
  // nothing needed here, scroll happens naturally
}

function onTouchEnd() {
  isTouching = false
  autoScrollPaused = true
  setTimeout(() => {
    autoScrollPaused = false
    startAutoScroll()
  }, 2000) // 2秒后恢复
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  stopAutoScroll()
})
</script>


<template>
  <div id="recommend">
    <div id="recommend-title">
      <div class="ico inline">
        <img src="../assets/ms/ico-recommend.webp" height="66" width="66" />
      </div>
      <div class="title inline">Recommend</div>
    </div>

    <div
        ref="scrollEl"
        class="scroll-container"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
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
  padding: 0 36px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

#recommend-title .ico {
  width: 66px;
  height: 66px;
}

#recommend-title .title {
  margin-left: 24px;
  font-size: 2.8rem;
  font-weight: bold;
}

.scroll-container {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.scroll-content {
  display: inline-flex;
}

.item {
  width: 180px;
  margin-right: 24px;
  flex: 0 0 auto;
}

.item img {
  width: 180px;
  height: 222px;
  border-radius: 24px;
  object-fit: cover;
}

</style>