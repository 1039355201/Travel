// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 重置所有默认样式
import 'styles/reset.css'
// 1px像素问题
import 'styles/border.css'
// 移动端3s延迟
import fastClick from 'fastclick'

// import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
fastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
