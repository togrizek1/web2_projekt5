import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomePage.vue'),
    },
    {
      path: '/in-progress',
      name: 'inProgress',
      component: () => import('../views/InProgressPage.vue'),
    },
    {
      path: '/finished',
      name: 'finished',
      component: () => import('../views/FinishedBooksPage.vue'),
    },
    {
      path: "/:catchAll(.*)",
      name: 'NotFound',
      component: () => import('../views/NotFoundPage.vue'),
    }
  ],
})

export default router
