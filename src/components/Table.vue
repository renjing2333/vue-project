<template>
    <div>
        <h1>this is table</h1>
        <el-button type="primary" round @click="next()">go to next component</el-button>
    </div>
</template>

<script>
    export default {
        methods: {
            next() {
                this.$router.push('/table/next')
            }
        }
    }
</script>

<style>

</style>