import { Component } from 'vue'

export const Upload = (): Promise<Component> => {
  return import('../views/Upload.vue')
}

export const Uploads = (): Promise<Component> => {
  return import('../views/Uploads.vue')
}

export const NotFound = (): Promise<Component> => {
  return import('../views/NotFound.vue')
}