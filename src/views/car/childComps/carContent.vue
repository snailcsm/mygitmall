<template>
    <div class="car-content">
      <scroll ref="Scroll" class="car-scroll">
       <car-list-item v-for="(item,index) in carList" :key="index" :product="item"/>
      </scroll>
    </div>
</template>

<script>
  import scroll from "components/common/scroll/scroll";
  import CarListItem from "./carListItem";
    export default {
        name: "carContent",
      props:{
        carList:Array
      },
      components:{
        scroll,
        CarListItem
      },
      activated() {
          this.$refs.Scroll.refresh();
      }
    }
</script>

<style scoped>
.car-content{
  height:calc(100% - 44px - 50px - 40px);

}
  .car-scroll{
    height: 100%;
    overflow: hidden;
  }
</style>
