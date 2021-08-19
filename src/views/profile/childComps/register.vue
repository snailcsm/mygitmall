<template>
  <div id="register">
    <nav-bar class="register-navbar">
      <a class="back-but" @click="backClick" slot="left"><span class="iconfont icon-back"></span></a>
      <div class="register-title" slot="center">用户注册</div>
    </nav-bar>
    <div class="info-box">
      <text-info :inputObj="['用户名','text','用户昵称和登录名']" ref="nickname" @outPutValue="dealNickname"></text-info>
      <text-info :inputObj="['手机号码','tel','输入常用手机号码']" ref="number" @outPutValue="dealNumber"></text-info>
      <text-info :inputObj="['邮箱','email','@输入正确格式的邮箱']" ref="email" @outPutValue="dealEmail"></text-info>
      <text-info :inputObj="['设置密码','password','密码不少于6位数字']" ref="password" @outPutValue="dealPassword"></text-info>
      <text-info :inputObj="['确认密码','password','请再次输入密码']" ref="rPassword" @outPutValue="dealRpassword"></text-info>
      <a id="registerBut" @click="submit">点击注册</a>
    </div>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TextInfo from "components/common/info/textInfo";

  export default {
    name: "register",
    components: {TextInfo, NavBar},
    data() {
      return {
        user:{
          nickname:'',
          number:'',
          email:'',
          password:'',
          repassword:''
        },
        canClick:false
       /* nickname: {
          title: '用户名',
          type: '用户名',
          placeholder: '用户昵称和登录名',
        },
        number: {
          title: '手机号码',
          type: 'tel',
          placeholder: '输入常用手机号码',
        },
        email: {
          title: '邮箱',
          type: 'email',
          placeholder: '@输入正确格式的邮箱',
        },
        password: {
          title: '设置密码',
          type: 'password',
          placeholder: '密码不少于6位数字',
        },
        rPassword: {
          title: '确认密码',
          type: 'password',
          placeholder: '请再次输入密码',
        }*/
      }
    },
    methods: {
      backClick() {
        this.$router.back();
      },
      dealNickname(value){
        this.user.nickname=value;
      },
      dealNumber(value){
        this.user.number=value;
      },
      dealEmail(value){
        this.user.email=value;
      },
      dealPassword(value){
        if(value.length<6){
          this.$Toast.show('密码至少要为6位',2e3);
          return;
        }
        this.user.password=value;
      },
      dealRpassword(value){
        if(this.user.password!=value){
          this.$Toast.show('两次输入的密码不一致，请重新输入',2e3);
          this.$refs.rPassword.infoValue='';
          return;
        }
        this.user.repassword=value;
        this.canClick=true;
      },
      submit(){
        if(!this.canClick) {
          this.$Toast.show('请先完善信息',3e3);
          return;
        }
        if(this.user.nickname==""||this.user.number==""||this.user.email==""||this.user.password==""||this.user.repassword==""){
          this.$Toast.show('注册信息不能为空',3e3);
          return;
        }
        const numberRule= /^[1]+[3,4,5,6,7,8,9]+\d{9}$/;
        if(this.user.number.match(numberRule)==null){
          this.$Toast.show('电话号码有误',2e3);
          return;
        }
        const emailRule=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if(this.user.email.match(emailRule)==null){
          this.$Toast.show('邮箱有误',2e3);
          return;
        }
        this.$store.dispatch('register',this.user).then((res)=>{
          this.$Toast.show(res,2e3);
          setTimeout(()=>{
            this.$router.push({name: '登录页'});//路由跳转方式
          },2e3)

        })
      }


    }
  }
</script>

<style scoped>

  .register-navbar {
    background: var(--base_color_deep);
  }



  .register-title {
    color: #fff;
    text-align: center;
    letter-spacing: 6px;
  }


  #registerBut{
    display: block;
    width: 80%;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: var(--base_color_deep);
    color: #fff;
    margin: 10% auto;
    border-radius: 6px;
  }
</style>
<style>
  .info-box {
    width: 70%;
    margin: 10% auto;
  }
  .back-but {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 44px;
    color: #fff;
  }

  .back-but .iconfont {
    font-size: 20px;
  }
</style>
