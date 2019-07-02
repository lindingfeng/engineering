import config from '../config'
import fetch from '../utils/fetch'

export default {
  // 获取订单详情
  getOrderDetail ({orderNum}) {
    return fetch.post(`${config.apiBase}bangmai/order/getOrderInfo`, {orderNum})
  }
}
