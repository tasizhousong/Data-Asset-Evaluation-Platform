import '@babel/polyfill'
import 'mutationobserver-shim'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App'
import router from './router'
// 引入echarts
import echarts from 'echarts'

import axios from 'axios'
import Qs from 'qs'
//QS是axios库中带的，不需要我们再npm安装一个

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
//以下用于前后端交接
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

//引入基本模板
// let echarts = require('echarts/lib/echarts')
// // 引入饼状图组件
// require('echarts/lib/chart/pie')
// // 引入提示框和title组件，图例
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/lib/component/legend')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: h => h(App),
  router    // 注入路由对象
})
