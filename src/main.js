import Vue from 'vue';
import App from './App';
import router from './router';
import store from "./store";

import Toast from "components/common/toast/index";//整个文件夹都导入

Vue.config.productionTip = false
//添加事件总线
Vue.prototype.$bus=new Vue()

//安装toast插件
Vue.use(Toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
