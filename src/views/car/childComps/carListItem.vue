<template>
    <div class="car-list-item">
      <div class="car-check">
        <check-but class="item-check-but" :checkState="product.checked" @click.native="choseProduct"></check-but>
      </div>
     <div class="car-product">
       <div class="car-product-img">
         <img :src="product.images"/>
       </div>
       <div class="car-product-msg">
         <div class="car-product-title">{{product.title}}</div>
         <div class="car-product-desc">{{product.desc}}</div>
         <div class="car-product-msg-bottom">
           <span class="car-product-price">￥{{product.price}}</span>
           <span class="car-product-count">x{{product.count}}</span>
         </div>
       </div>
     </div>
    </div>
</template>

<script>
  import CheckBut from "components/content/checkBut/checkBut";
    export default {
        name: "carListItem",
      props:{
          product:Object
      },
      components:{
        CheckBut
      },
      methods:{
        choseProduct(){
          this.$store.commit({
            type:'setCheckedState',
            obj:this.product,
            checked:!this.product.checked
          })
       // this.$store.commit('changeCheckedState',)
        }
      }
    }
</script>

<style scoped>
  .car-list-item{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 5% 0;
    border-bottom: 1px #ddd solid;
    justify-content:space-around;
  }
  .car-check{
    width:8%;
  }
  .car-product{
    width: 90%;
    display: flex;
    justify-content: space-around;
  }
  .car-product-img{
    width:20%;
    height:100px;
    border-radius: 8px;
    overflow: hidden;
  }
  .car-product-img img{
    height: 100%;
    width: auto;
    margin: 0 auto;
  }
  .car-product-msg{
    width: 72%;
    position: relative;
  }
  .car-product-title,.car-product-desc{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .car-product-title{
    font-size: 14px;
    color: #444;
    margin-bottom:2%;
  }
  .car-product-desc{
    color: var(--light_text_color);
    font-size: 12px;
  }
  .car-product-msg-bottom{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content:space-between;
  }
  .car-product-price{
    font-size: 14px;
    color: var(--base_color_deep);
  }
  .car-product-count{
    color: #444;
    font-size: 12px;
  }
.item-check-but{
  margin: 44px auto;
}
</style>
