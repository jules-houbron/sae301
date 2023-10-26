import { createRouter, createWebHistory } from 'vue-router'
import AProposView from '../views/AProposView.vue'
import LoginView from '../views/LoginView.vue'
import PersonnalisationView from '../views/PersonnalisationView.vue'
import HomeView from '../views/HomeView.vue'
import PanierView from '../views/PanierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',                     name: 'home',                        component: HomeView},
    { path: '/apropos',            name: 'apropos',                   component: AProposView},
    { path: '/login',                name: 'login',                       component: LoginView},
    { path: '/personnalisation',     name: 'personnalisation',            component: PersonnalisationView},
    { path: '/panier',               name: 'panier',                      component: PanierView},
  ]
})

export default router
