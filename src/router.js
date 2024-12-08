import { createWebHistory, createRouter } from 'vue-router'

import Albums from './views/Albums.vue'
import Gallery from './views/Gallery.vue'
import Artworks from './views/Artworks.vue'
import Stars  from './views/Stars.vue'

const routes = [
  { path: '/', component: Gallery },
  { path: '/home', component: Gallery },
  { path: '/albums', component: Albums },
  { path: '/albums/artworks/:id', component: Artworks},
  { path: '/stars', component: Stars}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router