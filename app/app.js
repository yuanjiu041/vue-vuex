import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store'
import Layout from './Layout'
import './common/styles/index.less'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export function createApp () {
	const app = new Vue({
	  router,
	  store,
	  render: h => h(Layout)
	})
	return { app, router, store }
}
