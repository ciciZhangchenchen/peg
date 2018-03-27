import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Member',
      name: 'Member',
      component: Member
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    }
  ]
})
