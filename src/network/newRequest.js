import vue from 'vue'
import axios from "axios";

vue.prototype.$http = axios;

export  function NewRequest(config) {
  const instance=axios.create({
    baseURL:"http://152.136.185.210:7878/api/m5",
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
