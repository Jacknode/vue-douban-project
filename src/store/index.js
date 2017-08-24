/**
 * Created by leibo on 17/8/12.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
//
Vue.use(Vuex);


export default new Vuex.Store({
  modules:{
    mutations
  },
  actions,
})
