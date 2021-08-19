<template>
  <div id="home">
    <nav-bar class="hom-nav">
      <div slot="center" class="home-title">snail购物街</div>
    </nav-bar>
    <tab-ctrol class="ceiling"
      :tabList="['流行','新款','精选']"
               @getTabId="getTabId"
               ref="tbactrol2"
               v-show="tabctrolCeiling"/>
    <scroll class="mainScroll"
            ref="Scroll"
            @scrollState="scrollCtrol"
            :probeType="3"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <home-banner class="home_banner" :bannerList="banners" @bannerImgLoad="bannerImgLoad"></home-banner>
      <recommend-view :recomList="recommends"></recommend-view>
      <tab-ctrol :tabList="['流行','新款','精选']" @getTabId="getTabId" ref="tbactrol1"/>
      <goods-list :goodsData="goods[goodsType].list"></goods-list>
    </scroll>
    <scroll-top @click.native="clickScrollTop" v-show="isScrollTopShow"></scroll-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import scroll from "components/common/scroll/scroll"

  import TabCtrol from "components/content/tabCtrol/tabCtrol"

  import HomeBanner from "./childComps/banner";
  import recommendView from "./childComps/recommendView";
  import goodsList from "components/content/goods/goodsList";

  import {getHomeData, getHomeGoods} from "network/home";
  import {itemListener,scrollTopMixin} from "common/mixin";

  export default {
    name: "Home",
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        goodsType: 'pop',
        tabctrolTop:0,
        tabctrolCeiling:false,
        scrollState:[0,0,0],//记录每次点击以后的滚动位置，这里还没有做，后面记得回来写
      //  itemListener:null
      }
    },
    mixins:[itemListener,scrollTopMixin],
    components: {
      NavBar,
      TabCtrol,
      HomeBanner,
      recommendView,
      goodsList,
      scroll,
    },
    created() {//此组件的生命周期函数
      // 请求multidata数据
      this.getNetHomeData();
      // 请求商品数据
      this.getNetHomeGoods('pop');
      this.getNetHomeGoods('new');
      this.getNetHomeGoods('sell');
    },
    mounted() {
      //1、监听goods中图片加载完成
    //  const refresh=debounce(this.$refs.homeScroll.refresh,500);//调用
     // this.$bus.$on('imageLoad', () => {
     //   //加了防抖的刷新
     // refresh();
     //   // this.$refs.homeScroll.refresh();//直接刷新，不加防抖，刷新次数比较多
    //  })
    },
    activated(){
     this.$refs.Scroll.refresh();
      console.log("激活首页刷新")
    },
    deactivated() {
      //取消全局事件的监听
      this.$bus.$off(this.itemListener);
    },
    methods: {
      //以下为网络数据请求
      getNetHomeData() {
        getHomeData().then(res => {
          // console.log(res)
          let result = res.data.data;
          this.banners = result.banner.list;
          this.recommends = result.recommend.list;
        }, err => {
          console.log(err)
        });
      },
      getNetHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then((res => {
         // console.log(res)
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page = page;
          if (page > 1) {
            this.$refs.Scroll.finishpu();
          }
        }))
      },

      //以下为事件方法
      getTabId(index) {
        switch (index) {
          case 0:
            this.goodsType = 'pop';
            break;
          case 1:
            this.goodsType = 'new';
            break;
          case 2:
            this.goodsType = 'sell';
            break;
        }
        this.$refs.tbactrol1.clickedIndex=index;
        this.$refs.tbactrol2.clickedIndex=index;
      },

      scrollCtrol(position) {
        this.showScrollTopDemo(position.y);
        this.tabctrolCeiling=(-position.y)>this.tabctrolTop;
      },
      bannerImgLoad(sh){
        //计算tabctrol的offsettop
        this.tabctrolTop=this.$refs.tbactrol1.$el.offsetTop+sh;
      },

      //加载更多数据
      loadMore() {
        this.getNetHomeGoods(this.goodsType);
       // console.log('123')
      },


    },
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .hom-nav {
    background: var(--base_color_light);
    color: #fff;
    position: relative;
    top: 0;
    left: 0;
    z-index: 99;
    display: none;
  }

  .home-title {
    color: #fff;
    text-align: center;
  }

  .mainScroll {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top:0;
    bottom: 44px;
    left: 0;
  }
.ceiling{
  position: fixed;
  left: 0;
  z-index: 9;
  top:0
}
</style>
