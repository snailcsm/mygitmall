<template>
    <div class="goods-detail">
      <div class="goods-desc"><span>╔</span>{{goodsDetail.desc}}<span>╝</span></div>
      <div class="detail-title">
【{{goodsDetail.key}}】
      </div>
      <div class="goods-imgs">
        <img :src="item" v-for="item in goodsDetail.list" :key="item.index" @load="imgLoad"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "goodsDetail",
      props:{
        goodsDetail:Object
      },
      data(){
        return{
          counter:0,
          imgsListLength:0
        }
      },
      methods:{
          imgLoad(){
            ++this.counter
            if(this.counter==this.imgsListLength){
              this.$emit("listLoaded")
            }

        }
      },
      watch:{
      // goodsDetail(){//浅监听监听不到对象内属性值的变化
        //   this.imgsListLength=this.goodsDetail.list.length;
        //  },

        //深度监听
        'goodsDetail.list':{
          handler(){
            this.imgsListLength=this.goodsDetail.list.length;
          },
          deep:true,
          immediate:true
    }
      }
    }
</script>

<style scoped>
.goods-detail{
  width: 90%;
  margin: 15% auto;
}
.goods-desc{
  color: #444;
  font-size: 14px;
  line-height: 1.6em;
}
.goods-desc span{
  font-size: 20px;
  position: relative;
}
.goods-desc span:first-child{
  margin-right: 10px;
  top:-10px
}
.goods-desc span:last-child{
  margin-left: 10px;
  bottom: -10px;
}
.detail-title{
  line-height: 40px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5%;
}
  .goods-imgs img{
    width: 100%;
  }
</style>
