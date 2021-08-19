import {request} from "network/request";
import {NewRequest} from "network/newRequest";

export function getHomeData() {
return request({
  url:'/home/multidata'
})
}

export function getHomeGoods(type,page) {
  return NewRequest({
    url:'/home/data',
    params:{
      type,page
    }
  })
}
