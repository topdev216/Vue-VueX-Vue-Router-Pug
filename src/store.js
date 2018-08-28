import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hamburgerVisibility: false
  },
  mutations: {
    hamburgerVisibility (state, payload) {
      state.hamburgerVisibility = payload === 'toggle' ? !state.hamburgerVisibility : payload
    }
  },
  actions: {

  }
})
