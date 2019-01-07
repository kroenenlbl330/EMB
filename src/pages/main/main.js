import '../../static/style.css'
import Vue from 'vue'
import router from './router.js'
import App from './app.vue'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})