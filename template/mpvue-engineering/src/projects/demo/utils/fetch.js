import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()

fly.interceptors.request.use((config, promise) => {
  return config
})

fly.interceptors.response.use(
  res => {
  },
  error => {
    let err
    if (error.message === 'request:ok') {
      if (typeof error.response.data !== 'object') {
        err = error.response.data
      } else {
        err = error.response.data._errStr
      }
    }
    wx.showModal({
      title: '错误提示',
      content: err,
      showCancel: false
    })
  }
)

export default fly
