import { createRouter, createWebHistory } from 'vue-router'
import Signup1View from '../views/public/Signup1View.vue'
import Signup2View from '../views/public/Signup2View.vue'
import Signup3View from '../views/public/Signup3View.vue'
import LoginView from '../views/public/LoginView.vue'
import HomeView from '../views/public/HomeView.vue'
import SeeMessageView from '../views/public/SeeMessageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SeeMessage',
      name: 'SeeMessage',
      component: SeeMessageView
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup1',
      name: 'signup1',
      component: Signup1View
    },
    {
      path: '/signup2',
      name: 'signup2',
      component: Signup2View
    },
    { 
      path: '/signup3',
      name: 'signup3',
      component: Signup3View
    }
  ]
})

export default router
