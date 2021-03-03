import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photos: [],
    currentPage: 0,
    allPages: 0,
    perPage: 0,
    locationsInfo: [],
    addLocationsInfo: [],
    loading: true
  },
  actions,
  mutations,
  getters
})