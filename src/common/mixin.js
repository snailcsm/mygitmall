import{debounce} from "./utils";
import ScrollTop from "components/common/scroll/scrollTop"

export const itemListener={
  data(){
   return{
    itemListener:null,
     newRefresh:null
   }
  },
mounted(){
  //1、监听goods中图片加载完成
  this.newRefresh=debounce(this.$refs.Scroll.refresh,500);//调用防抖函数，每500毫秒执行一次刷新
  this.itemListener=()=>{
    this.newRefresh();
  };
 this.$bus.$on('imageLoad',this.itemListener);
}
}

//返回顶部的混入
export const scrollTopMixin={
    components:{
      ScrollTop
    },
    data(){
      return{
        isScrollTopShow: false,
      }
    },
    methods:{
    clickScrollTop() {
      this.$refs.Scroll.scrollToPosition(0, 0, 600);//scrollToPosition是scroll中封装的方法
    },
    showScrollTopDemo(position){//控制组件显隐的方法
      this.isScrollTopShow = (-position) > 1000

    }
  }
}
