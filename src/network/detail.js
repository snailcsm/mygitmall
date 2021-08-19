import{NewRequest} from "./newRequest";
export function getDetailData(iid) {
return NewRequest({
  url:'/detail',
  params:{
    iid
  }
})
}

//请求推荐数据
export function getDetailRecommend() {
  return NewRequest({
    url:'/recommend',
  })
}

export class Goods{
  constructor(itemInfo,columns,service) {
  this.title=itemInfo.title;
  this.desc=itemInfo.desc;
  this.price=itemInfo.price;
  this.realPrice=itemInfo.lowNowPrice;
  this.oldPrice=itemInfo.oldPrice;
  this.discountDesc=itemInfo.discountDesc;
  this.discountBgColor=itemInfo.discountBgColor;
  this.columns=columns;
  this.servive=service;
  }
}

export  class Shop {
  constructor(shopInfo) {
    this.shopLogo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.shopUrl=shopInfo.shopUrl;
    this.score=shopInfo.score;
    this.cFans=shopInfo.cFans;
    this.cGoods=shopInfo.cGoods;
    this.cSells=shopInfo.cSells;
  }
}
