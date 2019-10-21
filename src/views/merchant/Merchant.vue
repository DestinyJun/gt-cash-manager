<template>
  <div id="merchant">
    <tables
      v-bind:t_data="t_data"
      v-bind:t_header="t_header"
      v-bind:t_type="t_type"
      v-bind:t_detail="t_detail"
      v-on:showDialog="showChangeMerchgatDialog"
    ></tables>
    <el-dialog title="提示" :visible.sync="dialog" width="30%" center :modal-append-to-body="false">
      <el-tabs tab-position="left" style="height: 200px;">
        <el-tab-pane :label="item.roleMark" v-for="item in m_list" :key="item.roleId" @tab-click="merChatChange(item.roleId)">
          <template>
            <el-checkbox-group v-model="checkList">
                <div v-for="items in checkUserList" :key="items.userId">s
                     <el-checkbox :label="items.userId" @change = "submitData($event,items.userId, item.roleId)">{{items.userName}}</el-checkbox>
                </div>
            </el-checkbox-group>
          </template>
        </el-tab-pane>
      </el-tabs>

      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="submitData">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>
<script src="./Merchant.component.js">
</script>
<style lang="scss" scoped>
@import "Merchant.component.scss";
</style>