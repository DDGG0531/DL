import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Service from '@/components/Service'
import Product from '@/components/Product'
import ProductInner from '@/components/ProductInner'
import Intro from '@/components/Intro'
import Pipe from '@/components/Pipe'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Home'},
      meta: {title:'首頁-東林工程行' }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {title:'首頁-東林工程行' }
    },
    {
      path: '/Intro',
      name: 'Intro',
      component: Intro,
      meta: {title:'公司簡介-東林工程行' }
    },
    {
      path: '/Service/:id',
      name: 'Service',
      component: Service,
      meta: {title:'服務項目-東林工程行' }
    },
    {
      path: '/Product/:category/:page',
      name: 'Product',
      component: Product,
      meta: {title:'實績案例-東林工程行' }
    },
    {
      path: '/ProductInner/:id',
      name: 'ProductInner',
      component: ProductInner,
      meta: {title:'實績案例-東林工程行' }
    },
    {
      path: '/Pipe',
      name: 'Pipe',
      component: Pipe,
      meta: {title:'接案流程-東林工程行' }
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta: {title:'聯絡我們-東林工程行' }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
