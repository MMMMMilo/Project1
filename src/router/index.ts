import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodMenuView from '@/views/FoodMenuView.vue'
import ResturantTwoColumnView from '@/views/ResturantTwoColumnView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/FoodMenu',
      name: 'FoodMenu',
      component: FoodMenuView
    },
    {
      path: '/ResturantTwoColumn',
      name: 'ResturantTwoColumn',
      component: ResturantTwoColumnView
    },
  ]
})

export default router
