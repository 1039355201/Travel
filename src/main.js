// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 移动端3s延迟
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 重置所有默认样式
import 'styles/reset.css'
// 1px像素问题
import 'styles/border.css'
// fastClick.attach(document.body)
import 'swiper/dist/css/swiper.css'
// import './assets/styles/iconfont.css'




Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
