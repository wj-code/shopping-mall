<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <div>
        <img :src="item.url">
      </div>
      <p>{{item.title}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return []
        }
      }
    },

  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    border-bottom: 10px solid #eee;

  }
  .recommend-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .recommend-item >div{
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
  }
  .recommend-item > div img {
    width: 100%;
    height: 100%;
  }

</style>
