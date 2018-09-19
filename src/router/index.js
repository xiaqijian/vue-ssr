import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Nav1 from '@/components/nav'
import Nav2 from '@/components/nav2'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/nav1',
      name:'nav1',
      component: Nav1
    },
    {
      path:'/nav2',
      name:'nav2',
      component: Nav2
    }
  ]
})
