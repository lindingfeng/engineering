import Vue from 'vue'
import App from './App'
import store from './store/index'
import demoApi from './apis/demoApi'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$store = store
Vue.prototype.$demoApi = demoApi
const app = new Vue(App)
app.$mount()
