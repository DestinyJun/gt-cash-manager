<template>
  <div id="paging">
     <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        @current-change="pageChange($event)">
     </el-pagination>
  </div>
</template>
<script>
export default {
    name: 'paging',
    methods:{
       pageChange(e){
         // console.log(e);
         this.$emit('pageChange', e);
       }
    }
}
</script>    