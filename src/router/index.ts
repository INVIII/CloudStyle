import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { environment } from '@/environment/environment'
import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import Uploads from '../views/Uploads.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/upload',
    name: 'Upload',
    component: Upload
  },

  {
    path: '/uploads',
    name: 'Uploads',
    component: Uploads
  },

  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    redirect: '/',
  },

]

export const router = createRouter({
  history: createWebHistory(environment.appUrl),
  routes,
})

export default router