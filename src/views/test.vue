<template>
  <div class="page-shell">
    <div class="scroll" ref="scrollRef">
      <!-- 6个模块 -->
      <div
          v-for="(item, i) in modules"
          :key="i"
          class="mod"
          :style="{
          background: colors[i],
          height: heights[i] + 'px',
          marginBottom: margins[i] + 'px',
          opacity: opacities[i],
        }"
      >
        模块 {{ i + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue"

/* --------------------------------------------------
 * ✅ 参数区
 * -------------------------------------------------- */
const moduleCount = 6
const spacing = 20
const heights = [160, 200, 280, 220, 300, 260]
const colors = ["#ff6b6b", "#4d96ff", "#6bcb77", "#ffd93d", "#b980f0", "#ffa94d"]
const modules = Array(moduleCount).fill(null)

/* ✅ 自动滚动配置 */
const scrollDistance = 200    // 自动下滑距离(px)
const scrollDuration = 2000   // 动画时间(ms)
const scrollDelay = 500       // 延迟启动时间(ms)

/* ✅ 模块动画配置 */
const slideDuration = 900     // 单个模块上划用时(ms)
const slideDelayStep = 250    // 模块依次延迟(ms)
const bounceDuration = 600    // 果冻回弹时长(ms)
const bounceOvershoot = 1.25  // 超出倍数（1.25=多弹一点）
const slideSpeedDecay = 0.85  // 层级速度衰减（后面更慢）
const baseSpacing = 20        // 模块原始间距(px)

/* --------------------------------------------------
 * ✅ 动态状态
 * -------------------------------------------------- */
const scrollRef = ref(null)
const margins = reactive(Array(moduleCount).fill(baseSpacing))
const opacities = reactive(Array(moduleCount).fill(1))

/* --------------------------------------------------
 * ✅ 浏览器自动下滑动画
 * -------------------------------------------------- */
function autoScroll() {
  const el = scrollRef.value
  if (!el) return
  const start = el.scrollTop
  const end = start + scrollDistance
  const startTime = performance.now()

  function animateScroll(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / scrollDuration, 1)
    const ease =
        progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2
    el.scrollTop = start + (end - start) * ease
    if (progress < 1) requestAnimationFrame(animateScroll)
  }
  requestAnimationFrame(animateScroll)
}

/* --------------------------------------------------
 * ✅ 依次上划 + margin回弹效果
 * -------------------------------------------------- */
function slideModulesUp() {
  modules.forEach((_, i) => {
    setTimeout(() => {
      const startTime = performance.now()
      const startMargin = baseSpacing
      const compressed = baseSpacing * 0.3 // 上划瞬间挤压
      const duration = slideDuration * Math.pow(slideSpeedDecay, i)

      function slideUp() {
        const now = performance.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const ease = 1 - Math.pow(1 - progress, 3)

        // 挤压 margin-bottom
        margins[i] = startMargin - (startMargin - compressed) * ease
        opacities[i] = 1 - progress * 0.1

        if (progress < 1) requestAnimationFrame(slideUp)
        else bounceBack(i) // 完成后触发回弹
      }

      requestAnimationFrame(slideUp)
    }, slideDelayStep * i)
  })
}

/* --------------------------------------------------
 * ✅ margin 回弹逻辑
 * -------------------------------------------------- */
function bounceBack(index) {
  const startTime = performance.now()
  const start = margins[index]
  const end = baseSpacing
  const overshoot = end * bounceOvershoot

  function animate() {
    const now = performance.now()
    const elapsed = now - startTime
    const progress = Math.min(elapsed / bounceDuration, 1)

    // 使用弹性缓动曲线 (easeOutElastic)
    const p = 0.3
    const ease =
        Math.pow(2, -10 * progress) *
        Math.sin(((progress - p / 4) * (2 * Math.PI)) / p) +
        1

    // margin在压缩后，先略超过正常值，再回到20px
    margins[index] = start + (overshoot - start) * ease
    if (progress < 1) requestAnimationFrame(animate)
    else margins[index] = end // 归位
  }

  requestAnimationFrame(animate)
}

/* --------------------------------------------------
 * ✅ 生命周期
 * -------------------------------------------------- */
onMounted(() => {
  setTimeout(() => {
    autoScroll()
    slideModulesUp()
  }, scrollDelay)
})
</script>

<style scoped>
.page-shell {
  width: 390px;
  height: 844px;
  background: #0b0d12;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 20px;
}

.mod {
  width: 100%;
  border-radius: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: margin-bottom 0.15s ease-out;
  will-change: margin-bottom, opacity;
}
</style>
