<template>
  <home-layout>
    <!-- <img class="index-img" src="@/assets/xiamu.jpg"> -->
    <div class="background-img">
      <table id="customers">
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Address</th>
          <th>City</th>
        </tr>
        <tr>
          <td>Alibaba</td>
          <td>Ma Yun</td>
          <td>No. 699, Wangshang Road, Binjiang District</td>
          <td>Hangzhou</td>
        </tr>
        <tr>
          <td>APPLE</td>
          <td>Tim Cook</td>
          <td>1 Infinite Loop Cupertino, CA 95014</td>
          <td>Cupertino</td>
        </tr>
        <tr>
          <td>BAIDU</td>
          <td>Li YanHong</td>
          <td>Lixiang guoji dasha,No 58, beisihuanxilu</td>
          <td>Beijing</td>
        </tr>
        <tr>
          <td>Canon</td>
          <td>Tsuneji Uchida</td>
          <td>One Canon Plaza Lake Success, NY 11042</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Google</td>
          <td>Larry Page</td>
          <td>1600 Amphitheatre Parkway Mountain View, CA 94043</td>
          <td>Mountain View</td>
        </tr>
        <tr>
          <td>HUAWEI</td>
          <td>Ren Zhengfei</td>
          <td>Putian Huawei Base, Longgang District</td>
          <td>Shenzhen</td>
        </tr>
        <tr>
          <td>Microsoft</td>
          <td>Bill Gates</td>
          <td>15700 NE 39th St Redmond, WA 98052</td>
          <td>Redmond</td>
        </tr>
        <tr>
          <td>Nokia</td>
          <td>Olli-Pekka Kallasvuo</td>
          <td>P.O. Box 226, FIN-00045 Nokia Group</td>
          <td>Helsinki</td>
        </tr>
        <tr>
          <td>SONY</td>
          <td>Kazuo Hirai</td>
          <td>Park Ridge, NJ 07656</td>
          <td>Park Ridge</td>
        </tr>
        <tr>
          <td>Tencent</td>
          <td>Ma Huateng</td>
          <td>Tencent Building, High-tech Park, Nanshan District</td>
          <td>Shenzhen</td>
        </tr>
      </table>

    <el-table
      class="elTable"
      :data="tableData"
      :cell-style="cellStyle"
      style="width: 100%">
      <el-table-column
      class="th"
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  <p>{{ message }}</p>
  <button @click="reverseMessage">这是一个按钮</button>

  <div>{{msg}}</div>
  <input type="text" v-model="msg">
  <button @click="addVege">添加一个蔬菜</button>
    <center
      :groceryList="groceryList"
      :inputName="name"
    ></center>

    </div>
  </home-layout>
</template>

<script>
import HomeLayout from '../../layout/HomeLayout.vue';
import Center from '../home/center';
export default {
  data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          message: 'Hello Vue.js!',
          msg: '哈哈哈',
          groceryList: [
            '蔬菜——父组件',
            '奶酪',
            '随便其它什么人吃的东西'
          ],
        name: '666',
        }
      },

    created() {
        console.log('default组件');
    },
    components: {
        HomeLayout,
        Center,
    },

    methods: {
    cellStyle({columnIndex}) {
      if (columnIndex===0){
        return "border-left: 3px solid tomato;"
      }
      if (columnIndex===2) {
        return "border-right: 3px solid tomato;"
      }
    }, 

    reverseMessage: function () {
      console.log('点击按钮666');
    },

    addVege() {
      this.groceryList.push(this.msg);
      this.msg = '';
      console.log(this.groceryList, 'hhh');
    }
}  
}
</script>

<style>
.background-img {
  /* height: 1000px; */
  background-image: url(../../assets/xiamu.jpg);
  background-size: cover;
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  /* border: 1px solid #ddd; */
  padding: 8px;
}

/* #customers tr:nth-child(even){background-color: #f2f2f2;} */

#customers tr:hover {background-color: #fff;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  /* background-color: #4CAF50; */
  /* color: white; */
}

.el-table, .el-table__expanded-cell {
  margin: 0 auto !important;
  width: 50% !important;
  background-color: transparent !important;
  /* border-left: 3px solid tomato !important;
  border-right: 3px solid tomato !important; */
}

.el-table tr {
  border-left: 3px solid tomato !important;
  border-right: 3px solid tomato !important;
}


.el-table th, .el-table tr, .el-table td {
  background-color: transparent !important;
}

.el-table tr:hover {
  background-color: #fff !important;
}

</style>