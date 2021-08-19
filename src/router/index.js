import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import("views/home/home")
const Product=()=>import("views/product/product")
const Car=()=>import("views/car/car")
const Profile=()=>import("views/profile/profile")
const Detail=()=>import("views/detail/detail")
const Register=()=>import("views/profile/childComps/register")
const Login=()=>import("views/profile/childComps/login")

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: '首页',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/product',
      name: '产品',
      component: Product
    },
    {
      path: '/car',
      name: '购物车',
      component: Car
    },
    {
      path: '/profile',
      name: '个人中心',
      component: Profile
    },
    {
      path: '/detail',
      name: '详情页',
      component: Detail
    },
    {
      path: '/profile/childComps/',
      name: '注册页',
      component: Register
    },
    {
      path: '/profile/childComps/',
      name: '登录页',
      component: Login
    },
  ],
  //mode:'history',
})
