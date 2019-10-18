<template>
  <div id="tables" class="tables">
    <div class="select">
      <el-table :data="t_data" style="width: 100%">
        <el-table-column type="expand">
          <!-- <template slot-scope="datas">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ datas.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ datas.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ datas.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ datas.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ datas.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ datas.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ datas.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template> -->
        </el-table-column>
        <el-table-column label="商品 ID" prop="manage"></el-table-column>
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
      tableData5: null
    };
  },
  props: {
    t_data: Array
  },
  updated(){
    console.log(123);
     console.log( this.t_data);
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