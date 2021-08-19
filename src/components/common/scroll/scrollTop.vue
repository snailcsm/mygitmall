<template>
    <a class="scroll-top">
      <img src="~assets/imgs/common/up.svg">
    </a>
</template>

<script>
    export default {
        name: "scrollTop"
    }
</script>

<style scoped>
.scroll-top{
  display: block;
  background: #fff;
  position: fixed;
  bottom: 56px;
  right: 6px;
  border-radius: 38px;
}
.scroll-top img{
  width: 26px;
  height: 26px;
  padding: 4px;
}
</style>
