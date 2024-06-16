import { createRouter, createWebHashHistory } from 'vue-router'
// import HomePage from ''

const routes = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue')
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router