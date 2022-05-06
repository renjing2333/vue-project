<template>
  <home-layout>
    <div class="child-header">
      <div>111222</div>
      <div>222222</div>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '../../layout/HomeLayout.vue'
export default {
  components: {
    HomeLayout,
  }
}
</script>

<style lang="less">
.child-header {
  width: 800px;
  height: 800px;
  background: rgba(154, 205, 50, 0.5);
  padding-top: 10px;
}

.child-header div {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: turquoise;
  background-clip: padding-box;
  padding: 10px;
  margin: 20px;
  // outline: 20px solid tomato;
  outline: 1px solid red;
  outline-offset: 25px;
}
</style>