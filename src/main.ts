import { createApp } from 'vue';
import App from './App.vue';

import router from "./add-ons/router/router";
import vuetify from "./add-ons/vuetify/vuetify";
import './assets/styles/global.scss'

createApp(App).mount('#app');


createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')