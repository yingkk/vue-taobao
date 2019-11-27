import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage'

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
        component: () => import('../components/homePage/common/common')
      },
      {
        path: "pay",
        name: "pay",
        component: () => import('../components/homePage/main/mainRight/common/pay')
      }
      // ,{
      //   path: "/",
      //   name: "apps",
      //   component: () => import('../components/homePage/main/mainRight/apps/apps.vue')
      // }
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
