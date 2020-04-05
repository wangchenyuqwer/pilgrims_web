import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"

import user from "./modules/user/userInit"

Vue.use(Vuex)
const state = {
  navBar: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {
  },
  modules: {
    user
  }
})
