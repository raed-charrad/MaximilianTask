import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/memories',
    name: 'Memories',
    component: () => import('../views/MemoriesPage.vue')
  },
  {
    path: '/memories/:id',
    name: 'MemoryDetail',
    component: () => import('../views/MemoryDetails.vue')
  },
  {
    path: '/new-memory',
    name: 'NewMemory',
    component: () => import('../views/AddMemoryPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
