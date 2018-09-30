import Admin from '../components/Admin/Index.vue'
import Welcome from '../components/Welcome.vue'
import NotFound from '../components/NotFound.vue'
import UserInfo from '../components/Admin/UserInfo.vue'

export default {
  linkActiveClass:"active",
  mode: 'history',
  routes: [
    {
      path: '/Admin',
      component:Admin,
      children: [
        { path: '', component: Welcome },
        { path: '/user', component: UserInfo }
      ]
    },
    {
      path:'*',component:NotFound,hidden:true
    }

  ]
}