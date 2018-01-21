import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods.vue'
import seller from '@/components/seller/seller.vue'
import feter from '@/components/feter/feter.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'goods',
      component: goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/feter',
      name: 'feter',
      component: feter
    }
  ]
})
