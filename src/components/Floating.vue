<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { API_BASE_URL, IMAGE_BASE_URL } from '../config'; // 导入公共配置

// --- Existing Timer Logic ---
const duration = 3600 // 例如 1 小时倒计时
const remaining = ref(duration)
const timeString = ref(formatTime(remaining.value))
let timer = null

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${h}:${m}:${s}`
}

// --- New Image Fetching Logic ---
const imageUrl = ref('');
// 图片URL前缀，使用公共配置拼接
const IMAGE_PREFIX = `${IMAGE_BASE_URL}/picture/floating/`;

const fetchFloatingImage = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/picture/getpublicall`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ channel_id: 11, limit: 1, status: 1 })
    });

    if (response.ok) {
      const result = await response.json();
      const data = result.data || [];
      // 浮动图标通常只有一个，我们取第一个
      if (data.length > 0) {
        const firstItem = data[0];
        try {
          const info = JSON.parse(firstItem.info);
          imageUrl.value = IMAGE_PREFIX + info.cover;
        } catch (e) {
          console.error(`解析浮动图片 info 失败 (ID: ${firstItem.id}):`, firstItem.info, e);
        }
      }
    } else {
      console.error('获取浮动图片失败:', response.status);
    }
  } catch (error) {
    console.error('获取浮动图片失败:', error);
  }
};

onMounted(() => {
  // 启动倒计时
  timer = setInterval(() => {
    if (remaining.value > 0) {
      remaining.value--
      timeString.value = formatTime(remaining.value)
    } else {
      clearInterval(timer)
    }
  }, 1000)

  // 获取图片
  fetchFloatingImage();
})

onUnmounted(() => {
  clearInterval(timer)
})

</script>

<template>
  <div class="floating">
    <div class="date">{{ timeString }}</div>
    <!-- 仅在获取到图片URL后显示 -->
    <img v-if="imageUrl" :src="imageUrl" height="100%" width="100%"/>
  </div>
<!--  <div class="floating a2">-->
<!--    <div class="date">{{ timeString }}</div>-->
<!--    <img src="../assets/ms/2.2 after.webp" height="100%" width="100%"/>-->
<!--  </div>-->
</template>

<style scoped>
.floating{ width: 72px; height: 88px; position: fixed; z-index: 999; right: 8px; bottom: calc(310px + env(safe-area-inset-bottom));}
.a2{ bottom: calc(188px + env(safe-area-inset-bottom))}
.badge{ width: 22px; height: 23px; line-height: 22px; text-align: center; position: absolute; right: 0; border-radius: 100px;
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.8),inset 0 0 0 2px #ffecad; color:#ffffff;
  background: #ff0000; font-size: 13px; font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.date{ width: 72px; height: 19px; text-align: center; font-size: 8.5px; font-weight: bold; position: absolute; bottom: 2px; text-transform: capitalize; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */}
.light4{ width: 130px; height: 130px; position: absolute; z-index: -1; left: -27px; top: -15px;}

.rotate{ animation: rotate 3s linear infinite;}
.rotate2{ animation: rotate 10s linear infinite;}

.scale{ animation: scale 3s ease-in-out infinite;}
.opacity{ animation: opacity 3s ease-in-out infinite;}

@keyframes rotate {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}
@keyframes scale {
  0%   { transform: scale(1); }
  50%  { transform: scale(0.8); }
  100% { transform: scale(1); }
}
@keyframes opacity {
  0%, 100% { opacity: 0.8; }
  50%      { opacity: 0.4; }
}

</style>