import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './user.store.js'
import activityStore from './activity.store'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules:{
    userStore,
    activityStore
  },
  state: {

  },
  mutations: {

  },
  actions: {
  },
})
