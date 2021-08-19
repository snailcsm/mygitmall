<template>
    <div id="userData">
      <div class="user-data-list balance">
        <p><span>{{userData.balance.toFixed(2)}}</span>元</p>
        <p>我的余额</p>
      </div>
      <div class="user-data-list coupon">
        <p><span>{{userData.coupon}}</span>张</p>
        <p>我的优惠券</p>
      </div>
      <div class="user-data-list point">
        <p><span>{{userData.point}}</span>分</p>
        <p>我的积分</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "userProperty",
      props:{
          userData:Object
      }

    }
</script>

<style scoped>
#userData{
  background: #fff;
  padding: 5% 0;
  width: 100%;
  display: flex;
  margin-bottom: 5px;
}
  .user-data-list{
    flex: 1;
    color: var(--base-text-color);
    font-size: 12px;
    text-align: center;
  }
.user-data-list span{
  font-size: 20px;
  color: var(--base_color_deep);
  margin-right: 4px;
}
</style>
