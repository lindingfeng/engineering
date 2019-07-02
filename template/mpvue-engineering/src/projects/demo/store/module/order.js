import demoApi from '../../apis/demoApi'

export default {
  namespaced: true,
  state: {
    localPosition: ''
  },
  mutations: {
    setLocalLocation: (state, data) => {
      state.localPosition = data
    }
  },
  actions: {
    // 获取订单详情
    async getOrderDetail ({ commit }, { orderNum, success }) {
      wx.showLoading({title: '加载中...', mask: true})
      try {
        let ret = await demoApi.getOrderDetail({ orderNum })
        if (+ret._errCode === 0) {
          success && success(ret)
        } else {
          wx.showModal({
            title: '提示',
            content: ret._errStr || '接口异常',
            showCancel: false
          })
        }
      } catch (err) {
        console.log(err)
      }
      wx.hideLoading()
    }
  }
}
