import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Home from '../views/Home/Home.vue'
import Yourself from '../views/Home/Yourself.vue'
import Meals from '../views/Home/Meals.vue'
import Salads from '../views/Home/Salads.vue'
import Bread from '../views/Home/Bread.vue'
import Drinks from '../views/Home/Drinks.vue'
import Set from '../views/Home/Set.vue'
import Reklama from '../views/Home/Reklama.vue'
import Employee from '../views/Home/Employee.vue'
import Company from '../views/Home/Company.vue'
import Notification from '../views/Home/Notification.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: '/admin-dashboard',
          name: 'home',
          component: Home
        },
        {
          path: '/yourself',
          name: 'yourself',
          component: Yourself
        },
        {
          path: '/meals',
          name: 'meals',
          component: Meals
        },
        {
          path: '/salads',
          name: 'salads',
          component: Salads
        },
        {
          path: '/bread',
          name: 'bread',
          component: Bread
        },
        {
          path: '/drinks',
          name: 'drinks',
          component: Drinks
        },
        {
          path: '/set',
          name: 'set',
          component: Set
        },
        {
          path: '/reklama',
          name: 'reklama',
          component: Reklama
        },
        {
          path: '/employee',
          name: 'employee',
          component: Employee
        },
        {
          path: '/company',
          name: 'company',
          component: Company
        },
        {
          path: '/notification',
          name: 'notification',
          component: Notification
        },
      ],
      beforeEnter:((to, from, next) => {

        let token = localStorage.getItem('token')
      
        if (to.name !== "login" && !token) {
          next({ name: 'login' })
        } else {
          next()
        }
      
      })
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration/Registration.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: () => import('../views/Error/Error.vue')
    }
  ]
})



export default router
