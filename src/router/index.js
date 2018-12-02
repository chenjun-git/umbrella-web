import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Alert from '@/views/components/Alert'
import Button from '@/views/components/Button'
import HoverButtons from '@/views/components/HoverButtons'
import User from '@/views/page/User'
import Video from '@/views/page/Video'
import Card from '@/views/components/Card'
import Login from '@/views/login/index'
import Full from '@/containers/Full'

// const _import = require('./_import_' + process.env.NODE_ENV)

/* login */
// const Login = _import('login/index')

Vue.use(Router)

export const constantRouterMap = [
  {path: '/hello', name: 'HelloWorld', component: HelloWorld, hidden: true},
  { path: '/login', component: Login, hidden: true },
  // {path: '/', name: 'root', component: HelloWorld, hidden: true},
  {
    // 内部测试专用
    path: '/internal',
    name: 'internal',
    redirect: 'internal/alert',
    component: {
      render (c) { return c('router-view') }
      // Full,
    },
    hidden: false,
    children: [{ path: 'alert', component: Alert, hidden: true }
    ]
  }

  /* 登录 */
  // {path: '/login', component: Login, hidden: true }
  /* 错误路由 */
  // { path: '*', redirect: '/pages/404', hidden: true }
]

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/',
    name: '首页',
    //redirect: '/dashboard',
    component: Full,
    hidden: false,
    children: [
      { path: '/dashboard', name: 'Dashboard', icon: 'md-speedometer', component: Alert, hidden: false },
      { path: '/components', name: 'component组件', icon: 'ios-bookmark', redirect: '/components/buttons', hidden: false,
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'buttons', name: 'Buttons按钮', icon: 'logo-youtube', component: Button},
                    {path: 'hoverbuttons', name: '悬停特效按钮', icon: 'ios-color-wand', component: HoverButtons},
                    {path: 'alert', name: 'Alert警告提示', icon: 'ios-alert', component: Alert},
                    {path: 'card', name: 'Card卡片', icon: 'ios-browsers-outline', component: Card},
                    {path: 'datepicker', name: 'DatePicker', icon: 'ios-calendar-outline', component: Alert},
                    {path: 'form', name: 'Form表单', icon: 'ios-list-box',component: Alert},
                    {path: 'modal', name: 'Modal对话框', icon: 'ios-chatbubbles',component: Alert},
                    {path: 'select', name: 'Select选择器', icon: 'ios-arrow-down',component: Alert},
                    {path: 'spin', name: 'Spin加载中', icon: 'ios-loading', component: Alert},
                    {path: 'steps', name: 'Steps步骤条', icon: 'ios-checkmark-circle', component: Alert},
                    {path: 'timeline', name: 'Timeline时间轴', icon: 'md-more', component: Alert},
                    {path: 'transfer', name: 'Transfer穿梭框', icon: 'ios-pause-outline', component: Alert},
                    {path: 'timepicker', name: 'Timepicker', icon: 'ios-clock-outline', component: Alert},
                    {path: 'upload', name: 'Upload上传', icon: 'ios-cloud-upload-outline', component: Alert},
                  ]
      },
      {path: '/charts', name: 'echart图表', redirect: '/charts/shopchart', icon:'ios-pie',
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'shopchart', name: '商场统计图表', icon: 'ios-stats', component: Alert, hidden: false},
                    {path: 'radarchart', name: '雷达图', icon: 'ios-arrow-graph-up-right', component: Alert},
                    {path: 'cakechart', name: '蛋糕销量图表', icon: 'ios-analytics', component: Alert}
                  ]
      },
      {path: '/table', name: '表格综合实例', icon: 'ios-paper', component: Alert, meta: { role: ['admin'] }},
      {path: '/jsontree', name: 'JSON视图', icon: 'md-git-merge', component: Alert},
      {path: '/tabledetail/:id', name: 'TableDetail', hidden: true, component: Alert},
      {path: '/tinymce', name: 'Tinymce编辑器', icon: 'md-document', component: Alert},
      {path: '/markdown', name: 'Markdown', icon: 'ios-list-box', component: Alert},
      {path: '/user', name: '用户管理', icon: 'ios-list-box', component: User},
      {path: '/video', name: '视频管理', icon: 'ios-list-box', component: Video}
    ]
  },
  { path: '*', redirect: '/pages/404', hidden: true }
]
