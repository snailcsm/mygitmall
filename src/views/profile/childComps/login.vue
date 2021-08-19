<template>
<div id="login">
  <nav-bar class="login-navbar">
    <a class="back-but" @click="backClick" slot="left"><span class="iconfont icon-back"></span></a>
    <div class="login-title" slot="center">用户登录</div>

  </nav-bar>
  <div class="info-box">
    <text-info :inputObj="['用户名','text','用户名或电话']" ref="userName" @outPutValue="dealUserName"></text-info>
    <text-info :inputObj="['密码','password','']" ref="userName" @outPutValue="dealUserPassword"></text-info>
    <a id="loginBut" @click="toLogin">点击登录</a>
  </div>
</div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TextInfo from "components/common/info/textInfo";

    export default {
        name: "login",
      components:{
        TextInfo,
        NavBar
      },
      data(){
          return{
            loginMessage:{
              userName:'',
              userPassword:''
            }
          }
      },
      methods:{
        backClick(){
          this.$router.back();
        },
        dealUserName(value){
          this.loginMessage.userName=value;
        },
        dealUserPassword(value){
          this.loginMessage.userPassword=value;
        },
        toLogin(){
          if(this.loginMessage.userName==""||this.loginMessage.userPassword==""){
            this.$Toast.show('登录信息不能为空',2e3);
            return;
          }
          const userMessage=this.$store.state.user;
          if(this.loginMessage.userName!=userMessage.nickname&&this.loginMessage.userName!=userMessage.number){
            this.$Toast.show('用户名不存在',2e3);
            return;
          }
          if(this.loginMessage.userPassword!=userMessage.password){
            this.$Toast.show('密码错误',2e3);
            return;
          }
          this.$router.replace('/profile')
        }
      }
    }
</script>

<style scoped>
.login-navbar{
  background: var(--base_color_deep);
  color: #fff;
}
  .login-title{
    text-align: center;
  }
  #loginBut{
    display: block;
    width: 80%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #42b983;
    color: #fff;
    margin: 10% auto;
    border-radius: 6px;
  }
</style>
