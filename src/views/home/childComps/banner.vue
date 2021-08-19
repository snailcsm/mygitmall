<template>
<swipe :auto="4000" :style="{height:swiperh+'px'}">
  <swipe-item v-for="item in bannerList" :key="item.title">
    <a :href="item.link" class="banner-list" >
      <img :src="item.image" @load="imgLoad"/>
    </a>
  </swipe-item>
</swipe>
</template>

<script>
  import vue from 'vue'
  import mint from 'mint-ui'
  vue.use(mint)
  import {Swipe, SwipeItem} from 'mint-ui'
  export default {
    name: "banner",
    props:{
      bannerList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        swiperh:0,
        isLoad:false
      }
    },
    components: {
      Swipe,SwipeItem
    },
    mounted(){
    },
    methods:{
      imgLoad(){ //监听图片是否加载完,每次图片加载完都执行一次
        if(!this.isLoad){
          this.isLoad=true;// 仅让此内容执行一次
          //1、计算bunner的高度
          let firstItem=this.bannerList[0];
          this.swiperh=document.body.clientWidth*firstItem.height/firstItem.width;

          //2.告诉外界已经有一张图片加载成功了
          this.$emit('bannerImgLoad',this.swiperh)
        }

      }
    }


  }
</script>

<style scoped>
@import "~mint-ui/lib/style.css";
  .banner-list,.banner-list img{
    display: block;
    width:100%;
  }
</style>
