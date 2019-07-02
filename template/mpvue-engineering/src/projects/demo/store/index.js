import Vue from 'vue'
import Vuex from 'vuex'
import order from './module/order'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    iphoneX: false
  },
  mutations: {
    setIphoneX (state, data) {
      state.iphoneX = data
    }
  },
  actions: {
    async getSystemInfo ({ commit }) {
      try {
        let ret = wx.getStorageSync('systemInfo')
        if (!ret) {
          ret = await wx.getSystemInfo()
        }
        const { model } = ret
        commit('setIphoneX', model.search('iPhone X') !== -1)
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
    order
  }
})

export default store
