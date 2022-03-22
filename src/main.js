import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Popover, Slider, Radio, Select, Option, Input, RadioGroup } from 'element-ui';
import '@/assets/css/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(Popover)
Vue.use(Slider)
Vue.use(Radio)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(RadioGroup)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
