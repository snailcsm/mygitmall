<template>
  <a class="check-but" :class="{checked:checkState}">
    <span class="icon iconfont icon-duigou"></span></a>
</template>

<script>
    export default {
        name: "checkBut",
      props:{
          checkState:Boolean
      }

    }
</script>

<style scoped>
  .check-but{
    display:block;
    width: 12px;
    height: 12px;
    border:1px #aaa solid;
    border-radius: 50%;
    padding: 2px;
  }

  .check-but span{
    display:block;
    height: 100%;
    height: 100%;
    line-height: 12px;
    color: #fff;
    font-size: 14px;
    display: none;
  }
  .checked{
    background: var(--base_color_deep);
    border-color: var(--base_color_deep);
  }
  .checked span{
    display: block;
  }
</style>
