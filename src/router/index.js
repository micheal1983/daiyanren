import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import game_list from '../views/game_list.vue'
import reward from "../views/reward.vue";
import tongits from "../views/tongits.vue";
import wallet from "../views/wallet.vue";
import account from "../views/account.vue";
import game from "../views/game.vue";
import promo from "../views/promo.vue";
import SpinePixi from "../components/SpinePixi.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/reward', name: 'reward', component: reward },
    { path: '/tongits', name: 'tongits', component: tongits },
    { path: '/wallet', name: 'wallet', component: wallet },
    { path: '/promo', name: 'promo', component: promo },
    { path: '/account', name: 'account', component: account },
    { path: '/game_list', name: 'game_list', component: game_list },
    { path: '/game', name: 'game', component: game },
    { path: '/SpinePixi', name: 'SpinePixi', component: SpinePixi },
]

const router = createRouter({
    history: createWebHistory('/daiyanren/'),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 总是滚动到顶部
        return { top: 0 }
    }
})

export default router
