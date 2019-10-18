import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {   // 类似存储全局变量的数据
    LOADING: true,
    USER: {
      code: '',
      posistion: ''
    }
  },
  mutations: {  // 提供存储设置state数据的方法
     // 改变状态的函数
    hideLoading (state) {
      state.LOADING = true
    },
    showLoading (state) {
      state.LOADING = false
    },
    setuserInfo (state, data) {
      state.USER.code = data.code
      state.USER.posistion = data.posistion
    },
  },
  actions: {   // 提供跟后台接口打交道的方法，并调用mutations提供的方法
     setLoadingStatus(state, name){
       this.commit(name)
     },
     setUserInfo(state, data){
       this.commit("setuserInfo", data)
     }
  },
  getters: { //getters (提供用来获取state数据的方法)
    getLoadingStatus(state) {
        return state.LOADING;
    }
  }
})
