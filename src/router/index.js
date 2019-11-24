import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "homepage",
    component: homePage
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
