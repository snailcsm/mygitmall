<template>
  <div class="recommond-view">
    <a v-for="item in recomList" :href="item.link" :data-id="item.sort" :key="item.index">
      <img :src="item.image"/>
      <p>{{item.title}}</p>
    </a>
  </div>
</template>

<script>
    export default {
        name: "recommendView",
      props:{
          recomList:{
            type:Array,
            default(){
              return [];
            }
          }
      }
    }
</script>

<style scoped>
.recommond-view{
  display:flex;
  with:100%;
  justify-content: space-around;
  padding: 5% 0;
  border-bottom: 1px #eee solid;
}
  .recommond-view a{
    display:block;
    width: 24%;
  }
.recommond-view a p{
  color:#444;
  width: 100%;
  text-align: center;
  font-size: 12px;
line-height: 30px;
}
.recommond-view a img{
  width:90%;
  margin: 0 auto;
}
</style>
