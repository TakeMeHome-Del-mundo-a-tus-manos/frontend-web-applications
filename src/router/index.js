import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SignupView from '../views/Signup/Signup1View.vue'
import Signup2View from '../views/Signup/Signup2View.vue'
import Signup3View from '../views/Signup/Signup3View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/signup1',
      name: 'signup1',
      component: SignupView
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
