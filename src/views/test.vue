<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const switchCard = () => {
  activeIndex.value = activeIndex.value === 0 ? 1 : 0
}
</script>


<template>
  <div class="warp">
    <div
        class="banner"
        :class="activeIndex === 0 ? 'scene-left-active' : 'scene-right-active'"
    >
    <!-- 左图 -->
      <div
          class="banner_son left"
          :class="{ active: activeIndex === 0, inactive: activeIndex !== 0 }"
          @click="switchCard"
      >
        <div style="position: absolute">121312312</div>
        <img src="../assets/test/Ultra Tournament1.png" />
      </div>

      <!-- 右图 -->
      <div
          class="banner_son right"
          :class="{ active: activeIndex === 1, inactive: activeIndex !== 1 }"
          @click="switchCard"
      >
        <div style="position: absolute">99999</div>
        <img src="../assets/test/Ultra Tournament2.png" />
      </div>
    </div>
  </div>
</template>



<style scoped>
.warp {
  width: 366px;
  height: 522px;
  margin: 20px auto;
  padding-top: 340px;
  background: url("../assets/test/BG.png") no-repeat;
  background-size: contain;
}

.banner {
  position: relative;
  width: 340px;
  height: 158px;
  margin: 20px auto;
  overflow: hidden;

  /* 统一动画节奏 */
  --move-main: 18px;   /* 主卡推进距离 */
  --move-push: 8px;    /* 被挤开的卡 */
}

/* 卡片基础 */
.banner_son {
  position: absolute;
  top: 0;
  width: 280px;
  height: 158px;

  transform-origin: left center;
  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1),
  z-index 0.1s linear;

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

.banner_son img {
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
}

/* 初始静态位置 */
.left {
  transform: translateX(0) scale(1);
  z-index: 2;
}

.right {
  transform: translateX(60px) scale(0.90);
  z-index: 1;
}

/* ============================= */
/* 场景 1：左卡被点击（左主） */
/* ============================= */

.scene-left-active .left {
  /* 左卡向右推进 */
  transform: translateX(var(--move-main)) scale(1);
  z-index: 2;
}

.scene-left-active .right {
  /* 右卡只“被挤开”，不再叠加基准偏移 */
  transform: translateX(60px) translateX(var(--move-push)) scale(0.90);
  z-index: 1;
}

/* ============================= */
/* 场景 2：右卡被点击（右主） */
/* ============================= */

.scene-right-active .right {
  /* 右卡向左推进，但仍围绕 60px 基准 */
  transform: translateX(60px) translateX(calc(-1 * var(--move-main))) scale(1);
  z-index: 2;
}

.scene-right-active .left {
  /* 左卡被挤向左 */
  transform: translateX(calc(-1 * var(--move-push))) scale(0.90);
  z-index: 1;
}


</style>