import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Service from '@/components/Service'
import Product from '@/components/Product'
import ProductInner from '@/components/ProductInner'
import Intro from '@/components/Intro'
import Pipe from '@/components/Pipe'

Vue.use(Router)

export default new Router({
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
      path: '/Intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/Product/:category/:page',
      name: 'Product',
      component: Product
    },
    {
      path: '/ProductInner/:id',
      name: 'ProductInner',
      component: ProductInner
    },
    {
      path: '/Pipe',
      name: 'Pipe',
      component: Pipe
    }
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   return {x: 0, y: 0}
  // }
})
