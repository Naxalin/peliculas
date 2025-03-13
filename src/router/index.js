import { createRouter, createWebHistory } from 'vue-router'
import EstrenosView from '@/views/EstrenosView.vue'
import CartaPeliculasView from '@/views/CatalogoView.vue'
import SesionView from '@/views/SesionView.vue'
import detalles from '@/views/DetallesView.vue'
import Main from '@/views/InicioView.vue'
import UltimasPeliculasView from '@/views/UltimasPeliculasView.vue'
import RegistroView from '@/views/RegistroView.vue'
import DerechosAutor from '@/views/DerechosAutorView.vue'
import CookiesView from '@/views/CookiesView.vue'
import PoliticasPrivacidadView from '@/views/PoliticasPrivacidadView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/detalles/:id',
      name: 'detalles',
      component: detalles,
    },
    {
      path: '/derechos-de-autor',
      name: 'derechos',
      component: DerechosAutor,
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: CookiesView,
    },
    {
      path: '/politicas-de-privacidad',
      name: 'politicas',
      component: PoliticasPrivacidadView,
    },
    {
      path: '/ultimas',
      name: 'ultimas',
      component: UltimasPeliculasView,
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroView,
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
