<template>
  <div class="jj-element">
    <el-row>
      <el-button >默认按钮</el-button>
      <el-button type="primary" >主要按钮</el-button>
      <el-button type="success" >成功按钮</el-button>
      <el-button type="info" >信息按钮</el-button>
      <el-button type="warning" >警告按钮</el-button>
      <el-button type="danger" >危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
 /* import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);*/
  export default {
    name: 'ElementBtn',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        dataList: [
          {}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
