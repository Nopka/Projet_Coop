import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'conversations',
    component: () => import('../views/Conversations.vue')
  },
  {
    path: '/creationcompte',
    name: 'creationcompte',
    component: () => import('../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: () => import('../views/SeConnecter.vue')
  },
  {
    path: '/creationconversation',
    name: 'CreationConversation',
    component: () => import('../views/CreationConversation.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import('../views/Membres.vue')
  },
  {
    path: '/membre/:id',
    name: 'UnMembre',
    component: () => import('../views/UnMembre.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
