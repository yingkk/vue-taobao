import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage'
// import promo from '../components/homePage/common/promo'
// import common from '../components/homePage/common/common'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "homepage",
    component: homePage,
    children: [
      {
        path: "/",
        name: "promo",
        component: () => import('../components/homePage/common/promo')
      },
      {
        path: "common",
        name: "common",
        component:  () => import('../components/homePage/common/common')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  console.log(12);
  next();
  // ...
})
export default router
