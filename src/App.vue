<template>
  <div id="app">
    <!-- <el-row class="el-rowList">
      <router-link to='/table'><el-button type="primary" round>one</el-button></router-link>
      <router-link to='/practice'><el-button type="primary" round>two</el-button></router-link>
      <el-button type="primary" round>three</el-button>
      <el-button type="primary" round>four</el-button>
      <el-button type="primary" round>five</el-button>
    </el-row> -->
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-rowList {
    margin-bottom: 30px;
  }

  .router-link-active {
  text-decoration: none;
  }
</style>