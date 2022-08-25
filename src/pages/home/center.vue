<template>
    <div>
      子组件：
      <h2>{{inputName}}</h2>
      <ul>
        <li v-for="(item, index) in groceryList" v-bind:key="index">{{item}}</li>
      </ul>
      <p>Computed reversed message: "{{ reversedMessage() }}"</p>
      <!-- 走马灯 -->
      <el-carousel class="carousel" arrow="always">
        <el-carousel-item v-for="(item, index) in images" :key="index" autoplay>
          <img class="carousel-img" :src="item.url" @click="getBigImg(index)">
        </el-carousel-item>
      </el-carousel>
      <!-- 大预览图 -->
      <div :class="preImg">
        <img class="pre-img-big" :src=pre_imgUrl @click="close()">
      </div>
      <button @click="btn">点击</button>
    </div>
</template>

<script setup>
// import { debounce } from "../../utils/time";
const debounce = (fn, wait) => {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
        fn();
    }, wait)
  }
}

// const throttle = (fn, threshhold) => {
//     let start = new Date();
//     return function() {
//         let now = new Date() - 0 ;
//         if (now - start >= threshhold) {
//             fn();
//             start = now;
//         }
//     }
// }

export default {
  props: {
    inputName: String,
    groceryList: Array,
  },
  data() {
    return {
      images: [
            {url: require("../../assets/ganfan.jpg")},
            {url: require("../../assets/5.jpg")},
            {url: require("../../assets/6.jpg")},
            {url: require("../../assets/logo.png")},
            {url: require("../../assets/xiamu.jpg")},
          ],
      pre_imgUrl: '',
      preImg: 'pre-img-none',
      message: 'Hello',
      // timer: 0,
    }
  },
  computed: {},
  mounted() {
    console.log(666);
},
  methods: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    getBigImg(index) {
      this.pre_imgUrl = this.images[index].url;
      this.preImg = 'pre-img-block';
    },
    close() {
      this.preImg = 'pre-img-none';
    },

    // btn: throttle(()=> {
    //   console.log('123456');
    // }, 500)

    btn: debounce(()=> {
      console.log('123456');
    }, 500)

  }
}
</script>

<style>
.pre-img-big {
  width: 100%;
  height: 100%;
}
.pre-img-none {
  display: none;
}
.pre-img-block {
  background: #FFF;
  position: absolute;
  width: 800px;
  height: 600px;
  bottom: -120px;
  left: 300px;
  z-index: 100;
}
.carousel-img {
  width: 100%;
  height: 100%;
}
.carousel {
  width: 400px;
  height: 300px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>