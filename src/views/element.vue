<template>
  <div class="jj-element">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import ElementUI from 'element-ui';
  export default {
    name: 'element',
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
