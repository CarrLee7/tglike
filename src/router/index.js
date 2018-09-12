import Vue from 'vue'
import Router from 'vue-router'
import window from '../components/window.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'window',
      component: window
    }
  ]
})
