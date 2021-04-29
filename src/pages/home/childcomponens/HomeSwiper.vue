<template>
  <div class="swiper-container">
    <swiper ref="mySwiper" :options="swiperOption" @someSwiperEvent="callback">
      <swiper-slide v-for="item in slideshowList" :key="item.url">
        <a :href="item.link"><img :src="item.url"></a>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="cor">
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  //引入插件
  import 'swiper/dist/css/swiper.css';
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  export default {
    name: "HomeSwiper",
    props:{
      slideshowList:{
        type:Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        //初始化swiper的一些配置
        swiperOption: {
          loop : true,
          autoplay: {
            delay: 2000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    },
    computed: {
      myswiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components:{
      swiper,
      swiperSlide
    },
    mounted() {
      console.log('Current Swiper instance object', this.myswiper)
      this.myswiper.slideTo(3, 1000, false)
    },
    methods: {
      callback() {

      }
    }
  }
</script>

<style >
  .swiper-container {
    position: relative;
    width: 100%;
    height: 300px;
  }
  slideshow-box img {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 0;
    height: 40px;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }
  .swiper-pagination-bullet-active {
    background:var(--color-tint)
  }
</style>
