export default {
  addCarList(context,payload){
   return new Promise((resolve)=>{
     let oldProduct=null;
     context.state.carList.forEach((item)=>{
       if(item.iid==payload.iid){
         oldProduct=item;
       }
     })
     if(oldProduct){
       context.commit('addProductCount',oldProduct);
       resolve("购物车里的货物+1");
     }else {
       context.commit('addCarProduct',payload);
       resolve("添加购物车成功");
     }
   })
  },
  register(context,payload){//注册
    return new Promise(resolve =>{
     context.commit('userRegister',payload)
      resolve("注册成功");
    } )
  }

}
