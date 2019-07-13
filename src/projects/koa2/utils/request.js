import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000
})

// request拦截器
service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = 'uyguyvuyvuvutvutfcyrcutvf'
    // }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.log(error.message)
  }
)

export default service

