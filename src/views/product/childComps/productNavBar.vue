<template>
  <div id="productType">
  <scroll  ref="productTypeScroll" class="product-type-scroll">
      <a class="pnav-list" v-for="(item,index) in productTypeList"
         :key="index"
         :class="{'active':currentId===index}"
      @click="ptypeClick(index)">{{item.title}}</a>
   </scroll>
  </div>
</template>

<script>
  import scroll from "components/common/scroll/scroll";
  //import {getSubcategory,getCategoryDetail} from "network/product";

  export default {
        name: "productNavBar",
      props:{
          productTypeList:Array

      },
      components:{
        scroll
      },
      data(){
          return{
            currentId:0
          }
      },
      mounted() {
        this.$refs.productTypeScroll.refresh();
      },
      activated() {
        this.$refs.productTypeScroll.refresh();
      },
      methods:{
        ptypeClick(index){
          this.currentId=index;
          this.$emit('typeClick',index);
          this.$refs.productTypeScroll.refresh();
        },

      },
    watch:{
      productTypeList(){
        console.log("555")

      }
    }
    }

</script>

<style scoped>
  #productType{
    box-shadow: 0 2px 10px #aaa;
    height:calc(100% - 50px);
    position: relative;
    z-index: 9;
  }
  .product-type-scroll{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .pnav-list{
    display: block;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-left: 5px #fff solid;
    text-align: center;
    color: var(--base-text-color);
    font-size: 14px;
  }
.active{
  border-color:var(--base_color_deep);
  color:var(--base_color_deep);
}
</style>
