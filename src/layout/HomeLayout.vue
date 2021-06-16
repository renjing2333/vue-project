<template>
    <div>
        <header>
          <el-menu
          :default-active="index"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          >
        <el-menu-item index="home">个人中心</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项3</template>
                <el-menu-item index="child">child列表</el-menu-item>
              </el-submenu>
        </el-submenu>
        <el-menu-item index="table">my table</el-menu-item>
        <el-menu-item index="practice">my practice</el-menu-item>
        </el-menu>
        </header>
        <slot></slot>
    </div>
</template>

<script>
    export default {
      props: {
        index: {
            type: String,
            default: 'home'
        }
    },
        data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
        },
        methods: {
          handleSelect(event) {
            console.log(event, 'event');
            this.$router.push({
                name: event
            })
        }
        // handleSelect(key, keyPath) {
        //     console.log(key, keyPath);
        // }
        }
    }
</script>

<style></style>
