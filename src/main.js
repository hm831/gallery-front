import { createApp } from 'vue';
import router from './router'
// import Antd from 'ant-design-vue';
import App from './App.vue';
// import 'ant-design-vue/dist/reset.css';
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import MasonryWall from '@yeger/vue-masonry-wall'

import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css';




const app = createApp(App);

// app.use(Antd);
app.use(router);
app.use(ArcoVue);
app.use(MasonryWall);

app.use(vue3PhotoPreview);

app.mount('#app');
