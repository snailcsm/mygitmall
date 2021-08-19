<template>
    <div class="bottom_bar">
      <div class="bottom-bar-left">
        <a class="kf">
          <span class="icon iconfont icon-kefu"></span>
          客服
        </a>
        <a>
          <span class="icon iconfont icon-iconfront-"></span>
          店铺
        </a>
        <a>
          <span class="icon iconfont icon-shoucang1"></span>
          收藏
        </a>
      </div>
      <div class="bottom-bar-right">
        <a class="gwc-btn" @click="carClick">
          <span class="icon iconfont icon-gouwuche"></span>
          加入购物车
        </a>
        <a class="buy-btn">立即购买</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "detailBottomBar",
      methods:{
        carClick(){
          this.$emit('joinCar')
        }
      }
    }
</script>

<style scoped>
.bottom_bar{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  width: 100%;
  background: #fff;
  display: flex;
}
  .bottom-bar-left,.bottom-bar-right{
    width: 50%;
    display: flex;
  }
.bottom-bar-left a,.bottom-bar-right a{
  display: block;
  flex: 1;
  text-align: center;
}
.bottom-bar-left a{
  font-size: 12px;
  color: #444;
}

  .icon{
    display: block;
    margin: 4% auto;
    font-size: 20px;
  }
  .kf{
    color: var(--base_color_deep)!important;
  }
  .gwc-btn{
    background: var(--base_color_deep);
    color: #fff;
    font-size: 12px;
  }
.gwc-btn span{
  font-size: 26px;
  margin: 2px auto 0;
}
  .buy-btn{
    background:#42b983;
    color: #fff;
    line-height: 50px;
  }
</style>
