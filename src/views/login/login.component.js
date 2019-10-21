import Util from '../../uitl/publicUtil.js'
import loginSrv from '../../service/Service.js'
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
                  util.setObject("userInfo", value.data)
                  util.toast('登录成功', 'success');
                  switch(value.data.posistion){
                    case '商户': this.$router.push('/home/merchant');break;
                    case '区长': this.$router.push('/home/district');break;
                    case '区域经理': this.$router.push('/home/areahead');break;
                  }
                  // this.$router.push('/home/district')
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