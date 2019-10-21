import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Login from './views/login/l'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      children: [
        {path: 'areahead', name: 'areahead', component: () => import('@/views/area/Areahead.vue')},
        {path: 'district', name: 'district', component: () => import('@/views/district/District.vue')},
        {path: 'merchant', name: 'merchant', component: () => import('@/views/merchant/Merchant.vue')},
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/views/error/error.vue')
    }
  ]
})
