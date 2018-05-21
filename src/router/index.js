import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Service from '@/components/Service'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {name: 'Home'}
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    }
  ]
})
