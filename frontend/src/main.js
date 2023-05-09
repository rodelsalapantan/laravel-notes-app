import { createApp, markRaw, watch } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

import '@/axios'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import "bootstrap/dist/js/bootstrap.js"

import App from '@/App.vue'


const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router);
});


const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
