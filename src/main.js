import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
//给事件总线赋予对象
Vue.prototype.$bus = new Vue();
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
