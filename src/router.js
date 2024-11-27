import { createWebHistory, createRouter } from 'vue-router'

import Albums from './views/Albums.vue'
import Gallery from './views/Gallery.vue'

const routes = [
  { path: '/', component: Gallery },
  { path: '/albums', component: Albums },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router