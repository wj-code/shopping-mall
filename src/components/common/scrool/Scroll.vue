<template>
  <div class="swaiper" ref="myscroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  //引用第三方组件库
  import BScroll from '@better-scroll/core' ;
  import  Pullup from '@better-scroll/pull-up' ;

  BScroll.use(Pullup) ;
  export default {
    name: "Scroll",
    data(){
      return {
        bs:null,
      }
    },
    methods: {
      init(config) {
        this.bs = new BScroll(this.$refs.myscroll, config);
        console.log(this.bs);
        //监听滚动
        if(config.probeType === 2 || config.probeType === 3){
          this.bs.on("scroll",(onScroll) => {
            this.$emit('onScroll',onScroll);
          });
        }
        //上拉加载更多
        if(config.pullUpLoad === true){
          this.bs.on("pullingUp",() =>{
            this.$emit("pullingUp");
          })
        }
        return this.bs ;
      },
      scrollTio(x,t,time=300){
        this.bs.scrollTo(x,y,time);
      },
      finishPullUp(){
        this.bs.finishPullUp();
      },
      scrollRefresh(){
        console.log("刷新了");
        this.bs.refresh();
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>
