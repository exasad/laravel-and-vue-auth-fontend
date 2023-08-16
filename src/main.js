import { createApp,markRaw } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import './axios'
import './style.css'
import Toaster from '@meforma/vue-toaster';
import App from './App.vue'

const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

const app = createApp(App);

app.use(Toaster);
app.use(router);
app.use(pinia);

app.mount('#app');
