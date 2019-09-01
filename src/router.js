import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/components/login.vue'),
      meta: { title: '登录页' }
    },
    {
      path: '/home',
      component: () => import('@/components/homepage/homepage.vue'),
      meta: {
        title: '母版页'
      },
      children: [
        {
          path: '/index',
          name: '系统首页',
          component: () => import('@/components/test/HelloWorld'),
          meta: {
            title: '系统首页',
            hideclose: true,
            role: ['王者岗', '白银岗','黄金岗']
          }
        },
        {
          path: '/test01',
          name: 'test01',
          component: () => import('@/components/test/test01'),
          meta: {
            title: 'test01页',
            role: ['白银岗']
          }
        },
        {
          path: '/tablepage',
          name: 'tablepage',
          component: () => import('@/components/tablepage/tablepage'),
          meta: {
            title: 'tablepage页',
            role: ['王者岗', '白银岗','黄金岗']
          }
        },
      ]
    },
    {
      name: '404',
      path: '/404',
      component: () => import('@/components/homepage/404.vue'),
      meta: { title: '路由不存在' }
    },
    {
      name: '403',
      path: '/403',
      component: () => import('@/components/homepage/403.vue'),
      meta: { title: '资源不可访问' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
