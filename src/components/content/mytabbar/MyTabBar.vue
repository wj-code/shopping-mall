<template>
  <div>
    <tab-bar>
      <tab-bar-itme link="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tab-bar-itme>
      <tab-bar-itme link="/class">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tab-bar-itme>
      <tab-bar-itme link="car">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg">
        <img slot="item-icon-active" src="~assets/assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tab-bar-itme>
      <tab-bar-itme link="profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tab-bar-itme>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from './tabbar/TabBar'
  import TabBarItme from './tabbar/TabBarItem'
  export default {
    name: "MyTabBar",
    components:{
      TabBar,
      TabBarItme
    }
  }
</script>

<style scoped>

</style>
