import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { createI18n } from 'vue-i18n'
import en from './langs/en'
import ru from './langs/ru'
import kz from './langs/kz'

const messages = {
  en,
  ru,
  kz
}

const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  legacy: false,
  messages,
})

createApp(App).use(store).use(router).use(VueSplide).use(i18n).mount('#app')
