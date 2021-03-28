import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Table from '@/components/Table'
import Result from '@/components/Result'
import UserInfo from '@/components/UserInfo'
import Login from '@/components/Login'
import Register from '@/components/Register'
// 初始化 VueRouter 插件
Vue.use(VueRouter)

// 创建路由
export default new VueRouter({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Table',
      name: 'Table',
      component: Table
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path:'/Login',
      name:'Login',
      component:Login
    },
    {
      path:'/Register',
      name:'Register',
      component:Register
    }
  ]
})
