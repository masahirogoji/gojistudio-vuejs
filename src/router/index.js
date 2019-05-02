import Vue from 'vue'
import Router from 'vue-router'
import MyAbout from '@/components/MyAbout'
import MyWork from '@/components/MyWork'
import MyLibrary from '@/components/MyLibrary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyAbout',
      component: MyAbout
    },
    {
      path: '/work',
      name: 'MyWork',
      component: MyWork
    },
    {
      path: '/library',
      name: 'MyLibrary',
      component: MyLibrary
    }
  ]
})
