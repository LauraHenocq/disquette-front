import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Error from '../pages/404/index.vue'
import Lost from '../pages/lost/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Index
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    },
    {
      path: '/lost',
      name: 'Lost',
      component: Lost
    }
  ]
})
