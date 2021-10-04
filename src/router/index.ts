import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { environment } from '@/configs/environment'
import { handlePageTitle } from './helpers'

import Home from '../views/Home.vue'
import { Upload, Uploads, NotFound, Container } from './lazyRoutes'

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
    meta: {
      title: 'Upload',
    },
  },

  {
    path: '/uploads',
    name: 'Uploads',
    component: Uploads,
    meta: {
      title: 'My Uploads',
    },
  },

  {
    path: '/container',
    name: 'Container',
    component: Container,
  },
   
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: '404',
    },
  },

]

export const router = createRouter({
  history: createWebHistory(environment.appUrl),
  routes,
})

router.beforeEach(handlePageTitle)
