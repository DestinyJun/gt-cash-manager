import Util from '../../uitl/publicUtil.js'
import loginSrv from '../../service/Service.js'
import store from '@/store'
var util = new Util();
var loginsrv = new loginSrv();
export default {
    name: 'login',
    data() {
        return {
            username:'',
            password: ''
        }
    },
    created(){
        console.log(process.env.NODE_ENV);
        console.log(process.env.VUE_APP_URL);
        console.log(123);
    },
    methods:{
    //   open() {
       
    //   },
      login(){
          if(this.username !== '' && this.password !== '') {
           loginsrv.loginRequest({userName: this.username, userPassword: this.password}).then(
             value => {
                 console.log(value.data);
                 if(value.code === '1000') {
                  // store.dispatch("setLoadingStatus", "showLoading")
                  // store.dispatch("setUserInfo", {code: value.data.userCode, posistion:  value.data.posistion })
                  util.setObject("userInfo", value.data)
                  this.$router.push('/home/areahead')
                 }else{
                        util.toast(value.msg, 'error');
                 }
             }
           )
          }else {
            util.toast('用户名或密码不能为空', 'error');
          } 
      }
    }
}