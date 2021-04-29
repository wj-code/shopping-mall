<template>
  <div class="good-list">
    <goods-list-item
                    v-for="(item,index) in goods"
                    :goods-item="item" class="item"  :key="index" @previewImg="previewImg">
    </goods-list-item>

  </div>
</template>
<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      previewImg(data){
        console.log("我是图片预览", data);
      }
    }
  }
</script>

<style scoped>
  .good-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
  }

</style>
