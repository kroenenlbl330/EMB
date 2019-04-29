import '../../static/style.1.css'
import Vue from 'vue'
import router from '../route/routes.js'
import App from './school.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

// if (location.hostname === 'localhost') {
//   Vue.prototype.HTTPLOCAT = ''
// } else {
//   const http = window.location.protocol + '//' + location.hostname + ':' + location.port
//   Vue.prototype.HTTPLOCAT = http + '/' // （这个路径改为你服务器的路径）
// }

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})