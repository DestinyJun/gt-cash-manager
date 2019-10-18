<template>
    <div id="login" class="login">
       <div class="form">
          <div class="form-title">
             <h3>收银后台管理系统</h3>
          </div>
          <div class="form-user">
               <el-input placeholder="请输入用户名" v-model="username">
                    <template slot="prepend">用户名:</template>
                </el-input>
          </div>
          <div class="form-user">
               <el-input placeholder="请输入密码" v-model="password" type="password">
                    <template slot="prepend">密<span style="color: #F5F7FA">迷</span>码:</template>
                </el-input>
          </div>
          <el-button type="primary"  size="medium" class="form-submit" @click="login">登录</el-button>
       </div>
    </div>
</template>
<script src="./login.component.js">
</script>
<style lang="scss" scoped>
   @import "login.component";
</style>