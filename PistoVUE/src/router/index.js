import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue' 
import AddProductView from '@/views/AddProductView.vue'
import TeamView from '../views/TeamView.vue'
import AuthView from '../views/AuthView.vue'

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
      component: ProductsView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/ProductsView.vue') // Alternative: Lazy Loading
    },
    {
      path: '/aggiungi-prodotto',
      name: 'add-product',
      component: AddProductView
    },
    {
      path: '/chi-siamo',
      name: 'team',
      component: TeamView
    },
    {
      path: '/login', // Separazione di login e registrazione???
      name: 'auth',
      component: AuthView
    }
  ],
  // Aggiunge una classe attiva ai link corrispondenti alla rotta corrente
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active' // Utile per evidenziare esattamente la home
})

export default router
