<template>
  <div id="tables" class="tables">
    <div class="select">
      <el-table :data="t_data" style="width: 100%" v-if="t_type === 1">
        <el-table-column type="expand"  fixed>
          <template slot-scope="datas">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item :label="item.label" v-for="(item, index) in t_detail" :key="index">
                <span>{{ datas.row[item.field] }}</span>
              </el-form-item>
              <!-- <el-form-item label="店铺Id">
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
              </el-form-item> -->
            </el-form>
          </template>
        </el-table-column>
        <el-table-column :label="item.label" :prop="item.field" v-for="(item, index) in t_header" :key="index"></el-table-column>
        <!-- <el-table-column label="管理人姓名" prop="manage"></el-table-column>
        <el-table-column label="管理人电话" prop="manageTelephone"></el-table-column>
        <el-table-column label="服务区方向" prop="orientation"></el-table-column> -->
      </el-table>
        <el-table :data="t_data" style="width: 100%" v-if="t_type === 2">
        <el-table-column type="expand" >
          <template slot-scope="datas">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item :label="item.label" v-for="(item, index) in t_detail" :key="index">
                <span>{{ datas.row[item.field] }}</span>
              </el-form-item>
              <!-- <el-form-item label="店铺Id">
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
              </el-form-item> -->
            </el-form>
          </template>
        </el-table-column>
        <el-table-column :label="item.label" :prop="item.field" v-for="item in t_header.slice(0, t_header.length -1)" :key="item.field" row-style="text-align: center"></el-table-column>
        <el-table-column :label="item.label" :prop="item.field" v-for="item in t_header.slice(t_header.length -1, t_header.length)" :key="item.field">
           <template  slot-scope="datas">
              <el-button type="success" plain @click="changeMerchat(datas.row)">修改店长</el-button>
              <el-button type="primary" plain @click="addMerchat(datas.row)" v-if="datas.row.adminStatus === 'true'">添加店长职位</el-button>
              <!-- <el-button type="success">修改店长</el-button> -->
           </template>
        </el-table-column>
        <!-- <el-table-column label="管理人姓名" prop="manage"></el-table-column>
        <el-table-column label="管理人电话" prop="manageTelephone"></el-table-column>
        <el-table-column label="服务区方向" prop="orientation"></el-table-column> -->
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
    t_header: Array,
    t_detail:  Array,
    t_type:  Number,
    serviceId:  [String, Number],
  },
  updated(){
  },
  methods: {
     changeMerchat(item){
      //  console.log(123);
       this.$emit('showDialog', item, 'change')
     },
     addMerchat (item) {
       this.$emit('showDialog', item, 'add')
     }
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
  // .is-leaf {
  //   // text-align: left;
  //   margin-left: 2vw;
  // }
}

</style>