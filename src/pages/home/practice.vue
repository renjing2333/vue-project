<template>
  <home-layout index="practice">
    <div class="home_layout_content">
      <h1>dialog</h1>
      <div class="input_style">
        <el-input
          type="textarea"
          :rows="5"
          placeholder="请输入一段文本"
          v-model="value"
          resize=none
          clearable
        >
        </el-input>
        <el-button type="primary" @click="submit">提交</el-button>
      </div>
      <div class="comments_content">
        <ul v-for="item in content" :key="item.index">
          <el-avatar :size="50" icon="el-icon-cherry"></el-avatar>
          <span>{{item.time}}</span>
          <li class="comment_list">{{item.comment}}</li>
        </ul>
      </div>
    </div>
  </home-layout>
</template>

<script>
import HomeLayout from "../../layout/HomeLayout.vue";
export default {
  created() {
    
  },
  methods: {
    submit() {
      var newobj = {
        name:'11',
        time: Date.parse(new Date()),
        comment: this.value
      }
      if(newobj.comment !== '') {
        this.content.push(newobj)
      } else {
        this.$alert('不能提交空内容', '提示', {
          confirmButtonText: '确定',
        });
      }
      this.value = ''
    }
  },
  components: {
    HomeLayout,
  },
  data() {
    return {
      value: "",
      content:[]
    };
  },
};
</script>

<style>
.home_layout_content {
  margin: 0 auto;
  width: 500px;
}
.input_style {
  width: 500px;
}
.comments_content {
  margin-top: 50px;
  border-radius: 2%;
  width: 500px;
  height: 500px;
  background-color: rgb(212, 231, 246);
}
ul {
  padding-top: 10px;
  list-style: none;
}
.comment_list {
  line-height: 50px;
  display: inline-block;
  width: 200px;
  height: 50px;
  margin: 10px 10px;
  background-color: white;
  border-radius: 15px;
}
</style>
