import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import './common/styles/index.less'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash'
})

var vm = new Vue({
  el: '#app',
  router,
  store,
  data: {
    name: 'yexun'
  }
})
