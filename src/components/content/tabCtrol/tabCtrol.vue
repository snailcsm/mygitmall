<template>
    <div class="tab-ctrol" >
      <a  v-for="(item,index) in tabList"
          :key="index"
          :class="{'tab-active':index==clickedIndex}"
          @click="setClickIndex(index)">
        <span>{{item}}</span>
      </a>
    </div>
</template>

<script>
    export default {
        name: "tabCtrol",
      props:{
        tabList:{
          type:Array,
          default(){
            return []
          }
        }
      },
      data(){
          return{
          clickedIndex:0,
          }
      },
      methods:{
        setClickIndex(index){
         this.clickedIndex=index;
         this.$emit('getTabId',index);
        }
      }
    }
</script>

<style scoped>
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
