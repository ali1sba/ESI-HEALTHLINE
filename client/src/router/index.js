import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/components/Register.vue'
import Forgotpw from '@/components/Forgotpw.vue'
import Admin from '@/components/Admin.vue'
import DOCdashboard from '@/components/DOCdashboard.vue'
import patientinterface from '@/components/patientinterface.vue'
// import Patient from '@/components/Patient.vue'
import Resetpw from '@/components/Resetpw.vue'
import test from '@/components/test.vue'
import Assistant from '@/components/Assistant.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { hideForAuth: true }
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
    component: Admin,
    meta: { requiresAuth: true, adminAuth: true, docAuth: false, assisAuth: false }
  },
  {
    path: '/patientinterface',
    name: 'patientinterface',
    component: patientinterface
  },
  {
    path: '/DOCdashboard',
    name: 'DOCdashboard',
    component: DOCdashboard,
    meta: { requiresAuth: true, adminAuth: false, docAuth: true, assisAuth: false }
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  
  {
    path: '/Assistant',
    name: 'Assistant',
    component: Assistant,
    meta: { requiresAuth: true, adminAuth: false, docAuth: false, assisAuth: true }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isUserLoggedIn = JSON.parse(window.localStorage.getItem('isUserLoggedIn'))
    const token = JSON.parse(window.localStorage.getItem('token'))
    const role = JSON.parse(window.localStorage.getItem('role'))
    if (!isUserLoggedIn || !token) {
      next('/')
    } else if (to.meta.adminAuth) {
      if (role === 'ADMIN') {
        next()
      } else {
        next('/')
      }
    } else if (to.meta.docAuth) {
      if (role === 'MED') {
        next()
      } else {
        next('/')
      }
    } else if (to.meta.assisAuth) {
      if (role === 'ASSIS') {
        next()
      } else {
        next('/')
      }
    } else {
      next('/')
    }
  } else if (to.meta.hideForAuth) {
      const isUserLoggedIn = JSON.parse(window.localStorage.getItem('isUserLoggedIn'))
      const token = JSON.parse(window.localStorage.getItem('token'))
      const role = JSON.parse(window.localStorage.getItem('role'))
      if (!isUserLoggedIn || !token) {
        next()
      } else {
        if (role === 'ADMIN') {
          next('/admin')
        } else if (role === 'MED') {
          next('/DOCdashboard')
        } else if (role === 'ASSIS') {
          next('/Assistant')
        } else {
          next()
        }
      }
    } else {
      next()
    }
})

export default router
