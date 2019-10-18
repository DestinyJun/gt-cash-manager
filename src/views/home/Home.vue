<template>
  <div id="home" class="home">
     <div class="header">
         <headers :data="title"></headers>
     </div>
     <div class="content">
       <router-view></router-view>
     </div>
  </div>
</template>

<script src="./home.component.js">
</script>
<style lang="scss" scoped>
  @import "home.component.scss";
</style>
