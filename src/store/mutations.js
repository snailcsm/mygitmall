export default {
    addProductCount(state,payload){//往购物车已有商品数量+1
      ++payload.count;
    },
    addCarProduct(state,payload){//往购物车加商品
      payload.checked=false;
      state.carList.push(payload);
    },
    setCheckedState(state,payload){
      payload.obj.checked= payload.checked;
    },
    userRegister(state,payload){
      const user=state.user;
      user.nickname=payload.nickname;
      user.number=payload.number;
      user.email=payload.email;
      user.password=payload.password;
    }
}
