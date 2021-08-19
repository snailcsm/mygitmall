<template>
    <div id="carBottomBar">
      <div class="check-box">
        <check-but class="all-check-but" :checkState="isAllCheck" @click.native="allCeckClick"></check-but>
        <span>全选</span>
      </div>
      <div class="price-box">
        合计：<span>{{allPrice}}</span>
      </div>
      <div class="account-box">
        <a @click="account">去核算({{allBuy}})</a>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CheckBut from "components/content/checkBut/checkBut";

    export default {
        name: "carBottomBar",
      components: {CheckBut},
      computed:{
        ...mapGetters(['carProductList']),
          allPrice(){
          let price=this.carProductList.filter(item=>{
            return  item.checked;
          }).reduce((prv,item)=>{
            return prv+item.price*item.count;
          },0)
          return '￥'+price.toFixed(2);
          },
        allBuy(){
          return this.carProductList.filter(item=>{return item.checked}).length;
        },
        isAllCheck(){
        return !this.carProductList.find(item=>!item.checked)&&this.carProductList.length>0
        },
      },
      methods:{
        allCeckClick(){
          console.log("isAllCheck:"+this.isAllCheck)
          if(this.carProductList.length<1){
            this.$Toast.show("购物车里还没有东西呢<br/>快去添加吧",3e3)
            return
          }
          if(this.isAllCheck){//点击之前全部都是选中将状态改为false
            this.setCommit(false)
          }else{
            this.setCommit(true)
          }
        },
        setCommit(state){
          this.carProductList.forEach(item=>{
            console.log(item)
            this.$store.commit({
              type:'setCheckedState',
              obj:item,
              checked:state
            })
          })
        },
        account(){
          if(this.allBuy<1){
            this.$Toast.show("请先选择商品",3e3)
          }
        }
      }
    }
</script>

<style scoped>
  #carBottomBar{
    width: 100%;
    height: 40px;
    background: #ddd;
    position: fixed;
    bottom: 50px;
    left: 0;
    display: flex;
    box-shadow: 0px -1px 6px #999;
    line-height: 40px;
  }
  .check-box{
    width: 20%;
    display: flex;
    font-size: 14px;
  }
  .all-check-but{
    margin: 11px 6%;
  }
  .price-box{
    flex:1;
  }
  .account-box{
    width: 26%;
    background: var(--base_color_deep);
    color: #fff;
    text-align: center;
  }
</style>
