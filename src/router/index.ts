import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TourDetails from '../views/TourDetails.vue'
import BlogPage from '../views/BlogPage.vue'

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
  },
  {
    path: '/blogs',
    name: "Blogs",
    component: BlogPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
