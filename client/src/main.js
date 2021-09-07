import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import Vuex from 'vuex'

export const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(Vuex)
app.mount('#app')
sync(store, router)
