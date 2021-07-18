import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SmartTable from 'vuejs-smart-table'

createApp(App).use(router).mount('#app')
createApp.use(SmartTable)
