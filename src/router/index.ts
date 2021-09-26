import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// import { environment } from '@/configs/environment'
// import { handlePageTitle } from './helpers'

import { Home } from '../pages/Home'
import { Upload, Uploads } from './secRoutes'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
  },
  {
    path: '/uploads',
    name: 'Uploads',
    component: Uploads,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router