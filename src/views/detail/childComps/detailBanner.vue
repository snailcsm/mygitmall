<template>
  <swipe :auto="4000" class="detail-banner">
    <swipe-item v-for="item in bannerData" :key="item.index">
      <img :src="item"/>
    </swipe-item>
  </swipe>
</template>

<script>
  // <img :src="item"/>
  import vue from 'vue'
  import mint from 'mint-ui'
  vue.use(mint)
  import {Swipe, SwipeItem} from 'mint-ui'
    export default {
        name: "detailBanner",
        props:{
          bannerData:{
            type:Array,
            default(){
              return []
            }
          }
        },
      components:{
        Swipe, SwipeItem
      },
      created() {
      }
    }
</script>

<style scoped>
.detail-banner{
  height: 300px;
}
@import "~mint-ui/lib/style.css";
.detail-banner{
  display: block;
width: 100%;
}
.detail-banner img{
  display: block;
  height:100%;
  width:auto;
  margin:0 auto;
}
</style>
