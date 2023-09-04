import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import "./axios.js"
//biar bisa nampilin warna da judul chart
import "./plugins/Chart.js"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const pinia = createPinia()
app.use(pinia)