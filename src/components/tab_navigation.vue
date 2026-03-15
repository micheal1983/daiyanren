<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// 定义导航项
const tabs = [
  { name: 'home', label: 'home', path: '/', icon: 'home' },
  { name: 'reward', label: 'reward', path: '/reward', icon: 'reward' },
  { name: 'promo', label: 'promo', path: '/promo', icon: 'tongits_btn' },
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
      <div class="txt">{{ tab.label }}</div>
    </router-link>
  </div>
</template>

<style scoped>
#tab_navigation {
  width: calc(100% + 1px);
  height: 80px;
  background: #20232A;
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
  min-height: 36px;
  text-transform: capitalize;
  color: #BCB8C5;
  font-size: 11px;
  text-align: center;
  text-decoration: none;
}
.txt{ width: 70px; margin-top: 40px;}
/* 默认图标背景 - 修复了大小写匹配问题 */
.home { background: url("../assets/ms/home.webp") no-repeat center; background-size: 28px 28px; font-size: 0;}
.reward { background: url("../assets/ms/Reward.webp") no-repeat center; background-size: 28px 28px;  font-size: 0;}
.tongits { background: url("../assets/ms/tongits_btn.webp") no-repeat center; background-size: 28px 28px;  font-size: 0;}
.promo { background: url("../assets/ms/promo.webp") no-repeat center; background-size: 28px 28px;  font-size: 0;}
.wallet { background: url("../assets/ms/Wallet.webp") no-repeat center; background-size: 28px 28px;  font-size: 0;}
.account { background: url("../assets/ms/Account.webp") no-repeat center; background-size: 28px 28px;  font-size: 0;}

/* 激活状态图标与颜色 - 修复了大小写匹配问题 */
.home.focus { background-image: url("../assets/ms/home_act.webp"); color: #E84141;  font-size: 12px;}
.reward.focus { background-image: url("../assets/ms/Reward_act.webp"); color: #E84141;  font-size: 12px;}
.tongits.focus { background-image: url("../assets/ms/tongits_btn_act.webp"); color: #E84141;  font-size: 12px;}
.promo.focus { background-image: url("../assets/ms/promo_act.webp"); color: #E84141;  font-size: 12px;}
.wallet.focus { background-image: url("../assets/ms/Wallet_act.webp"); color: #E84141;  font-size: 12px;}
.account.focus { background-image: url("../assets/ms/Account_act.webp"); color: #E84141;  font-size: 12px;}
</style>
