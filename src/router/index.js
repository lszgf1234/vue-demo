import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import directory from '@/components/directory'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      redirect: '/HelloWorld'
    },
    /*{
      path: '/',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
      ]
    },*/
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },

  ]
})
