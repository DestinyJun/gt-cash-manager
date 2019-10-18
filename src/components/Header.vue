<template>
  <div id="headers" class="header">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <h2>{{data}}</h2>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <span>123</span>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <img src="../assets/image/xz.jpg" alt="头像" @click="imageClick" />
          <!-- <span style="color: #fff;margin-left: 1vw;margin-top: 1vh">123</span>   -->
          <el-card  class="box-card" :hidden="u_listHidden">
            <p v-for="(item, i) in userList" :key="i" @click="userEevnt(item)">{{item}}</p>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Util from '../uitl/publicUtil.js'
var util = new Util();
export default {
  name: "headers",
  props: ["data"],
  data() {
      return {
          userList: ['退出登录', '修改密码'],
          u_listHidden: true,
          username: util.getObject('userInfo').posistion
      }
  },
  created() {
  },
  methods: {
      userEevnt(itemdata){
        console.log(itemdata);
        this.imageClick();
      },
      imageClick(){
          this.u_listHidden = ! this.u_listHidden;
      }
  }
};
</script>

<style lang="scss" >
.header {
  width: 100vw;
  height: 8vh;
  line-height: 8vh;
  // color: #000;
  background: #00d1b2;
  z-index: 99999;
  .bg-purple {
    line-height: 8vh;
    h2 {
      color: #fff;
      margin-left: 2vw;
      text-align: left;
    }
    span {
      color: #00d1b2;
    }
    img {
      height: 6vh;
      border-radius: 50%;
      margin-top: 1vh;
      text-align: right;
      vertical-align:middle;
      //   margin-right: 2vw;
    }
  
    .box-card {
        width: 6vw;
        position: absolute;
        z-index: 999;
        right: 5vw;
        top: 7vh;
     
        // padding: 0;
        // background: #00d1b2;
        p {
            width: 100%;
            height: 4vh;
            font-size: 12px;
            line-height: 3vh;
            padding: 4px;
            border-bottom:2px solid #d4dde4;
        }
        p:hover {
            background: #00d1b2;
        }
    }
  }
}
.el-card .el-card__body{
    padding: 0;
   }
</style>