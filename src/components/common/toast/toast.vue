<template>
    <div id="toast" v-show="isShow" v-html="message">{{message}}</div>
</template>

<script>
    export default {
        name: "toast",
      data(){
          return{
            message:"",
            isShow:false
          }
      },
      methods:{
          show(msg='error',duration=3e3){
            this.message=msg;
            this.isShow=true;
            setTimeout(()=>{
              this.isShow=false;
              this.message="";
            },duration)
          }
      }
    }
</script>

<style scoped>
#toast{
  position: fixed;
  top:50%;
  left: 50%;
  background: rgba(0,0,0,0.8);
  color: #ffffff;
  padding: 6px 10px;
  transform: translate(-50%,-50%);
  z-index: 999;
  width: 60%;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: center;
}
</style>
