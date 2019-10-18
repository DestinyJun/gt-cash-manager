<template>
  <div id="district">
    <!-- <hr style="border-top:1px solid #EBEEF5" /> -->
    <div class="table">
      <tables v-bind:t_data="tableData"></tables>
    </div>
    <!-- <div class="paging">
      <Paging v-on:pageChange="pageChange"></Paging>
    </div> -->
  </div>
</template>
<script src="./District.component.js">
</script>
<style scoped lang="scss">
@import "District.component.scss";
</style>