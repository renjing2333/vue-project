<template>
  <div>
    <h5>transform</h5>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
      :before-upload="check"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <!-- <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
        >上传到服务器</el-button
      > -->
      <!-- <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div> -->
    </el-upload>
  </div>
</template>

<script setup>
import { Papa } from "papaparse";
export default {
  data(){
    return {
      serviceIdList: []
    }
  },
  methods: {
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList, "移除时的钩子");
    },

    // 点击文件列表中已上传的文件时的钩子
    handlePreview(file) {
      console.log(file, "点击文件");
      Papa.parse(file, {
        complete: function(results) {
          console.log("checkoutBeforeFileName-Finished:", results.data);
          let serviceIdIndex = results.data[0].indexOf("service_id");
          results.data.forEach((item, index) => {
            if (index > 0) {
              if (item[serviceIdIndex] === undefined) {
                return;
              }
              this.serviceIdList.push(item[serviceIdIndex]);
            }
          });
          //拼接成数组存储
        },
      });
      console.log(this.serviceIdList, 'serviceeee');
    },
    check(file) {
      console.log(file, 'fileeee');
    }
  },
};
</script>

<style lang="scss" scoped></style>
