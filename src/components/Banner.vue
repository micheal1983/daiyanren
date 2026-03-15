<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { API_BASE_URL, IMAGE_BASE_URL } from '../config' // 导入公共配置

const images = ref([])
const currentIndex = ref(0)
const total = computed(() => images.value.length)
let intervalId = null

// 图片URL前缀，使用公共配置拼接
const IMAGE_PREFIX = `${IMAGE_BASE_URL}/picture/h5banner/`

const fetchBannerData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/picture/getpublicall`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ channel_id: 7, status: 1 })
    })

    if (response.ok) {
      const result = await response.json()
      const data = result.data || []

      images.value = data.map(item => {
        try {
          // info 字段是一个JSON字符串，需要解析
          const info = typeof item.info === 'string' ? JSON.parse(item.info) : item.info
          return {
            id: item.id,
            url: IMAGE_PREFIX + info.cover
          }
        } catch (e) {
          console.error(`解析 banner info 失败 (ID: ${item.id}):`, item.info, e)
          return null
        }
      }).filter(Boolean)

      // 只有在获取到多张图片之后再开始轮播
      if(total.value > 1) {
          startAutoSlide()
      }
    } else {
      console.error('获取Banner数据失败:', response.status)
    }
  } catch (error) {
    console.error('获取Banner数据失败:', error)
  }
}

const startAutoSlide = () => {
  if (total.value <= 1) return

  if(intervalId) {
    clearInterval(intervalId)
  }

  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % total.value
  }, 5000)
}

const stopAutoSlide = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

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
  if (total.value > 1) {
    if (deltaX > 50) {
      currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
    } else if (deltaX < -50) {
      currentIndex.value = (currentIndex.value + 1) % total.value
    }
  }
  startAutoSlide()
  deltaX = 0
}

onMounted(() => {
  fetchBannerData()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>

<template>
  <div class="block">
<!--  <video class="banner" width="100%" muted playsinline loop autoplay>-->
<!--    <source src="../assets/video/NO EKYC Required.mp4" type="video/mp4">-->
<!--    您的浏览器不支持 video 属性。-->
<!--  </video>-->


  <div id="banner"
       @touchstart="onTouchStart"
       @touchmove="onTouchMove"
       @touchend="onTouchEnd"
       v-if="total > 0">
    <div class="fade-wrapper">
      <img v-for="(img, index) in images"
           :key="img.id"
           :src="img.url"
           class="fade-image"
           :class="{ active: index === currentIndex }" width="100%" />
    </div>
  </div>

  <div id="page" v-if="total > 1">
    <span v-for="(dot, index) in total" :key="index"
          :class="{ focus: index === currentIndex }"></span>
  </div>

  </div>
</template>

<style scoped>

#banner {
  width: 366px;
  height: 130px;
  margin: 8px auto 0;
  overflow: hidden;
  position: relative;
  border-radius: 0;
}

.fade-wrapper {
  width: 366px;
  height: 130px;
  position: relative;
}

.fade-image {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease;
  z-index: 1;
}

.fade-image.active {
  opacity: 1;
  z-index: 2;
}

#page {
  width: 338px;
  height: 4px;
  margin: 8px auto;
  display: flex;
  justify-content: flex-end;
  gap:8px;
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
  background: #E84141;
}
</style>