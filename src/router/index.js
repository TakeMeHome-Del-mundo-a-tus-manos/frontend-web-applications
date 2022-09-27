import { createRouter, createWebHistory } from 'vue-router'
import Signup1View from '../views/public/Signup1View.vue'
import Signup2View from '../views/public/Signup2View.vue'
import Signup3View from '../views/public/Signup3View.vue'
import LoginView from '../views/public/LoginView.vue'
import TripView from '../views/private/TripView.vue'
import MakeTripContent from '../components/private/trip/MakeTripContent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    { 
      path: '/order-request',
      name: 'order-request',
      component: TripView,
      children: [
        { 
          path: '/make-trip',
          name: 'make-trip',
          component: MakeTripContent
        }
      ]
    },
  ]
})

export default router
