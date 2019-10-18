<template>
  <div id="areahead" class="areahead">
    <div class="select">
      <label for>请选择：</label>
      <el-select v-model="serviceCode" placeholder="请选择服务区" @change="changeData">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <hr style="border-top:1px solid #EBEEF5" />
    <div class="table">
      <tables v-bind:t_data = "tableData"></tables>
    </div>
    <div class="paging">
      <Paging v-on:pageChange="pageChange"></Paging>
    </div>
  </div>
</template>
<script src="./Area.component.js">
</script>
<style lang="scss">
@import "Area.component.scss";
</style>