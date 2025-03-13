import { createRouter, createWebHistory } from 'vue-router'
import EstrenosView from '@/views/EstrenosView.vue'
import CartaPeliculasView from '@/views/CatalogoView.vue'
import SesionView from '@/views/SesionView.vue'
import detalles from '@/views/DetallesView.vue'
import Main from '@/views/InicioView.vue'
import UltimasPeliculasView from '@/views/UltimasPeliculasView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/detalles',
      name: 'detalles',
      component: detalles,
    },
    {
      path: '/ultimas',
      name: 'ultimas',
      component: UltimasPeliculasView,
    },
    {
      path: '/estrenos',
      name: 'estrenos',
      component: EstrenosView,
    },
    {
      path: '/sesion',
      name: 'sesion',
      component: SesionView,
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: CartaPeliculasView,
    },
    {
      path: '/',
      name: 'principio',
      component: Main,
    },
  ],
})

export default router
