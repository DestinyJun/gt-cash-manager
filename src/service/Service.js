import Vue from 'vue';

export default class Server {
    constructor(){}
    loginRequest(data){
      return  Vue.axios.post('/user/login', data);
    }

    // 获取片区商品列表信息
    getAreaInfoPageData(data){
      return  Vue.axios.post('/districtManager/getAllMerchantInfo', data);
    }
    getServiceDownloadData(data){
      return  Vue.axios.post('/districtManager/getAllServerInfo', data);
    }
}