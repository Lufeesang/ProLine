import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '@/views/home/index.vue'
import ProPost from '@/views/home/proPost.vue'
import ProSuc from '@/views/home/ProSuc.vue'
import ProFind from '@/views/home/proFind.vue'
import ProInfo from '@/views/home/proInfo.vue'
import UserInfo from '@/views/home/userInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: IndexView
    },
    {
      path:'/propost',
      name:'PostPro',
      component: ProPost
    },
    {
      path:'/prosuc',
      name:'ProSuc',
      component:ProSuc
    },
    {
      path:'/proinfo',
      name:'ProInfo',
      component:ProInfo
    },
    {
      path:'/profind',
      name:'ProFind',
      component:ProFind
    },
    {
      path:'/userInfo',
      name:'UserInfo',
      component:UserInfo
    }
  ]
})
