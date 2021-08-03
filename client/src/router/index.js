import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/components/Register.vue'
import Forgotpw from '@/components/Forgotpw.vue'
import Admin from '@/components/Admin.vue'
import DOCdashboard from '@/components/DOCdashboard.vue'
import patientinterface from '@/components/patientinterface.vue'
import Resetpw from '@/components/Resetpw.vue'
import test from '@/components/test.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Regester',
    component: Register
  },
  {
    path: '/forgotpw',
    name: 'forgotpw',
    component: Forgotpw
  },
  {
    path: '/resetpw/:ResetPasswordToken',
    name: 'resetpw',
    component: Resetpw
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/patientinterface',
    name: 'patientinterface',
    component: patientinterface
  },
  {
    path: '/DOCdashboard',
    name: 'DOCdashboard',
    component: DOCdashboard
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
