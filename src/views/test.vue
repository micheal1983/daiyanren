<template>
  <div class="page-shell">
    <div class="scroll" ref="wrap" @scroll.passive="onScroll">
      <div
          v-for="(item, i) in modules"
          :key="i"
          class="mod"
          :style="{
          background: colors[i],
          height: heights[i] + 'px',
          marginBottom: margins[i] + 'px',
          transform: `scaleY(${scales[i]})`,
          transformOrigin: transformOrigins[i],
        }"
      >
        模块 {{ i + 1 }}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted, onUnmounted} from "vue";

const wrap = ref(null);
const colors = ["#ff6b6b", "#4d96ff", "#6bcb77", "#ffd93d", "#b980f0"];
const modules = Array(5).fill(null);

/* ✅ 模块高度设置
   模块 1：160px
   模块 2：200px
   模块 3：320px
   模块 4：220px
   模块 5：360px
*/
const heights = [160, 200, 320, 220, 360];

/* ✅ 动态属性
   margins：每个模块的动态底部间距（用于挤压）
   scales：每个模块的纵向缩放（果冻变形）
   transformOrigins：每个模块的伸缩锚点（上滑固定顶部、下滑固定底部）
*/
const margins = reactive(Array(modules.length).fill(20));
const scales = reactive(Array(modules.length).fill(1));
const transformOrigins = reactive(Array(modules.length).fill("center top"));

// 延迟传播缓冲区（用于制造波动延迟效果）
const marginBuffer = Array(modules.length).fill(20).map(() => []);

// 滚动状态变量
let lastScrollTop = 0;
let scrollVelocity = 0;
let direction = "down";
let idleFrames = 0;
let raf = 0;

/* ✅ 参数控制区
-------------------------------------------------- */
const baseSpacing = 20;     // 默认模块间距
const elasticity = 0.6;     // 弹性强度（越大挤压幅度越大）
const damping = 0.85;       // 延迟传播的柔和程度（越小越柔）
const recoverSpeed = 0.1;   // 停止滚动后回归速度
const squeezeMin = 8;       // 最小间距（挤压时不会小于这个值）
const squeezeMax = 80;      // 最大间距（下拉时不会大于这个值）
const delayFrames = 5;      // 每个模块之间的传播延迟帧数

/* ✅ 果冻 scale 参数
-------------------------------------------------- */
const scaleElasticity = 0.004; // 果冻压缩幅度（越大果冻感越强）
const scaleRecover = 0.12;     // 果冻回弹速度（停止后恢复的快慢）

/* ✅ 滚动事件：计算滚动速度与方向
-------------------------------------------------- */
function onScroll() {
  const top = wrap.value.scrollTop;
  scrollVelocity = top - lastScrollTop;
  direction = scrollVelocity > 0 ? "down" : "up"; // 判断是上划还是下划
  lastScrollTop = top;
  idleFrames = 0;
}

/* ✅ 动画主循环
-------------------------------------------------- */
function loop() {
  if (Math.abs(scrollVelocity) < 0.5) idleFrames++;
  else idleFrames = 0;

  const velocity = scrollVelocity;
  const up = direction === "up";
  const down = direction === "down";

  // === 1️⃣ 确定传播方向 ===
  const startIndex = up ? 0 : margins.length - 1;
  const endIndex = up ? margins.length : -1;
  const step = up ? 1 : -1;

  // === 2️⃣ 根据滑动速度计算目标间距 ===
  let target = baseSpacing;
  if (velocity < -1) {
    // 上滑 → 挤压
    target = Math.max(baseSpacing - Math.abs(velocity) * elasticity, squeezeMin);
  } else if (velocity > 1) {
    // 下滑 → 拉伸
    target = Math.min(baseSpacing + velocity * elasticity, squeezeMax);
  }

  // === 3️⃣ 设置果冻伸缩锚点（上滑顶部固定，下滑底部固定） ===
  const origin = up ? "center top" : "center bottom";
  for (let i = 0; i < transformOrigins.length; i++) {
    transformOrigins[i] = origin;
  }

  // === 4️⃣ 起点模块立即响应滚动 ===
  margins[startIndex] += (target - margins[startIndex]) * 0.4;

  const scaleTargetStart =
      1 - (baseSpacing - margins[startIndex]) * scaleElasticity * (heights[startIndex] / 180);
  scales[startIndex] += (scaleTargetStart - scales[startIndex]) * 0.4;

  // 记录入缓冲区
  marginBuffer[startIndex].push(margins[startIndex]);
  if (marginBuffer[startIndex].length > delayFrames) marginBuffer[startIndex].shift();

  // === 5️⃣ 延迟传播给其他模块 ===
  for (let i = startIndex + step; i !== endIndex; i += step) {
    const prevIndex = i - step;
    const delayedMargin = marginBuffer[prevIndex]?.[0] ?? baseSpacing;
    const diff = delayedMargin - margins[i];
    margins[i] += diff * (1 - damping);

    const scaleTarget =
        1 - (baseSpacing - margins[i]) * scaleElasticity * (heights[i] / 180);
    scales[i] += (scaleTarget - scales[i]) * 0.25;

    marginBuffer[i].push(margins[i]);
    if (marginBuffer[i].length > delayFrames) marginBuffer[i].shift();
  }

  // === 6️⃣ 停止滚动后缓慢回归 ===
  if (idleFrames > 15) {
    for (let i = 0; i < margins.length; i++) {
      margins[i] += (baseSpacing - margins[i]) * recoverSpeed;
      scales[i] += (1 - scales[i]) * scaleRecover;
    }
  }

  scrollVelocity *= 0.9;
  raf = requestAnimationFrame(loop);
}

/* ✅ 生命周期钩子
-------------------------------------------------- */
onMounted(() => {
  raf = requestAnimationFrame(loop);
});
onUnmounted(() => cancelAnimationFrame(raf));
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
  padding: 20px 20px 100px;
}

/* ✅ 模块样式 */
.mod {
  width: 100%;
  border-radius: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: margin-bottom 0.12s ease-out;
  will-change: margin-bottom, transform;
}
</style>
