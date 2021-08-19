<template>
  <div id="product">
    <!--左侧菜单栏-->
    <product-nav-bar class="product-nav-bar"
                     :productTypeList="productList"
                     @typeClick="menuClick"
    ></product-nav-bar>
    <!--右侧内容展示区域-->
   <div id="productContent">
     <tab-ctrol :tabList="['流行','新品','畅销']" @getTabId="tabClick" ref="ptab2" class="project-tab" v-show="isShow"></tab-ctrol>
    <scroll id="productScroll"
            ref="Scroll"
            :probeType="3"
            @scrollState="scrollCtrol"
    >
      <!--推荐--->
      <subproject :subprojectList="subTypeList" @imgLoad="dreflush"></subproject>
      <tab-ctrol :tabList="['流行','新品','畅销']" @getTabId="tabClick" ref="ptab1"></tab-ctrol>
      <goods-list :goodsData="products[goodsType]"></goods-list>
    </scroll>
   </div>
    <scroll-top @click.native="clickScrollTop" v-show="isScrollTopShow"></scroll-top>
  </div>
</template>

<script>
  import ProductNavBar from "./childComps/productNavBar";
  import {getCategory, getSubcategory, getCategoryDetail} from "network/product";
  import Scroll from "components/common/scroll/scroll";
  import Subproject from "./childComps/subproject";
  import TabCtrol from "components/content/tabCtrol/tabCtrol";
  import goodsList from "components/content/goods/goodsList";
  import ScrollTop from "components/common/scroll/scrollTop";
  import {scrollTopMixin} from "common/mixin";

  export default {
    name: "Prodect",
    components: {
      Scroll,
      ProductNavBar,
      Subproject,
      TabCtrol,
      goodsList,
      ScrollTop
    },
    mixins: [scrollTopMixin],
    data() {
      return {
        productList: [],
        subTypeList: [],
        products: {
          'pop': [],
          'new': [],
          'sell': []
        },
        goodsType: "pop",
        isShow:false,
        tabOffsetTop:0
      }
    },
    created() {
      getCategory().then(res => {//获取分类数据
        this.productList.push(...res.data.data.category.list);//获取分类的名称
        this.getSubProject(0);//获取推荐数据
        this.getProjectData(0, 'pop');
        this.getProjectData(0, 'new');
        this.getProjectData(0, 'sell');
      });
    },
    mounted() {
    },
    activated() {
      this.$refs.Scroll.refresh();
    },
    methods: {
      menuClick(index) {
        this.getSubProject(index);
        this.getProjectData(index, 'pop');
        this.getProjectData(index, 'new');
        this.getProjectData(index, 'sell');
        this.clickScrollTop();
      },
      getSubProject(index) {
        this.subTypeList.length = 0;
        getSubcategory(this.productList[index].maitKey).then(res => {
          console.log(res)
          this.subTypeList.push(...res.data.data.list)
        })
      },
      getProjectData(index, productType) {
        this.products[productType].length = 0;
        getCategoryDetail(this.productList[index].miniWallkey, productType).then((res) => {
          //console.log(res)
          this.products[productType].push(...res.data);
        })
      },
      dreflush() {
        this.$refs.Scroll.refresh();
        this.tabOffsetTop=this.$refs.ptab1.$el.offsetTop;
        console.log(this.tabOffsetTop)
      },
      tabClick(index) {
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
        this.$refs.ptab1.clickedIndex=index;
        this.$refs.ptab2.clickedIndex=index;
      },
      scrollCtrol(position) {
        this.showScrollTopDemo(position.y);
        this.isShow=-position.y>this.tabOffsetTop;
        console.log(this.isShow+"---"+position.y)
      }

    }
  }
</script>

<style scoped>
  #product {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
  }

  .product-nav-bar {
    width: 26%;
  }

  #productContent {
    width: 78%;
    height: calc(100% - 50px);
    overflow: hidden;
    position: relative;
  }
  #productScroll{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .project-tab{
    width: 100%;
    position: absolute;
    top: 0;
    right: 0px;
    z-index: 5;
  }
</style>
