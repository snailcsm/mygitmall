<template>
      <div id="photoFrame" v-if="photoState">
        <a class="close-photo-frame" @click="closePhotoFrame">
          <img src="~assets/imgs/common/close.svg"/></a>
        <img id="photo" :src="photo">
      </div>
</template>

<script>
    export default {
        name: "photoFrame",
      props:{
          photo:String
      },
      data(){
          return{
            photoState:true
          }
      },
      methods:{
        closePhotoFrame(){
         this.$emit('closePhoto')
        }
      }
    }
</script>

<style scoped>
  #photoFrame{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 999;
  }
.close-photo-frame{
  background: #fff;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  position: fixed;
  top: 10px;
  right: 10px;
  overflow: hidden;
  padding: 5px;
}
  .close-photo-frame img{
    width: 14px;
    margin: 8px;
  }
  #photo{
    margin-top:15%;
  }
</style>
