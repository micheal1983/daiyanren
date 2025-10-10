<template>
  <top msg="Hello World"/>
  <div class="page-shell" ref="page">
    <div class="mod-item red">
      <img src="../assets/ms/new/Banner.webp" alt="" width="100%">
    </div>
    <div class="mod-item blue">
      <img src="../assets/ms/new/RecommoendTitle.webp" alt="" height="100%">
    </div>
    <div class="mod-item green">
      <img src="../assets/ms/new/RecommoendList.webp" alt="" height="100%">
    </div>
    <div class="mod-item yellow">
      <img src="../assets/ms/new/Entrace.webp" alt="" width="100%">
    </div>
    <div class="mod-item purple">
      <img src="../assets/ms/new/MostPlayTitle.webp" alt="" height="100%">
    </div>
    <div class="mod-item purple1">
      <img src="../assets/ms/new/MostPlayGameList.webp" alt="" height="100%">
    </div>
    <div class="mod-item purple1">
      <img src="../assets/ms/new/MostPlayGameList.webp" alt="" height="100%">
    </div>
    <div class="mod-item purple1">
      <img src="../assets/ms/new/MostPlayGameList.webp" alt="" height="100%">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue"
import { animate, spring } from "motion"
import Top from "../components/top.vue";

/* ✅ 页面容器 */
const page = ref(null)
let mods = []

/* ✅ 动画参数 */
const delayStep = 0.05      // 模块之间延迟传播（秒）
const stiffness = 150       // 弹性系数（越大越“紧”）
const damping = 8           // 阻尼（越小越Q弹）
const followStrength = 0.4  // 跟随强度（越大越同步）
const falloff = 0.85        // 波动衰减系数（越小底部反应更明显）
const overshootAmp = 0.05   // 回弹超调幅度（0.03~0.08建议值）

/* ✅ 自动滚动配置 */
const scrollDistance = 120  // 页面加载后自动下滑距离(px)
const scrollDuration = 800  // 动画时间(ms)
const scrollDelay = 400     // 延迟启动时间(ms)

/* ✅ 状态变量 */
let lastScrollY = 0
let velocity = 0
let ticking = false
let idleTimer = null

/* =====================
   🌊 滚动波动动画逻辑
===================== */
function update() {
  const current = page.value.scrollTop
  velocity = current - lastScrollY
  lastScrollY = current

  const isScrolling = Math.abs(velocity) > 0.5

  // 🌊 模块延迟波动
  mods.forEach((el, i) => {
    const delay = i * delayStep
    const influence = Math.pow(falloff, i) // 越往下衰减越少
    const translateY = -current * influence * followStrength
    const scaleY = 1 - Math.min(Math.abs(velocity) / 3000, 0.05) * influence

    animate(
        el,
        { y: translateY, scaleY },
        {
          type: spring,
          stiffness,
          damping,
          delay,
          duration: 0.6,
        }
    )
  })

  // 🧘 停止滚动后回弹 + 轻微超调
  clearTimeout(idleTimer)
  if (!isScrolling) {
    idleTimer = setTimeout(() => {
      mods.forEach((el, i) => {
        const overshootY = (Math.random() - 0.5) * overshootAmp * 100

        // 第一段：反向小弹
        animate(
            el,
            { y: overshootY, scaleY: 1 + overshootAmp },
            {
              type: spring,
              stiffness: 160,
              damping: 12,
              delay: i * 0.05,
              duration: 0.25,
              onComplete: () => {
                // 第二段：再回到原位
                animate(
                    el,
                    { y: 0, scaleY: 1 },
                    {
                      type: spring,
                      stiffness: 180,
                      damping: 16,
                      delay: 0,
                      duration: 0.4,
                    }
                )
              },
            }
        )
      })
    }, 150)
  }

  ticking = false
}

/* =====================
   📜 滚动事件绑定
===================== */
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(update)
    ticking = true
  }
}

/* =====================
   🧭 页面加载后自动下滑
===================== */
function autoScroll() {
  const el = page.value
  const start = el.scrollTop
  const end = start + scrollDistance
  const startTime = performance.now()

  function scrollAnim(now) {
    const t = (now - startTime) / scrollDuration
    const progress = Math.min(t, 1)
    const ease =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2
    el.scrollTop = start + (end - start) * ease
    if (progress < 1) requestAnimationFrame(scrollAnim)
  }

  requestAnimationFrame(scrollAnim)
}

/* =====================
   🪄 生命周期
===================== */
onMounted(async () => {
  await nextTick()
  mods = Array.from(page.value.querySelectorAll(".mod-item"))
  page.value.addEventListener("scroll", onScroll, { passive: true })

  // 页面加载后自动下滑
  setTimeout(() => autoScroll(), scrollDelay)
})

onUnmounted(() => {
  page.value?.removeEventListener("scroll", onScroll)
})
</script>

<style scoped>
.page-shell {
  width: 390px;
  height: 844px;
  overflow-y: scroll;
  background: #181A20;
  padding: 0;
}

/* ✅ 模块基础样式 */
.mod-item {
  width: 366px;
  height: 160px;
  margin: 30px 12px;
  border-radius: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center bottom;
  will-change: transform;
}

/* ✅ 各模块配色与高度 */
.red {
  background: #ff6b6b;
  height: 100px;
  margin-top: 100px;
}
.blue {
  height: 13px;
  justify-content: left;
}
.green {
  height: 74px;
  margin-top: -12px;
}
.yellow {
  color: #333;
}
.purple {
  height: 28px;
  margin-bottom: -12px;
}
.purple1 {
  height: 142px;
  margin-bottom: -12px;
}
</style>
