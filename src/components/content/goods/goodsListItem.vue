<template>
<a class="goods-item" @click="goDetail(itemId)">
<img :src="ImgSrc" class="goods-img" @load="imgLoad">
  <div class="goods-title">{{goodsItem.title}}</div>
  <div class="goods-data">
    <span class="price-price">{{goodsItem.price}}</span>
    <img src="~assets/imgs/home/cfav.svg">
    <span class="goods-cfav">{{goodsItem.cfav}}</span></div>
</a>
</template>

<script>
    export default {
        name: "goodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      methods:{
        imgLoad(){
          this.$bus.$emit('imageLoad')
        },
        goDetail(id){
          this.$router.push('/detail?iid='+id)
        }
      },
      computed:{
          ImgSrc(){
         return this.goodsItem.image||(this.goodsItem.show&&this.goodsItem.show.img)||this.goodsItem.img;
          },
          itemId(){
            return this.goodsItem.item_id||this.goodsItem.iid;
          }
      }
    }
</script>

<style scoped>
.goods-item{
  width:49%;
  margin-bottom: 5%;
  color: #444;
}
.goods-img{
  width:100%;
  border-radius: 5px;
}
  .goods-title{
    width: 100%;
    font-size: 12px;
    color: #444;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    line-height: 20px;
    margin-top: 4px;
  }
  .goods-data{
    font-size: 12px;
    line-height: 20px;
    text-align: center;
  }
  .price-price{
    margin: 0 8px;
    color: var(--active_text_color);
  }
  .goods-data img{
    display: inline;
    width: 12px;
    margin-right: 2px;
  }
</style>
