import { createRouter, createWebHistory } from 'vue-router'
import Signup1View from '../views/public/Signup1View.vue'
import Signup2View from '../views/public/Signup2View.vue'
import Signup3View from '../views/public/Signup3View.vue'
import LoginView from '../views/public/LoginView.vue'

import HomeView from '../views/public/HomeView.vue'
import SeeMessageView from '../views/public/SeeMessageView.vue'

import MakeTripView from '../views/private/trip/MakeTripView.vue'
import MakeTripContent from '../components/private/trip/MakeTripContent.vue'
import MainView from '../views/private/MainView.vue'
import OrderTripView from '../views/private/trip/OrderTripView.vue'
import AvailableOderContent from '../components/private/trip/AvailableOrderContent.vue'
import BookedOderContent from '../components/private/trip/BookedOrderContent.vue'


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
    },
      //User Account
    {
      path: '/home',
      name: 'home',
      component: MainView,
      children: [
        {
          path: '/messages',
          name: 'messages',
          component: null,
        },
        {
          path: '/my-orders',
          name: 'my-orders',
          component: null,
        },
        {
          path: '/order-request',
          name: 'order-request',
          component: ()=>import('../views/private/trip/MakeTripView.vue'),
          children:[
            {
              path: '/make-trip',
              name: 'make-trip',
              component: MakeTripContent,
            },
          ]
        },
        {
          path: '/order-trip',
          name: 'order-trip',
          component: OrderTripView,
          children: [
            {
              path: '/order-available',
              name: 'order-available',
              component: AvailableOderContent,
            },
            {
              path: '/order-booked',
              name: 'order-booked',
              component: BookedOderContent,
            },
          ]
        },
        {
          path: '/resume',
          name: 'resume',
          component: null,
        },
        {
          path: '/support',
          name: 'support',
          component: null,
        },
        {
          path: '/notifications',
          name: 'notifications',
          component: null,
        },
      ]
     },

  ]
})

export default router
