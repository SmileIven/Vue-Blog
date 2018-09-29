import Index from '../components/Admin/Index.vue'
import Welcome from '../components/Welcome.vue'

export default {
  mode: 'history',
  routes: [
    { path: '*', component: Welcome },
    { path: '/admin', component: Index }

  ]
}