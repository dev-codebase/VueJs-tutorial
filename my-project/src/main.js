import { createApp } from 'vue'
import App from './App.vue'

// import BootstrapVue from 'bootstrap-vue' // Not compatible with Vue 3
import 'bootstrap/dist/css/bootstrap.css'

import router from './router'
import store from './store'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
//  App.use(BootstrapVue)

createApp(App).use(store).use(router).mount('#app')
