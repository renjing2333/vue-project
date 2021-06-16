<template>
  <home-layout >
    <img class="index-img" src="@/assets/xiamu.jpg">
  </home-layout>
</template>

<script>
import HomeLayout from '../../layout/HomeLayout.vue'
export default {
    created() {
        console.log('default组件');
    },
    components: {
        HomeLayout,
    },
}
</script>

<style>
.index-img {
  width: 100%;
  height: 100%;
}
</style>