import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { loadFonts } from './plugins/webfontloader'
import i18n from './i18n'

loadFonts()

createApp(App).use(i18n)
  .use(router)
  .mount('#app')
