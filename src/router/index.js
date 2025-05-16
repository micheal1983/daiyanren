import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import game_list from '../views/game_list.vue'
import reward from "../views/reward.vue";
import tongits from "../views/tongits.vue";
import wallet from "../views/wallet.vue";
import account from "../views/account.vue";
import game from "../views/game.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/reward', name: 'reward', component: reward },
    { path: '/tongits', name: 'tongits', component: tongits },
    { path: '/wallet', name: 'wallet', component: wallet },
    { path: '/account', name: 'account', component: account },
    { path: '/game_list', name: 'game_list', component: game_list },
    { path: '/game', name: 'game', component: game },
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
