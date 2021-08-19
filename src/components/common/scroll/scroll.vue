<template>
    <div class="wrapper" ref="rollWrapper">
      <div class="content" id="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "scroll",
      props:{
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default: false
        }
      },
      data(){
          return {
            scrollObj:null,
            pullingUp:false,
          }
      },
      mounted() {
          //创建BScroll对象
         this.scrollObj=new BScroll(this.$refs.rollWrapper,{
           click:true,
           probeType:this.probeType,
           pullUpLoad:this.pullUpLoad
         })

          //监听滚动位置
        if(this.probeType===2||this.probeType===3){
          this.scrollObj.on('scroll',position=>
          {
            this.$emit('scrollState',position)
          })
        }

        //监听scroll滚动到底部
        if(this.pullUpLoad){
          this.scrollObj.on('pullingUp',()=>{
            this.$emit('pullingUp');
          })
        }

      },
      methods:{
          scrollToPosition(x,y,t){
            this.scrollObj&&this.scrollObj.scrollTo(x,y,t);
          },
          finishpu(){
            this.scrollObj&&this.scrollObj.finishPullUp();
          },
          refresh(){
          this.scrollObj&&this.scrollObj.refresh();
          console.log("success flush")
        }
      }
    }
</script>

<style scoped>
.wrapper,.content{
  width: 100%;
}
</style>
