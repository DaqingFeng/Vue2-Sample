import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const secondPage = r => require.ensure([], () => r(require('../components/SecondPage')), 'SecondPage')
const threePage = r => require.ensure([], () => r(require('../components/ThreePage')), 'ThreePage')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Second',
      name: 'Second',
      component: secondPage
    },
    {
      path: '/Three',
      name: 'Three',
      component: threePage
    }
  ]
})
