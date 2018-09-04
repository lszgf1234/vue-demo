import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Element from '@/views/element'
import ElementBtn from '../views/elementBtn'
import ElementLayout from '../views/elementLayout'
import ElementTree from '../views/elementTree'
import ElementPagination from '../views/elementPagination'

Vue.use(Router)

export default new Router({
  routes: [

  {
    path: '/',
    redirect: '/element/'
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/element',
    // name: 'Element',
    component: Element,
    children: [
      {
        path: '',
        redirect: '/element/btn'
      },
      {
        path: 'btn',
        name: 'ElementBtn',
        component: ElementBtn
      },
      {
        path: 'layout',
        name: 'ElementLayout',
        component: ElementLayout
      },
      {
        path: 'tree',
        name: 'ElementTree',
        component: ElementTree
      },
      {
        path: 'pagination',
        name: 'ElementPagination',
        component: ElementPagination
      }
    ]
  },

  ]
})
