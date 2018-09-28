import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import routerConfig from './routers/config.js'

const routes = new VueRouter(routerConfig)
Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
  el: '#app',
  routes,
  render: h => h(App)
})
