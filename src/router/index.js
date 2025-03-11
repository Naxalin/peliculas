import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EstrenosView from '@/views/EstrenosView.vue'
import CartaPeliculasView from '@/views/CatalogoView.vue'
import SesionView from '@/views/SesionView.vue'
import Main from '@/components/Main.vue'
const router = createRouter({
  
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path:'/estrenos',
      name:'estrenos',
      component: EstrenosView,
    },
    {
      path:'/sesion',
      name:'sesion',
      component: SesionView,
    },
    {
      path:'/catalogo',
      name:'catalogo',
      component: CartaPeliculasView,
    },
    {
      path:'/inicio',
      name:'principio',
      component: Main
    },
  ],
})


export default router
