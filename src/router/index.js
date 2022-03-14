import Vue from 'vue'
import VueRouter from 'vue-router'

import PcView from '@/views/pc/PcView.vue'
import PcHome from '@/views/pc/PcHome.vue'
import PcDetail from '@/views/pc/PcDetail.vue'

import MobileView from '@/views/mobile/MobileView.vue'
import MobileHome from '@/views/mobile/MobileHome'

import { isPCUser } from '@/utils/tools'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: isPCUser() ? PcView : MobileView,
    children: [
      {
        path: '/detail',
        component: PcDetail
      },
      {
        path: '/',
        component: isPCUser() ? PcHome : MobileHome
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
