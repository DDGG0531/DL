import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Service from '@/components/Service'
import Product from '@/components/Product'

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
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/Product/:category/:page',
      name: 'Product',
      component: Product
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
