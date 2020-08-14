import Vue from 'vue'
import Router from 'vue-router'
import Forum from '@/pages/PageForum'
import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'
import PageThreadShow from '@/pages/PageThreadShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: PageHome
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: Forum,
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: PageThreadShow,
      props: true
    },
    {
      path: '*',
      name: 'NotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})
