// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'
import App from './App'
import router from './router'
// 引入样式
import 'assets/common/stylus/index.styl'

Vue.use(mandMobile)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
