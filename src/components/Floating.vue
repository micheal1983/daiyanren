<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// 倒计时时长（以秒为单位）
const duration = 3600 // 例如 1 小时倒计时

const remaining = ref(duration)
const timeString = ref(formatTime(remaining.value))

let timer = null

onMounted(() => {
  timer = setInterval(() => {
    if (remaining.value > 0) {
      remaining.value--
      timeString.value = formatTime(remaining.value)
    } else {
      clearInterval(timer)
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0')
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')
  const s = String(seconds % 60).padStart(2, '0')
  return `${h}:${m}:${s}`
}
</script>

<template>
  <div class="floating">
<!--    <div class="badge">4</div>-->
    <div class="date">6 Days Left</div>
    <div class="light4 opacity"><img class="rotate" src="../assets/ms/light4.webp" height="100%" width="100%"/></div>
    <div class="light4 scale"><img class="rotate2" src="../assets/ms/light5.webp" height="100%" width="100%"/></div>
    <img src="../assets/ms/2.2.webp" height="100%" width="100%"/>

  </div>
  <div class="floating a2">
    <div class="date">{{ timeString }}</div>
    <img src="../assets/ms/2.2 after.webp" height="100%" width="100%"/>
  </div>
</template>

<style scoped>
.floating{ width: 72px; height: 88px; position: fixed; z-index: 999; right: 8px; bottom: calc(92px + env(safe-area-inset-bottom));}
.a2{ bottom: calc(188px + env(safe-area-inset-bottom))}
.badge{ width: 22px; height: 23px; line-height: 22px; text-align: center; position: absolute; right: 0; border-radius: 100px;
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.8),inset 0 0 0 2px #ffecad; color:#ffffff;
  background: #ff0000; font-size: 13px; font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.date{ width: 72px; height: 19px; line-height: 17px; text-align: center; font-size: 10px; font-weight: bold; position: absolute; bottom: 1px; text-transform: capitalize; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);}
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