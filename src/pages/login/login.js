import '../../static/style.1.css'
import Vue from 'vue'
import router from '../route/routes.js'
import App from './login.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})