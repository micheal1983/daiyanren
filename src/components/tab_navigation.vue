<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// 定义导航项
const tabs = [
  { name: 'home', label: 'home', path: '/', icon: 'home' },
  { name: 'reward', label: 'reward', path: '/reward', icon: 'reward' },
  { name: 'tongits', label: 'tongits', path: '/tongits', icon: 'tongits_btn' },
  { name: 'wallet', label: 'wallet', path: '/wallet', icon: 'wallet' },
  { name: 'account', label: 'account', path: '/account', icon: 'account' },
]

// 判断是否为当前路由
function isActive(path) {
  return route.path === path
}
</script>

<template>
  <div id="tab_navigation">
    <router-link
        v-for="tab in tabs"
        :key="tab.name"
        :to="tab.path"
        class="item"
        :class="[tab.name, { focus: isActive(tab.path) }]"
    >
      {{ tab.label }}
    </router-link>
  </div>
</template>

<style scoped>
#tab_navigation {
  width: 100%;
  height: 64px;
  background: #312F37;
  position: fixed;
  bottom: 0;
  z-index: 9998;
  border-radius: 15px 15px 0 0;
  margin-bottom: -1px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: env(safe-area-inset-bottom, 34px);
}

.item {
  width: 72px;
  height: 52px;
  line-height: 70px;
  margin-top: 6px;
  text-transform: capitalize;
  color: #BCB8C5;
  font-size: 11px;
  text-align: center;
  text-decoration: none;
}

/* 默认图标背景 */
.home { background: url("../assets/ms/home.webp") no-repeat top; background-size: 28px 28px; }
.reward { background: url("../assets/ms/reward.webp") no-repeat top; background-size: 28px 28px; }
.tongits { background: url("../assets/ms/tongits_btn.webp") no-repeat top; background-size: 28px 28px; }
.wallet { background: url("../assets/ms/wallet.webp") no-repeat top; background-size: 28px 28px; }
.account { background: url("../assets/ms/account.webp") no-repeat top; background-size: 28px 28px; }

/* 激活状态图标与颜色 */
.home.focus { background-image: url("../assets/ms/home_act.webp"); color: #FFC972; }
.reward.focus { background-image: url("../assets/ms/reward_act.webp"); color: #FFC972; }
.tongits.focus { background-image: url("../assets/ms/tongits_btn_act.webp"); color: #FFC972; }
.wallet.focus { background-image: url("../assets/ms/wallet_act.webp"); color: #FFC972; }
.account.focus { background-image: url("../assets/ms/account_act.webp"); color: #FFC972; }
</style>
