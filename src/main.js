import { createApp } from 'vue';
import router from './router'
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import MasonryWall from '@yeger/vue-masonry-wall'



const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(MasonryWall);
app.mount('#app');

const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.production = isDebug_mode;
