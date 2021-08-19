
<template>
    <div class="nav_bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
  //顶部导航组件
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav_bar{
    width:100%;
    height:44px;
    line-height:44px;
    display: flex;
    justify-content: space-around;
  }
.left,.right{
  width: 14%;
}
  .center{
    flex:1;
  }
</style>
