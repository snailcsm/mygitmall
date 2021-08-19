import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const state={
  carList:[],
  user: {
    nickname:'',
    number:'',
    email:'',
    password:'',
    headImage:'http://qchd.kmbolaafy.cn/project/dice/imgs/head.jpg',
    point:0,//积分
    balance:0,//余额
    coupon:0,//优惠券
  }
}

const store=new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store;
