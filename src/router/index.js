import Vue from 'vue'
import Router from 'vue-router'
import ConfirmAge from '@/components/ConfirmAge'
import FindPub from '@/components/FindPub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ConfirmAge',
      component: ConfirmAge
    },
    {
      path: '/get-smashed',
      name: 'FindPub',
      component: FindPub
    }
  ]
})
