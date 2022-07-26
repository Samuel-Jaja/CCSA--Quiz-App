import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("./../views/Home-Component.vue")
  },
  {
    path: '/trending',
    name: 'Trending',
    component: () => import("./../views/Trending.vue")
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import("./../views/Trending.vue")
  },
  {
    path: '/top-rated',
    name: 'Top Rated',
    component: () => import("./../views/Top-Rated.vue")
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: () => import("./../views/Upcoming.vue")
  },
  {
    path: '/popular',
    name: 'Popular',
    component: () => import("./../views/Popular.vue")
  },
  {
    path: '/movie-details/:id',
    name: 'Movie Details',
    component: () => import("./../views/Movie-Component.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
