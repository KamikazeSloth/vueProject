import Vue from 'vue'
import VueRouter from 'vue-router'

import Booking from './pages/Booking.vue'
import Home from './pages/Home.vue' 

Vue.use(VueRouter)

export default {
  components: {
    Booking,
    Home
  }
}


const routes = [
  { path: '/Booking', component: Booking },
  { path: '/Home', component: Home }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
