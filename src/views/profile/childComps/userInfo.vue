<template>
    <div id="userInfo">
      <div class="user-photo">
        <img src="~assets/imgs/profile/head.png" ref="userHeadImg">
      </div>
      <div class="user-massage">
        <a class="to-operation" v-if="!isLogin" @click="toRegister">
          <p>登录/注册</p>
           <div class="no-number-tips"><span class="iconfont icon-shouji"></span>暂无绑定手机号</div>
          <span class="iconfont icon-right to-operation-tips"></span>
        </a>
        <div class="user-message" v-else>
          <p class="nickname">{{userMessage.nickname}}</p>
          <p class="usernumber"><span class="iconfont icon-shouji"></span>{{userMessage.number}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
      data(){
          return{
            isLogin:false,
            userMessage:{
              nickname:'',
              number:'',
            }
          }
      },
      activated() {
          if(this.$store.state.user.nickname!=''){
            this.isLogin=true;
            const thisUser=this.$store.state.user;
            this.userMessage.nickname=thisUser.nickname;
            this.userMessage.number=thisUser.number;
           if(thisUser.headImage!=""){
             this.$refs.userHeadImg.src=thisUser.headImage;
           }
          }
      },
      methods:{
        toRegister(){
          this.$router.push('/profile/childComps/')
        }
      }
    }
</script>

<style scoped>
#userInfo{
  width: 90%;
  background: var(--base_color_deep);
  padding: 6% 5%;
  display: flex;
}
.user-photo{
  width: 60px;
  margin-right: 6%;
  border-radius: 50%;
  overflow: hidden;
}
  .user-massage{
    flex: 1;
    color: #fff;
    position: relative;
  }
  .no-number-tips{
    font-size: 12px;
    line-height: 30px;
  }
.to-operation-tips{
  position: absolute;
  top:50%;
  right: 0;
  transform: translateY(-50%);
}
  .nickname{
    font-size: 16px;
    line-height: 36px;
  }
  .usernumber{
    font-size: 14px;

  }
  .usernumber .iconfont{
    font-size: 18px;
    margin-right:3px;
  }
</style>
