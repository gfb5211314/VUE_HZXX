import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index/index'
import tuangoucar from '@/page/tuangoucar/tuangoucar'
import tuangoucarsucee from '@/page/tuangoucar/tuangoucarsucee'
import xqlogn from '@/page/xiangqin/xqlogn'
import explain from '@/page/pos/explain'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component:  HelloWorld
    
    },
    {
      path: '/tuangoucar',
      name: 'tuangoucar',
      component: tuangoucar
    },
    {
      path: '/tuangoucar/tuangoucarsucee',
      name: 'tuangoucarsucee',
      component: tuangoucarsucee
    },
    {
      path: '/xqlogn',
      name: 'xqlogn',
      component: xqlogn
    },
    {
      path: '/explain',
      name: 'explain',
      component: explain
    }
  ]
})
