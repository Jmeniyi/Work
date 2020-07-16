import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Head',
    name: 'Head',
    component: () => import('../components/Head.vue')
  },
  {
    path: '/Footer',
    name: 'Footer',
    component: () => import('../components/Footer.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
