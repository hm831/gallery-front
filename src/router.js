import { createWebHistory, createRouter } from 'vue-router'

import Albums from './views/Albums.vue'
import Gallery from './views/Gallery.vue'
import Artworks from './views/Artworks.vue'
import Stars  from './views/Stars.vue'
import Cosplays from './views/Cosplays.vue'
import CosplayPhotos from './views/CosplayPhotos.vue'
import CosplayGallery from './views/CosplayGallery.vue'

const routes = [
  { path: '/', component: Gallery },
  { path: '/home', component: Gallery },
  { path: '/albums', component: Albums },
  { path: '/albums/artworks/:id', component: Artworks},
  { path: '/stars', component: Stars},
  { path: '/cosplays', component: Cosplays},
  { path: '/cosplays/photos/:id', component: CosplayPhotos},
  { path: '/cosplays/gallery', component: CosplayGallery}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router