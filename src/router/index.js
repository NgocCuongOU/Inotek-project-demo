import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TourDetails from '../views/TourDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      default: true
    }
  },
  {
    path: '/tours/:id',
    name: "TourDetails",
    component: TourDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
