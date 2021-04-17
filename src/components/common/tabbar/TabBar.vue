<template>
  <div>
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>
<script>

  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabbar {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
  }

</style>
