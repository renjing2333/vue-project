<template>
    <home-layout index="table">
        <h1>this is table</h1>
        <div class="bd">
            <div class="main">Main</div>
            <div class="aside left">Left</div>
            <div class="aside right">Right</div>
        </div>
    </home-layout>
</template>

<script>
import HomeLayout from '../../layout/HomeLayout.vue'
    export default {
        methods: {
        },
        components: {
        HomeLayout,
        },
        
    }
</script>

<style>
.table_header {
    margin-top: 500px;
}

.bd {
    height: 65px;
    line-height: 65px;
    text-align: center;
    padding-left: 150px;
    padding-right: 180px;
}

.main {
    float: left;
    width: 100%;
    height: 100%;
    background-color: pink;   
}

.aside {
    position: relative;
    float: left;
    height: 100%;
}

.left {
    left: -150px;
    width: 140px;
    background-color: yellowgreen;
    margin-left: -100%;
}

.right {
    right: -190px;
    width: 180px;
    background-color: yellow;
    margin-left: -180px;
}
</style>