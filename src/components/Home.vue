<template>
  <home-layout class="hello">
    <img class="index-img" src="@/assets/xiamu.jpg">
  </home-layout>
</template>

<script>
import HomeLayout from '../layout/HomeLayout.vue'
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  components: {
    HomeLayout,
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-img {
  width: 100%;
  height: 100%;
  /* width: 900px;
  height: 500px; */
}
</style>
