<template>
    <div class="detail-params">
      <div class="detail-title">【商品参数】</div>
      <ul class="goods-params">
        <li class="goods-params-list" v-for="(item,index1) in detailParams.rule" :key="index1">
            <span v-for="(data,index2) in item" :key="index2">{{data}}</span>
        </li>
      </ul>
      <ul class="goods-message">
        <li class="goods-message-list" v-for="(item,index) in detailParams.set" :key="index">
          <span>{{item.key}}</span>
          <span>{{item.value}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "detailParams",
      props:{
          detailParams:Object
      }
    }
</script>

<style scoped>
.detail-params{
  width: 90%;
  margin:5% auto;
  color:#444;
}
.detail-title{
  line-height: 40px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5%;
}
.goods-params{
  border-bottom: 1px #ddd solid;
}
.detail-params ul{
  display: block;
  width: 100%;
  padding: 10px 0;
}
.detail-params ul li{
  display: flex;
  width: 100%;
  line-height: 32px;
}
span{
  display: block;
  font-size: 12px;
}
.goods-params-list span{
  width: 20%;
  text-align: center;
}
  .detail-params ul li span:first-child{
width: 25%;
  }
.goods-params-list span:first-child{
  text-align: left;
}
.goods-message-list span:last-child{
  color:var(--active_text_color);
  width: 75%;
 }

</style>
