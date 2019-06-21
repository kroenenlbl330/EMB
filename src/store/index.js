import Vue from 'vue'
import Vuex from 'vuex'
// * 表示将 './actions'模块中的所有接口挂载到actions对象上
import * as actions from './actions'
import * as mutations from './mutations'
import * as gtters from './gtters'
import state from './rootState'

Vue.use(Vuex)
const store = new Vue.Store({
  state,
  gtters,
  actions,
  mutations,
})

export default store