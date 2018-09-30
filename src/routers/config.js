import Admin from '../components/Admin/Index.vue'
import Welcome from '../components/Welcome.vue'
import NotFound from '../components/NotFound.vue'

export default {
  mode: 'history',
  routes: [
    {
      path: '/Admin',
      component:Admin,
      children: [
        { path: '', component: Welcome },

      ]
    },
    {
      path:'*',component:NotFound,hidden:true
    }

  ]
}