import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue')
  },{
    path: '/cor',
    component: () => import('../views/Cor.vue')
  },{
    path: '/het',
    component: () => import('../views/Het.vue')
  },
 

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
