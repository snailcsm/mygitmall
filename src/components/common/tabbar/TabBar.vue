<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "tabBar"
    }
</script>

<style scoped>
  #tabBar{
    width: 100%;
    display: flex;
    height: 49px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: space-around;
    background: #eee;
    border-top: 1px #ccc solid;
    z-index: 99;
  }


</style>
