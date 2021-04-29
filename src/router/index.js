import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('pages/home/Home')
const Car = () => import('pages/car/Car')
const ProFile = () => import('pages/profile/ProFile')
const CateGroy = () => import('pages/category/CateGroy')
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    meta:{
      title:'首页'
    },
    component: Home,
  },
  {
    path:'/car',
    meta:{
      title:'购物车'
    },
    component:Car
  },
  {
    path:'/profile',
    meta:{
      title:'我的'
    },
    component:ProFile
  },
  {
    path:'/categroy',
    meta:{
      title:'分类'
    },
    component:CateGroy
  }
]

const router = new Router({
  routes,
  mode:'history'
})
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title;
  next();
})
export default router
