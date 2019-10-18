import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import interceptors from './uitl/interceptors.js'
// // 添加IE兼容
// import '@babel/polyfill';
Vue.config.productionTip = false
// Vue.prototype.$http.interceptors.response.use()

Vue.use(VueAxios, axios);
Vue.use(elementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
