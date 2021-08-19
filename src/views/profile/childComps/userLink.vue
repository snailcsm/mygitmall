<template>
    <div id="userLink">
      <a class="link-list"><span class="iconfont icon-xiaoxi"></span>我的消息</a>
      <a class="link-list"><span class="iconfont icon-jifen"></span>积分商城</a>
      <a class="link-list"><span class="iconfont icon-huiyuan"></span>会员卡</a>
      <a class="link-list set-up"><span class="iconfont icon-shezhi01"></span>设置</a>
    </div>
</template>

<script>
    export default {
        name: "userLink"
    }
</script>

<style scoped>
#userLink{
  width: 100%;
}
  .link-list{
    display: block;
    height: 40px;
    line-height: 40px;
    color: var(--base-text-color);
    border-bottom: 1px #eee solid;
    font-size: 14px;
    background: #fff;
    width: 90%;
    padding: 0 5%;
  }
.link-list span{
  margin-right: 4%;
  color: var(--base_color_deep);
  font-size: 18px;
}

</style>
