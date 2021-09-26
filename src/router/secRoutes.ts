import { Component } from 'vue'

export const Upload = (): Promise<Component> => {
  return import(/* webpackChunkName: "Upload" */ '@/pages/Upload/Upload.vue')
}

export const Uploads = (): Promise<Component> => {
  return import(/* webpackChunkName: "MyUploads" */ '@/pages/Uploads/Uploads.vue')
}