import Vue from 'vue'
import Router from 'vue-router'
import UsersTable from './components/UsersTable.vue'
import NewUser from './components/NewUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/user/new',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/user',
      name: 'User',
      component: UsersTable
    },
    {
      path: '/',
      name: 'UsersTable',
      component: UsersTable
    }
  ]
})
