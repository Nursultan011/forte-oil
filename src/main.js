import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import i18n from "./helpers/i18n"

createApp(App).use(store).use(router).use(VueSplide).use(i18n()).mount('#app')
