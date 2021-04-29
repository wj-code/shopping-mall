<template>
  <div class="tabcontrol">
    <div class="tabcontrol-item" v-for="(item , index) in titles" :class="{active:index===newIndex}" @click="updataNowIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        newIndex: 0
      }
    },
    methods: {
      updataNowIndex(index) {
        this.newIndex = index ;
        this.$emit('updateGoodsType',index);
      }
    }
  }
</script>

<style scoped>
  .tabcontrol {
    display: flex;
    text-align: center;
    height: 44px;
    line-height: 44px;
    background-color: #fff;
  }
  .tabcontrol-item {
    flex: 1;
  }
  .tabcontrol-item span{
    padding: 5px;
  }
  .active {
    color: var(--color-high-text);
  }
 .active span{
   border-bottom: 3px solid var(--color-tint);
 }
</style>
