<template>
  <tab-bar>
    <router-link to="/home">
      <tab-bar-items path="/home">
        <img slot="tab-icon-active" src="~assets/imgs/tab/active_index.svg"/>
        <img slot="tab-icon" src="~assets/imgs/tab/index.svg"/>
        <div slot="tab-text">首页</div>
      </tab-bar-items>
    </router-link>

    <router-link to="/product">
      <tab-bar-items path="/product">
        <img slot="tab-icon-active" src="~assets/imgs/tab/active_product.svg"/>
        <img slot="tab-icon" src="~assets/imgs/tab/product.svg"/>
        <div slot="tab-text">产品</div>

      </tab-bar-items>
    </router-link>

    <router-link to="/car">
      <tab-bar-items path="/car">
        <img slot="tab-icon-active" src="~assets/imgs/tab/active_car.svg"/>
        <img slot="tab-icon" src="~assets/imgs/tab/car.svg"/>
        <div slot="tab-text">购物车</div>
      </tab-bar-items>
    </router-link>

    <router-link to="profile">
      <tab-bar-items path="/profile">
        <img slot="tab-icon-active" src="~assets/imgs/tab/active_user.svg"/>
        <img slot="tab-icon" src="~assets/imgs/tab/user.svg"/>
        <div slot="tab-text">我的</div>
      </tab-bar-items>
    </router-link>
  </tab-bar>

</template>

<script>
  import tabBar from "components/common/tabbar/TabBar"
  import TabBarItems from "components/common/tabbar/TabBarItem"
    export default {
        name: "mainTabBar",
      components: {
        tabBar,
        TabBarItems
      }
    }
</script>

<style scoped>

</style>
