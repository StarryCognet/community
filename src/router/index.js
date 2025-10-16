import Vue from 'vue'
import VueRouter from 'vue-router'
import Loginview from '../views/Loginview.vue'
import AdministratorView from '../components/AdministratorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Loginview,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    children: [
      {
        path: '/home',
        name: 'MainView',
        component: () => import('../components/MainView.vue'),
      },
      {
        path: '/administrator',
        name: 'administrator',
        component: AdministratorView,
      },
    ],

    // component:Loginview
  },
  // {
  //   path: '/administrator',
  //   name: 'administrator',
  //   component: () => import('../components/AdministratorView.vue'),

  //   // component:Loginview
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
