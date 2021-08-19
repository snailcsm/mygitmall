<template>
  <nav-bar>
    <a class="back-but" slot="left" @click="back"><img src="~assets/imgs/common/back.svg"/></a>
    <div class="tab-ctrol" slot="center">
      <a v-for="(item,index) in tabList"
         :key="index"
         :class="{'tab-active':index==clickedIndex}"
         @click="detailTabClick(index)">
        <span>{{item}}</span>
      </a>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "detailNavBar",
    data() {
      return {
        tabList: ['商品', '参数', '评论', '推荐'],
        clickedIndex: 0
      }
    },
    components: {
      NavBar,
    },
    methods: {
      detailTabClick(index) {
        this.clickedIndex = index;
        this.$emit('tabClick', index);
      },
      back() {
        this.$router.go(-1);
      }
    }

  }
</script>

<style scoped>
  .back-but img {
    width: 26px;
    margin: 9px auto;
  }
  .tab-ctrol{
    display: flex;
    background: #fff;
    top:44px;
    width: 100%;
  }
  .tab-ctrol a{
    display: block;
    flex: 1;
    height: 40px;
    line-height: 40px;
    color:#444;
    text-align: center;
    font-size:14px;
  }
  .tab-active span{
    color: var(--active_text_color);
    padding: 4px;
    border-bottom: 2px var(--active_text_color) solid;
  }
</style>
