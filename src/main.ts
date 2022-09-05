import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/index.css'
import { registerApp } from './global'
import router from './router'
import store from './store'
import zlRequest from './service'

console.log(process.env.BASE_URL)
const app = createApp(App)
app.use(registerApp)
app.use(router)
app.use(store)
// app.use(ElementPlus)
zlRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

app.mount('#app')
