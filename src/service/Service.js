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

    // 获取区长店铺列表
    getDistrictListData(data){
      return  Vue.axios.post('/districtHead/getAllMerchant', data);
    }

    // 商户获取店铺信息
    getMerchantInfoPageData(data){
      return  Vue.axios.post('/merchant/getAllMerchantInfo', data);
    }
    // 获取所有店员
    getMerchangeUserData(data){
      return  Vue.axios.post('/merchant/getAdminRole', data);
    }
    // 获取店员下面的所有员工
    getRoleAllUserData(data){
      return  Vue.axios.post('/merchant/getUserByMerchantCodeIsAdmin', data);
    }
    // 提交修改店员信息
    submitChangeRoleData(data){
      return  Vue.axios.post('/merchant/updateAdminUser', data);
    }
    // 为店铺添加店长
    addManagerforStore(data){
      return  Vue.axios.post('/merchant/addAdmin', data);
    }
}