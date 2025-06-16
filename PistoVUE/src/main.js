import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useSessionStore } from './stores/session'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Inizializza il session store dopo il mount
const sessionStore = useSessionStore()
sessionStore.loadFromStorage()
