import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/MyFirstView',
      name: 'MyFirstView',
      // 我的第一个实践view
      component: () => import('../views/MyFirst.vue')
    }
  ]
})

export default router
