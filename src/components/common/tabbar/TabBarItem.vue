<template>
  <div class="tab_list">
    <div class="tab_icon">
      <slot name="tab-icon-active" v-if="isActive"></slot>
      <slot name="tab-icon" v-else></slot>
    </div>
  <div class="tab_text" :class={active:isActive}><slot name="tab-text" ></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
          path:String
      },
     data(){
        return{
        // isActive:true
        }
     },
      computed:{
          isActive(){
            return  this.$route.path.indexOf(this.path)!=-1
          }
      }
    }
</script>

<style scoped>
  .tab_icon{
    margin-top: 5px;
  }
  .tab_icon img{
    width: 24px;
    height: 24px;
    margin: 0 auto;
    display: block;
  }

  .tab_text{
    font-size: 12px;
    text-align: center;
    color:#707070 ;
  }
  .active{
color:var(--base_color_light);
  }
</style>
