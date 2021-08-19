<template>
<div id="homeGoods">
  <goods-list-item v-for="(item,index) in goodsData" :key="index" :goodsItem="item"></goods-list-item>
</div>
</template>

<script>
  import goodsListItem from "./goodsListItem";
    export default {
        name: "goodsList",
      props:{
          goodsData:{
            type:Array,
            default(){
              return []
            }
          }
      },
      components:{
        goodsListItem
      }

    }
</script>

<style scoped>
#homeGoods{
  width: 96%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
