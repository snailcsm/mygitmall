//封装网络请求
import vue from 'vue'
import axios from "axios";

//vue.use(axios);
vue.prototype.$http = axios;

export  function request(config) {
const instance=axios.create({
  baseURL:"http://123.207.32.32:8000",
  timeout:5000
})

  instance.interceptors.request.use(config=>{
    //请求拦截
    return config;
  },err=>{
    console.log(err)
  })

  instance.interceptors.response.use(res=>{
    //响应拦截
    return res
  },err=>{
    console.log(err)
  })

  return instance(config);
}


