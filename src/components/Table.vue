<template>
  <div id="tables" class="tables">
    <div class="select">
      <el-table :data="t_data" style="width: 100%">
        <el-table-column type="expand"  fixed>
          <template slot-scope="datas">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="店铺名称">
                <span>{{ datas.row.storeName }}</span>
              </el-form-item>
              <el-form-item label="店铺Id">
                <span>{{ datas.row.storeId }}</span>
              </el-form-item>
              <el-form-item label="服务区方向">
                <span>{{ datas.row.orientation }}</span>
              </el-form-item>
              <el-form-item label="管理人姓名">
                <span>{{ datas.row.manage }}</span>
              </el-form-item>
              <el-form-item label="管理人电话">
                <span>{{ datas.row.manageTelephone }}</span>
              </el-form-item>
              <el-form-item label="服务区名称">
                <span>{{ datas.row.serviceAreaName}}</span>
              </el-form-item>
              <el-form-item label="服务区Id">
                <span>{{ datas.row.serviceAreaId }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="商品ID" prop="manage"></el-table-column>
        <el-table-column label="商品名称" prop="manageTelephone"></el-table-column>
        <el-table-column label="地址" prop="orientation"></el-table-column>
        <el-table-column label="描述" prop="storeName"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "tables",
  data() {
    return {
      tableData5: this.t_data,
    };
  },
  props: {
    t_data: Array,
    serviceId:  [String, Number],
  },
  updated(){
    console.log(123);
     console.log(this.t_data);
    //  console.log( this.t_data);
  },
  methods: {

  }
};
</script>
<style lang="scss" scopd>
.tables {
  .select {
    text-align: left;
    margin-left: 2vw;
    // margin-top: 1vh;
  }
  .demo-table-expand {
    font-size: 0;
    .el-form-item {
      margin-right: 0;
      margin-bottom: 0;
      width: 50%;
    }
    label {
      width: 90px;
      color: #99a9bf;
    }
  }

}

</style>