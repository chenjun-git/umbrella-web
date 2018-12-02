import router from './router'
import store from './store'
import vue from 'vue'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式

const whiteList = ['/login', '/authredirect']// 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  store.dispatch('GenerateRoutes', { }).then(() => { // 生成可访问的路由表
    router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
    store.dispatch('getNowRoutes', to);
    next({ ...to }) // hack方法 确保addRoutes已完成
  })
  //store.dispatch('getNowRoutes', to)
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})