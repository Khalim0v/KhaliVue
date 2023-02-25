import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'

const app = createApp(App)

uiComponents.map(component => app.component(component.name, component))  //iteratsiya qilish
app.use(router)
app.use(store) //vuex store ni ishlatish uchun
app.mount('#app')
