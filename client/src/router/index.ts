import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/CalendarView.vue')
    },
    {
      path: '/today',
      name: 'today',
      component: () => import('@/views/TodayView.vue')
    },
    {
      path: '/report',
      name: 'report',
      component: () => import('@/views/ReportView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/my',
      name: 'lomygin',
      component: () => import('@/views/MyView.vue')
    }
  ]
})

export default router
