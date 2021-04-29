<template>
  <div id="app">
    <router-view></router-view>
    <my-tab-bar></my-tab-bar>
  </div>
</template>

<script>
  import MyTabBar from 'components/content/mytabbar/MyTabBar'
  export default {
    name: 'App',
    components:{
      MyTabBar
    }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
