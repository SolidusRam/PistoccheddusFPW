import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue' 
import AddProductView from '@/views/AddProductView.vue'
import TeamView from '../views/TeamView.vue'
import AuthView from '../views/AuthView.vue'
import { requireAuth } from '@/utils/routeGuards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prodotti',
      name: 'products',
      component: ProductsView,
      beforeEnter: requireAuth
    },
    {
      path: '/aggiungi-prodotto',
      name: 'add-product',
      component: AddProductView,
      beforeEnter: requireAuth
    },
    {
      path: '/chi-siamo',
      name: 'team',
      component: TeamView
    },
    {
      path: '/login',
      name: 'auth',
      component: AuthView
    }
  ],
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active' //serve per 
})

export default router
