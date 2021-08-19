<template>
  <div class="info-list">
    <label>{{inputObj[0]}}</label>
    <input :type="inputObj[1]" :placeholder="inputObj[2]" @blur="outputer" v-model="infoValue"/></div>

</template>

<script>
    export default {
        name: "textInfo",
      props:{
          inputObj:Array
      },
      data(){
          return{
            infoValue:''
          }
      },
      methods:{
        outputer(){
          if(this.infoValue==""){
           // this.$Toast.show(this.inputObj[0]+'不能为空',2e3);
            return;
          }
          this.$emit('outPutValue',this.infoValue)
        }
      }
    }
</script>

<style scoped>
  input::-webkit-input-placeholder {
    color: #aaa;
    font-size: 12px;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #aaa;
    font-size: 12px;
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #aaa;
    font-size: 12px;
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #aaa;
    font-size: 12px;
  }
.info-list{
  width: 100%;
  border: 1px #ccc solid;
  height: 34px;
  line-height: 34px;
  border-radius: 5px;
  margin-bottom: 5%;
  display: flex;
  overflow: hidden;
}
 label{
   display: block;
   width: 22%;
   height: 100%;
   border-right: 1px #ccc solid;
   font-size: 14px;
   padding: 0 3%;
   text-align: justify;
   color: var(--base-text-color);
 }
  label::after{
    width: 100%;
    display: inline-block;
    content: '';
  }
  input{
    flex: 1;
    padding-left: 5%;
    outline: none;
    font-size: 14px;
  }
</style>
