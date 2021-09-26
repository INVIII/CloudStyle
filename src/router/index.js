import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import Uploads from '../views/Uploads.vue'

const routes = [
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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router