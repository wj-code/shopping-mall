<template>
  <div class="goods-item">
    <img :src="goodsItem.url" @click="handler('previewImg')" @load="imagesLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price" @click="handler('checkPrice')">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.collect}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type:Object,
        default() {
          return {}
        }
      }
    },
    methods:{
      handler(event){
        this.$emit(event, {id: 1})
      },
      imagesLoad(){
        //console.log("图片加载了");
        this.$bus.$emit("imageLoad");
      }
  }
  }
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 45px;
    width: 48%;
    margin-bottom: 10px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align:left;
    padding-left: 5px;
    margin: 0 0 5px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: "";
    position: absolute;
    left: -14px;
    width: 14px;
    height: 14px;
    color: #5bc0de;
    background: url("~assets/img/common/collect.svg") no-repeat;
    background-size: 100% 100%;
    vertical-align: middle;
  }
</style>
