<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" @onScroll="contentScroll" @pullingUp="loadMore">
      <home-swiper :slideshowList="slideshowList"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <featyre-view></featyre-view>
      <tab-control :titles='["流行","新款","精选"]' class="tab-control" @updateGoodsType="updateGoodsType"></tab-control>
      <goods-list-item :goods="this.goods[goodsType].list"  ></goods-list-item>
    </scroll>
    <back-top @click.native="btnBackTop" v-show="isShow"></back-top>
  </div>
</template>
<script>
  import {getHomeMultidata,getProductData} from 'network/home';
  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabcontrol/TabControl';
  import GoodsListItem from 'components/content/goods/GoodsList';
  import Scroll from 'components/common/scrool/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import HomeSwiper from './childcomponens/HomeSwiper';
  import RecommendView from './childcomponens/RecommendView';
  import FeatyreView from './childcomponens/FeatyreView';


  export default {
    name: "Home",
    data() {
      return {
        slideshowList:[
          {
            url:require('assets/img/home/banner1.jpg'),
            link:'https://www.baidu.com'
          },
          {
            url:require('assets/img/home/banner2.jpg'),
            link:'https://www.bilibili.com/'
          },
          {
            url:require('assets/img/home/banner3.jpg'),
            link:'https://www.bilibili.com/'
          }
          ],
        recommends:[
          {
            url:'https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/170989/29/20242/137147/6080ed9bE36d6be46/3a94927bad286b95.jpg.webp',
            title:'正牌男装'
          },
          {
            url:'https://img14.360buyimg.com/seckillcms/s280x280_jfs/t1/175176/16/5798/192320/6080f379E58ea6c71/c0c543b0772f1225.jpg.webp',
            title:'特价水果'
          },
          {
            url:'https://img13.360buyimg.com/seckillcms/s280x280_jfs/t1/161735/7/17310/192971/606fd3eeE34d1f421/8a3a6dc39e527268.jpg.webp',
            title:'马克笔'
          }
        ],
        //商品数据
        goods:{
          pop:{page:0,list:[
              {
                url:'https://img10.360buyimg.com/babel/s320x320_jfs/t1/179238/19/126/242288/607f0295Ed7b099e9/723ca2586d77b6a2.jpg!cc_320x320.webp',
                price:'98.00',
                title:'OSA欧莎白色叠穿衬衫女春装2021年新款设计感小众OL职业衬衣上衣',
                collect:9
              },
              {
                url:' https://img12.360buyimg.com/babel/s320x320_jfs/t1/167030/18/20476/205028/6083ba70Edd7565cc/0663d592be442c2a.jpg!cc_320x320.webp',
                price:'339.00',
                title:'BANANA BABY2021春季新款设计感小众复古针织拼接长袖衬衫',
                collect:30
              },
              {
                url:'https://img10.360buyimg.com/babel/s320x320_jfs/t1/179238/19/126/242288/607f0295Ed7b099e9/723ca2586d77b6a2.jpg!cc_320x320.webp',
                price:'98.00',
                title:'OSA欧莎白色叠穿衬衫女春装2021年新款设计感小众OL职业衬衣上衣',
                collect:230
              },
              {
                url:'https://img30.360buyimg.com/babel/s320x320_jfs/t1/161509/7/20479/371110/60822680E0946f8cc/f872c4c9896194fd.jpg!cc_320x320.webp',
                price:'199.00',
                title:'【2021春新品】梵希蔓蝴蝶结花衬衫女复古港味雪纺长袖衬衣设计感小众春季上衣',
                collect:100
              },
              {
                url:' https://img12.360buyimg.com/babel/s320x320_jfs/t1/167030/18/20476/205028/6083ba70Edd7565cc/0663d592be442c2a.jpg!cc_320x320.webp',
                price:'339.00',
                title:'BANANA BABY2021春季新款设计感小众复古针织拼接长袖衬衫',
                collect:30
              },
            ]},
          new:{page:0,list:[
              {
                url:'https://img11.360buyimg.com/n7/jfs/t1/182877/9/642/145069/6082fe0fE9f2cc363/d1c4b48f1a8898bf.jpg',
                price:'339.00',
                title:'Amii极简圆领撞色拼接文艺复兴印花连衣裙2021夏季新款T恤裙子 黑色 170/92A/XL',
                collect:30
              },
              {
                url:'https://img11.360buyimg.com/n7/jfs/t1/183858/14/606/168363/6083007aE96aeb0e7/ed2382f35da32b7d.jpg',
                price:'579.00',
                title:'ONLY2020夏季新款刺绣花边装饰脚口设计连体裤女120278502 E05橄榄灰Olive 175/76A/XLR',
                collect:67
              },
              {
                url:'https://img11.360buyimg.com/n7/jfs/t1/181891/18/757/383005/6083bcb5E8d608ac8/501cefd484638c7f.jpg',
                price:'979.00',
                title:'哥弟2021春夏新款法式V领绑带印花衬衫松紧腰百褶纱裙套装8200060 粉蓝-衬衫 L(4码)',
                collect:67
              },
              {
                url:'https://img14.360buyimg.com/n7/jfs/t1/182291/8/658/223968/6082f422E5dec0745/eb35774a00a13bbd.jpg',
                price:'1000.00',
                title:'JUZUI/玖姿2021夏季新款三公里轻运动棉针织不规则抽绳女连衣裙 本白 L',
                collect:67
              }
            ]},
          sell:{page:0,list:[
              {
                url:'https://img11.360buyimg.com/n7/jfs/t1/149213/32/4262/149399/5f25147fE5c7c9e58/065156e08f5b97e7.jpg',
                price:'229.00',
                title:'秦菲 早秋小香风女士长袖波点雪纺衬衫女2020新款设计感小众时尚气质小V领洋气上衣优雅女神范职业衬衣 单件衬衫 XXXXL',
                collect:999
              },
              {
                url:'https://img14.360buyimg.com/n7/jfs/t1/162013/37/20882/218010/6084c45aE2dd9f28c/0651b2dd9169e7fe.jpg',
                price:'129.00',
                title:'闺园衬衫女长袖2021大码女装春季新款韩版修身显瘦时尚衬衣女性感百搭小个子打底印花上衣女潮 图片色GZT01238 L',
                collect:0
              },
              {
                url:'https://img10.360buyimg.com/n7/jfs/t1/168025/24/8237/120880/60374659E57781d33/cb01252ac251a1b9.jpg',
                price:'99.00',
                title:'娅素琪衬衫女2021春秋新款韩版学生洋气雪纺衬衫女长袖衬衫蝴蝶结衬衣上衣潮 杏色 请拍对应尺码',
                collect:230
              }
            ]},
        },
        goodsType:'pop',
        isShow:false
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsListItem,
      Scroll,
      HomeSwiper,
      RecommendView,
      FeatyreView,
      BackTop
    },
    //请求数据 在组件创建好后就请求数据，在created()钩子
    created(){

      /*
      获取轮播图的图片数据
      this.getHomeMultidata();
       */

      /*
      请求商品相关数据
      this.getProductData('pop');
      this.getProductData('new');
      this.getProductData('sell');
       */
    },
    methods:{
      contentScroll(scroll) {
        if(scroll.y < -1000){
          this.isShow = true ;
        }else {
          this.isShow = false ;
        }
      },
      loadMore() {
        this.goods[this.goodsType].list.push(...this.goods['new'].list);
        console.log('上拉加载了');
        this.$refs.scroll.finishPullUp();
      },
      // init() {
      //   this.bs = new BScroll(this.$refs.myscroll, {
      //     probeType: 3,
      //     click: true,
      //     pullUpLoad: true
      //   })
      //   this.bs.on('scroll', (p) => {
      //     console.log(p)
      //   }),
      //     this.bs.on('pullingUp', () => {
      //       this.goods[this.goodsType].list.push(...this.goods['new'].list);
      //       this.bs.finishPullUp();
      //       console.log('上拉加载了');
      //     })
      // },

      /*
       网络请求相关方法
       */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.slideshowList = res;
        })
      },
      getProductData(type){
        const page = this.goods[type].page+1;
        getProductData(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
        })
      },
      updateGoodsType(index){
       switch(index){
         case 0 : {
           this.goodsType = 'pop';
           break
         }
         case 1 :{
           this.goodsType = 'new'
           break ;
         }
         case 2 :{
           this.goodsType = 'sell'
           break ;
         }
       }
      },
      btnBackTop(){
        this.$refs.scroll.bs.scrollTo(0,0,500);
      },
      //防抖动函数
      debounce(func,delay){
        let timer = null ;
        return function (...args) {
          if(timer) {
            clearInterval(timer);
          }
          timer = setTimeout(()=>{
            func.apply(this,args);
          },delay)
        }
      }
    },
    mounted(){
      this.$refs.scroll.init({
        pullUpLoad: true,
        click:true,
        probeType:3
      })
      const refresh = this.debounce(this.$refs.scroll.scrollRefresh,100);
      //获取事件总线的
      this.$bus.$on('imageLoad',() => {
        refresh();
      })
    }
  }
</script>
<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home_nav {
    background-color: var(--color-tint);
    color: #ececec;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
  /*.content {*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*}*/
  .content {
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
