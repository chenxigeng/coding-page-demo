import { createApp } from 'vue'
import '@/styles/reset.css'
import '@/styles/global.scss'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store).mount('#app')
