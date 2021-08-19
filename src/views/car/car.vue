<template>
    <div id="car">
      <nav-bar class="car-title">
        <div slot="center">购物车({{carLength}})</div>
      </nav-bar>
      <!--购物车商品展示-->
      <car-content :carList="carList"></car-content>
      <!--底部计算工具栏-->
      <car-bottom-bar></car-bottom-bar>

    </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import NavBar from "components/common/navbar/NavBar";
  import CarContent from "./childComps/carContent";
  import CarBottomBar from "./childComps/carBottomBar";

    export default {
        name: "Car",
      components:{
        NavBar,
        CarContent,
        CarBottomBar
      },
      computed:{
          ...mapGetters({
            carLength:'carlistLength',
            carList:'carProductList'
          })
      }

    }
</script>

<style scoped>
  #car{
    height:100vh;
  }
  .car-title{
    text-align: center;
    background: var(--base_color_deep);
    color: #fff;
    letter-spacing: 2px;
  }
</style>
