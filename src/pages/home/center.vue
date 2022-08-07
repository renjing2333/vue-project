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
// import { time } from "console";
import { throttle } from "../../utils/time";

  // const  debounce = (fn, wait) => {
  //     let timer;
  //     return function() {
  //       if(timer) {
  //         clearTimeout(timer);
  //       }
  //       timer = setTimeout(() => {
  //         fn();
  //       }, wait)
  //     }
  //   }

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
  computed: {
    // 计算属性的 getter
    // reversedMessage: function () {
    //   // `this` 指向 vm 实例
    //   return this.message.split('').reverse().join('')
    // }
  },
  components: {},
  mounted() {
    // console.log(this.groceryList, '999');
    // let timeout = null;
    // return function() {
    //   clearTimeout(timeout);
    //   timeout = setTimeout(()=>{
    //     fn.apply(this, arguments);
    //   }, 1000)
    // }
    let data = [[1,1,1], [2,2,2], [3,3,3, [3,4,5, [4,5,5]]], 4, 5, 6, 8] ;
    // let res = [].concat.apply([], data)
    // let res = [].concat(...data);
    // let data = [1, 2, 3, [4, 5, 6], 7, ];
    let res = data.flat(Infinity);
    let data2 = [1, 2, 3, 5, [6, 7, 8]];
    // let res2 = [].concat.apply([], data2);
    let res2 = [].concat(...data2)
    console.log(res2, 'res2');
    // let ret = data.flatMap(item => {
    //   if (item instanceof Array) {
    //     return [...item]
    //   } else {
    //     return 100 * item;
    //   }
    // })
    // console.log(ret, '8888');
    console.log(res, '123456789');
    
    // data.forEach((item)=> {
    //   item.forEach((item) => {
    //     res.push(item);
    //   })
    // });
    
    },
  methods: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
    getBigImg(index) {
      // console.log(index, this.images[index].url);
      this.pre_imgUrl = this.images[index].url;
      this.preImg = 'pre-img-block';
    },
    close() {
      this.preImg = 'pre-img-none';
    },

    // btn: debounce(()=> {
    //   console.log('999');
    // }, 1000),

    btn: throttle(()=> {
      console.log('123456');
    }, 2000)





    // btn(){
    //   this.debounce(() => {
    //     console.log(666);
    //   }, 1000)()
    // },

    // btn: debounce(()=>{
    //     console.log('666');
    // }, 2000),

    // btn: throttle(()=>{
    //     console.log('666');
    // }),

    // debounce(func, wait){
    //   let timer = 0;
    //   const that = this;
    //   return function() {
    //     if (that.timer) {
    //       clearTimeout(that.timer);
    //     }
    //     that.timer = setTimeout(() => {
    //       func();
    //     }, wait)
    //   }
    // }
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