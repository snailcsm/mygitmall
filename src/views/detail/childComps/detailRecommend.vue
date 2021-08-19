<template>
    <div id="detail-recommend">
   <goods-list-item v-for="(item,index) in recommondData" :goodsItem="item" :key="index"></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "components/content/goods/goodsListItem";
    export default {
        name: "detailRecommend",
      props:{
          recommondData: Array
      },
      components: {
          GoodsListItem},
    }

</script>

<style scoped>
#detail-recommend{
  width: 96%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
