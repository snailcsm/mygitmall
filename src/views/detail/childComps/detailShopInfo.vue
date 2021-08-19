<template>
    <div class="shop">
    <div class="shop-msg">
     <div class="shop-logo"><img :src="shop.shopLogo"/></div>
      <div class="shop-name">{{shop.name}}</div>
    </div>

      <div class="shop-data">
        <div class="shop-data-left">
          <div class="shop-goods-msg">
            <div class="sdm-data">{{(shop.cSells/10000).toFixed(1)}}万</div>
            <div class="sdm-intro">总销量</div>
          </div>
          <div class="shop-goods-msg">
            <div class="sdm-data">{{shop.cGoods}}</div>
            <div class="sdm-intro">全部宝贝</div>
          </div>
        </div>
        <div class="shop-data-right">
          <div class="score-list"
               :class="{'isbetter':item.isBetter}"
               v-for="item in shop.score"
               :key="item.index">
            <span class="score-title">{{item.name}}</span>
            <span class="score-data">{{item.score}}</span>
            <span class="score-type">{{getType(item.isBetter)}}</span>
          </div>
        </div>
      </div>

      <a class="shop-link" :href="shop.shopUrl">进店逛逛</a>
    </div>
</template>

<script>
    export default {
        name: "detailShopInfo",
        props:{
          shop:Object
        },
      methods:{
          getType(isBetter){
            return isBetter==true?'高':'低'
          }
      }

    }
</script>

<style scoped>
.shop{
  width: 90%;
  margin: 8% auto;
}
  .shop-msg{
    width: 100%;
    display: flex;
  }
  .shop-logo{
    height: 80px;
  }
.shop-logo img{
  height: 100%;
  width: auto;
}
  .shop-name{
    line-height: 80px;
    margin-left: 5%;
    font-size: 18px;
    color: #666
  }
  .shop-data{
    display: flex;
    justify-content: space-between;
    margin: 8% auto;
  }
  .shop-data-left{
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 50%;
  }
  .shop-goods-msg{
    flex:1;
  }
.shop-data-right{
  font-size: 14px;
}
  .sdm-data{
    font-size: 18px;
  }
  .sdm-intro{
    font-size: 12px;
    line-height: 30px;
  }
  .score-list{
    width: 100%;
    margin-bottom: 4px;
    text-align: right;
    font-size: 12px;
  }

  .score-data{
text-align: center;
    display: inline-block;
    width: 50px;
    color: #4CAF50;

  }
.score-type{
background: #4CAF50;
  color: #fff;
  padding: 0 1px;
}
.isbetter .score-data{
color: #f13e3a;
}
.isbetter .score-type{
  background:#f13e3a ;
}
  .shop-link{
    display: block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    width: 40%;
    background: #ddd;
    margin: 5% auto;
    color: #444;
    border-radius: 5px;
  }
</style>
