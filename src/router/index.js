import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: 'aup2org',
  routerLinkExactActive: 'active',
  routes: [
    {
      path: '/',
      name: 'Passengers',
      component: () => import('@/components/Passengers')
    },
    {
      path: '/services',
      name: 'Service',
      component: () => import('@/components/Services')
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: () => import('@/components/Confirm')
    }
  ]
})
