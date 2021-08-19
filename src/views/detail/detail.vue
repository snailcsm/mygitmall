<template>
  <div id="detail">
    <!--顶部tab-->
    <detail-nav-bar class="detail-tabctrol" @tabClick="tabctrolClick" ref="detailTab"/>
    <scroll class="detail-scroll" ref="Scroll" :probeType="3" :pullUpLoad="true" @scrollState="getScrollPosition">
      <!--轮播-->
      <detail-banner :bannerData="barnnerList"></detail-banner>
      <!--商品基本信息-->
      <detain-base-info :goods="goods"></detain-base-info>
      <!--店铺基本信息-->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!--商品描述和图片详情-->
      <goods-detail :goodsDetail="goodsDetail" @listLoaded="listLoaded"></goods-detail>
      <!--商品参数--->
      <detail-params :detailParams="goodsParams" ref="params"></detail-params>
      <!--商品评论-->
      <detail-comment :comments="comment" @showImg="showPhoto" ref="comment"></detail-comment>
      <!--推荐商品-->
      <detail-recommend :recommondData="recommond" ref="recommend"></detail-recommend>
    </scroll>
    <photo-frame :photo="photoSrc" v-if="photoSrc.length>1" @closePhoto="closePhoto"></photo-frame>
    <detail-bottom-bar @joinCar="joinCar"></detail-bottom-bar>
    <scroll-top @click.native="clickScrollTop" v-show="isScrollTopShow"></scroll-top>
  </div>
</template>

<script>

  import scroll from "components/common/scroll/scroll"
  import {getDetailData, getDetailRecommend, Goods, Shop} from "network/detail"
  import DetailBanner from "./childComps/detailBanner";
  import DetailNavBar from "./childComps/detailNavBar";
  import DetainBaseInfo from "./childComps/detainBaseInfo";
  import DetailShopInfo from "./childComps/detailShopInfo";
  import GoodsDetail from "./childComps/goodsDetail";
  import DetailParams from "./childComps/detailParams";
  import DetailComment from "./childComps/detailComment";
  import PhotoFrame from "./childComps/photoFrame";
  import DetailRecommend from "./childComps/detailRecommend";
  import DetailBottomBar from "./childComps/detailBottomBar";
  import {itemListener,scrollTopMixin} from "common/mixin";
  //import goodsList from "../../components/content/goods/goodsList";

  export default {
    name: "Detail",
    mixins:[itemListener,scrollTopMixin],
    components: {
      scroll,
      DetailBanner,
      DetailNavBar,
      DetainBaseInfo,
      DetailShopInfo,
      GoodsDetail,
      DetailParams,
      DetailComment,
      PhotoFrame,
      DetailRecommend,
      DetailBottomBar
    },
    data() {
      return {
        iid: null,
        barnnerList: [],
        goods: {},
        shop: {},
        goodsDetail: {
          key: "",
          list: [],
          desc: "",
        },
        goodsParams: {
          set: [],
          rule: [],
        },
        comment: [],
        photoSrc: "",
        recommond: [],
        tabPosition:[],
        currentIndex:0
      }
    },
    created() {
      this.iid = this.$route.query.iid;
      // console.log("iid:"+this.iid)
      //获取商品详情数据
      getDetailData(this.iid).then((res) => {
        console.log(res)
        const result = res.data.result;
        //获取顶部轮播图数据
        this.barnnerList.push(...result.itemInfo.topImages);
        //获取商品信息
        this.goods = new Goods(result.itemInfo, result.columns, result.shopInfo.services);
        //获取店铺信息
        this.shop = new Shop(result.shopInfo);
        //获取商品详情图片和描述
        this.goodsDetail.desc = result.detailInfo.desc;
        this.goodsDetail.key = result.detailInfo.detailImage[0].key;
        this.goodsDetail.list.push(...result.detailInfo.detailImage[0].list)
        //获取商品参数数据
        const itemsParams = result.itemParams;
        this.goodsParams.set.push(...itemsParams.info.set);
        this.goodsParams.rule.push(...itemsParams.rule.tables[0]);
        //获取评论数据
        this.comment.push(...result.rate.list);
      //  console.log(this.comment);
      })
      //获取推荐数据
      getDetailRecommend().then(res => {
        // console.log(res)
        this.recommond.push(...res.data.data.list)
      })

   //   this.$nextTick(()=>{
     // })
    },
    destroyed() {
      //取消全局事件的监听
      this.$bus.$off(this.itemListener);
    },
    methods: {
      listLoaded() {
        this.$refs.Scroll.refresh();
        this.tabPosition=[];
        this.tabPosition.push(0);
        this.tabPosition.push(this.$refs.params.$el.offsetTop);
        this.tabPosition.push(this.$refs.comment.$el.offsetTop);
        this.tabPosition.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.tabPosition)
      },
      showPhoto(value) {
        this.photoSrc = value;
      },
      closePhoto() {
        this.photoSrc = "";
      },
      tabctrolClick(index) {
        console.log(index);
        this.$refs.Scroll.scrollToPosition(0,-this.tabPosition[index],200)
      },
      getScrollPosition(position){
        let positionY=-position.y;
        this.showScrollTopDemo(-positionY);//控制回到顶部组件的显隐
        let length=this.tabPosition.length;
        for(let i=0;i<length;i++){
          if(this.currentIndex!=i&&((i<length-1&&positionY>=this.tabPosition[i]&&positionY<this.tabPosition[i+1])||(i>=length-1&&positionY>=this.tabPosition[i]))){
            this.currentIndex=i;
            this.$refs.detailTab.clickedIndex=i;
          }
        }
      },
      joinCar(){
        const goodsObj={}
          goodsObj.iid=this.iid;
          goodsObj.images=this.barnnerList[0];
          goodsObj.title=this.goods.title;
          goodsObj.desc=this.goods.desc;
          goodsObj.price=this.goods.realPrice;
          goodsObj.count=1;
        this.$store.dispatch('addCarList',goodsObj).then(res=>{
          this.$Toast.show(res,3e3);
        });
      }
    }
  }
</script>

<style scoped>
  #detail {
    width: 100%;
    position: relative;
    background: #fff;
    z-index: 999;
    height: 100vh;
  }

  .detail-scroll {
    position: absolute;
    top: 44px;
    bottom:50px;
    overflow: hidden;
  }

  .detail-tabctrol {
    position: relative;
    z-index: 99;
  }
</style>
