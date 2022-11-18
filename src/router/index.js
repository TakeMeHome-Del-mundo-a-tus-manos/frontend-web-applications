
import { createRouter, createWebHistory } from "vue-router";
import Signup1View from "../views/public/Signup1View.vue";
import Signup2View from "../views/public/Signup2View.vue";
import Signup3View from "../views/public/Signup3View.vue";
import LoginView from "../views/public/LoginView.vue";
import MakeTripView from "../views/private/trip/MakeTripView.vue";
import MakeTripContent from "../components/private/trip/MakeTripContent.vue";
import MainView from "../views/private/MainView.vue";
import OrderTripView from "../views/private/trip/OrderTripView.vue";
import AvailableOderContent from "../components/private/trip/AvailableOrderContent.vue";
import BookedOderContent from "../components/private/trip/BookedOrderContent.vue";
import Home from "../components/public/Home.vue";
import SeeMessage from "../components/public/SeeMessage.vue";
import ResumeView from "../views/private/resume/ResumeView.vue";
 
import ResumeTripsNavbar from "../components/private/resume/resume-my-trips/ResumeTripsNabvar.vue";
import TravelInProgress from "../components/private/resume/resume-my-trips/TravelInProgress.vue";
import DeliveryHistory from "../components/private/resume/resume-my-trips/DeliveryHistory.vue";
import ReservedOrders from "../components/private/resume/resume-my-trips/ReserveOrders.vue";
import Support from "@/components/public/Support.vue";

import MyPurchases from "../components/private/resume/resume-my-purchases/MyPurchases.vue";

import MakeOrderContent from "../components/private/order/MakeOrderContent.vue";
import PublishOrderContent from "../components/private/order/PublishOrderContent.vue";
import OrderPublishView from "../views/private/order/OrderPublishView.vue";

import MyProfile from '../components/private/profile/MyProfile.vue'
import ProfileTravel from '../components/private/profile/ProfileTravel.vue'

//My orders
import MyOrdersSelectBar from "../components/private/my-orders/Selectbar-my-orders.vue";
import PayInit from "../components/private/my-orders/PayInit.vue";
import PaymentDetails from "../components/private/my-orders/PaymentDetails.vue";
import PaymentCompleted from "../components/private/my-orders/PaymentCompleted.vue";
import CurrentProcess from "../components/private/my-orders/CurrentProcess.vue";
import CurrentProcessMap from "../components/private/my-orders/CurrentProcessMap.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "root",
      component: LoginView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup1",
      name: "signup1",
      component: Signup1View,
    },
    {
      path: "/signup2",
      name: "signup2",
      component: Signup2View,
    },
    {
      path: "/signup3",
      name: "signup3",
      component: Signup3View,
    },
    //User Account
    {
      path: "/home",
      name: "home",
      component: MainView,
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
        },
        {
          path: '/my-profile',
          name: 'my-profile',
          component: MyProfile,
        },
        {
          path: '/messages',
          name: 'messages',
          component: SeeMessage,
          
        },
        {
          path: '/profile-travel',
          name: 'profile-travel',
          component: ProfileTravel,
      
        },
        {
          path: "/my-orders",
          name: "my-orders",
          component: MyOrdersSelectBar,
          children: [
            {
              path: "/pay",
              name: "pay",
              component: PayInit,
            },
            {
              path: "/payment-details/:orderCode",
              name: "payment-details",
              component: PaymentDetails,
            },
            {
              path: "/payment-completed",
              name: "payment-completed",
              component: PaymentCompleted,
            },
            {
              path: "/current-process",
              name: "current-process",
              component: CurrentProcess,
            },
            {
              path: "/current-process-map/:orderCode",
              name: "current-process-map",
              component: CurrentProcessMap,
            },
          ],
        },
        {
          path: "/order-request",
          name: "order-request",
          component: () => import("../views/private/trip/MakeTripView.vue"),
          children: [
            {
              path: "/make-trip",
              name: "make-trip",
              component: MakeTripContent,
            },
            {
              path: "/make-order",
              name: "make-order",
              component: MakeOrderContent,
            },
          ],
        },
        {
          path: "/order-publish",
          name: "order-publish",
          component: () =>
            import("../views/private/order/OrderPublishView.vue"),
          children: [
            {
              path: "/order-publish-complete",
              name: "order-publish-complete",
              component: PublishOrderContent,
            },
          ],
        },
        {
          path: "/order-trip",
          name: "order-trip",
          component: OrderTripView,
          children: [
            {
              path: "/order-available",
              name: "order-available",
              component: AvailableOderContent,
            },
            {
              path: "/order-booked",
              name: "order-booked",
              component: BookedOderContent,
            },
          ],
        },
        {
          path: "/resume",
          name: "resume",
          component: ResumeView,
          children: [
            {
              path: "/resume/my-trips",
              name: "my-trips",
              component: ResumeTripsNavbar,
              children: [
                {
                  path: "/resume/my-trips",
                  name: "my-trips",
                  component: TravelInProgress,
                },
                {
                  path: "/resume/reserved-orders",
                  name: "reserved-orders",
                  component: ReservedOrders,
                },
                {
                  path: "/resume/delivery-history",
                  name: "delivery-history",
                  component: DeliveryHistory,
                },
              ],
            },
            {
              path: "/resume/my-purchases",
              name: "my-purchases",
              component: MyPurchases,
            },
          ]
        },
        {
          path: "/support",
          name: "support",
          component: Support,
        },
      ],
    },
  ],
});

export default router;
