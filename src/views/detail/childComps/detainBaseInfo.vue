<template>
<div class="goods-base-info">
  <p class="goods-title">
    {{goods.title}}
  </p>
  <div class="goods-price">
    <span class="new-price">{{goods.price}}</span>
    <span class="old-price">{{goods.oldPrice}}</span>
    <span class="low-price-type" :style="{'background':goods.discountBgColor}">{{goods.discountDesc}}</span>
  </div>
<div class="goods-msg">
  <span class="goods-msg-list" v-for="item in goods.columns" :key="item.index">{{item}}</span>
</div>
  <div class="goods-servive">
<div class="servive" v-for="item in goods.servive" :key="item.index">
  <img :src="item.icon"/>
  {{item.name}}
</div>
  </div>
</div>
</template>

<script>
    export default {
        name: "detainBaseInfo",
      props:{
          goods:{
            type:Object//接受到的是一个function 这个需要再查看一下
          }
      }
    }
</script>

<style scoped>
  .goods-base-info{
    width: 90%;
    margin: 0 auto;
  }
  .goods-title{
    font-size: 14px;
    margin: 4% auto 2%;
    color: var(--base-text-color);
  }
  .goods-price{
    margin: 4% auto 6%;
  }
  .new-price{
    font-size: 22px;
    color: var(--active_text_color);
  }
  .old-price{
    font-size: 14px;
    color:var(--light_text_color);
    margin: 0 6px;
    text-decoration: line-through;
  }
  .low-price-type{
    color: #fff;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 10px;
    position: relative;
    top: -10px;
  }
  .goods-msg{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .goods-msg-list{
    flex:1;
    color: var(--light_text_color);
    font-size: 12px;
  }
  .goods-msg-list:last-child{
    text-align: right;
  }
  .goods-msg-list:nth-child(2){
    text-align: center;
  }
  .goods-servive{
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 4% auto;
  }
  .servive{
    width:33.3%;
    font-size: 12px;
    text-align: center;
    height:24px;
    line-height: 24px;
  }
  .servive img{
    width: 12px;
    display: inline;
  }
</style>
