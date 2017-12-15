import Vue from 'vue/dist/vue.min'
import VueRouter from 'vue-router'
import routes from './router'

import './common/styles/index.less'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash'
})

var vm = new Vue({
  el: '#app',
  router,
  data: {
    name: 'yexun'
  }
})

console.log(vm)
