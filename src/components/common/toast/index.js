import Toast from "./toast"

const toastObj={}

toastObj.install=function (Vue) {
//1、创建组件构造器
  const toastConstructor=Vue.extend(Toast);
// 2、根据组件构造器，用new的方法创建一个组件对象

  const toast=new toastConstructor();
 // 3、将组件对象手动挂载在一个元素上，通过mount挂载
  toast.$mount(document.createElement('div'));
 // 4、toast.$el对应的就是div
  document.body.appendChild(toast.$el);
  Vue.prototype.$Toast=toast;//将toast.vue作为对象赋值给$toast
  //注意如果是小写的名字$toast,与vue自带的方法好像重名了，会出错
}
export default toastObj
