import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import game_list from '../views/game_list.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/game_list', name: 'game_list', component: game_list },
]

const router = createRouter({
    history: createWebHistory('/daiyanren/'),
    routes,
})

export default router
