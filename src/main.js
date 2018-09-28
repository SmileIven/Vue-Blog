import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import 'element-ui/lib/theme-chalk/index.css'
import routes from './routers/config.js'

const router = new VueRouter(routes)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
