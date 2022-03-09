import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Popover } from 'element-ui';
import '@/assets/css/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(Popover)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
