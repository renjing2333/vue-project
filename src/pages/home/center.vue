<template>
    <div>
      子组件：
      <h2>{{inputName}}</h2>
      <ul>
        <li v-for="(item, index) in groceryList" v-bind:key="index">{{item}}</li>
      </ul>
    </div>
</template>

<script setup>
export default {
  props: {
    inputName: String,
    groceryList: Array,
  },
  data() {
    return {
      // groceryList: [
      //     { id: 0, text: '蔬菜11' },
      //     { id: 1, text: '奶酪22' },
      //     { id: 2, text: '随便其它什么人吃的东西33' }
      //   ],
    }
  },
  components: {},
  mounted() {
    // console.log(this.groceryList, '999');
    },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

</style>