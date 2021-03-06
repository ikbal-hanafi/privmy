import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import ListFile from '@/components/ListFile'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/privmy/',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list_file',
      name: 'ListFile',
      component: ListFile
    }
  ]
})
