import Vue from 'vue'
import VueRouter from 'vue-router'

import PcView from '@/views/pc/PcView.vue'
import PcHome from '@/views/pc/PcHome.vue'
import PcDetail from '@/views/pc/PcDetail.vue'

import MobileView from '@/views/mobile/MobileView.vue'
import MobileHome from '@/views/mobile/MobileHome.vue'
import MobileDetail from '@/views/mobile/MobileDetail.vue'

import { isPCUser } from '@/utils/tools'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: isPCUser() ? PcView : MobileView,
    children: [
      {
        path: '/detail',
        component: isPCUser() ? PcDetail : MobileDetail
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

// 路由跳转之后页面重新定位到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => console.log(err));
};
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => console.log(err));
};

export default router
