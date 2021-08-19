<template>
  <div id="profile">
    <!--用户信息-->
    <user-info></user-info>
    <!--用户数据-->
    <user-data :userData="userDatas"></user-data>
    <!--个人链接-->
    <user-link></user-link>
  </div>

</template>

<script>
  import UserInfo from "./childComps/userInfo";
  import UserData from "./childComps/userProperty";
  import UserLink from "./childComps/userLink";

  export default {
    name: "Profile",
    components: {
      UserData,
      UserInfo,
      UserLink
    },
    data(){
      return{
        userDatas:{
          balance:0.00,
          coupon:0,
          point:0
        }
      }
    },
    method: {}
  }


</script>

<style scoped>
  #profile {
    background: #eee;
    height: 100vh;
  }

</style>
