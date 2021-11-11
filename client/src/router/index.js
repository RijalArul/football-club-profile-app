import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllClub from '../views/AllClub.vue'
import ProfileClub from '../views/ProfileClub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/areas/:id/club',
    name: 'AllClub',
    component: AllClub
  },
  {
    path: 'club/:id',
    name: 'ProfileClub',
    component: ProfileClub
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
