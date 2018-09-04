<template>
  <div class="jj-element">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <ul class="aside-left">
            <li v-for="(item) in dataList"><router-link :to="item.path">{{item.text}}</router-link></li>
          </ul>

        </el-aside>
        <el-main>
          element-组建
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);
  export default {
    name: 'Element',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        dataList: [
          {
            path: '/element/btn',
            text: '按钮'
          },
          {
            path: '/element/layout',
            text: '栅格系统'
          },
          {
            path: '/element/tree',
            text: '树组建'
          },
          {
            path: '/element/pagination',
            text: '分页'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .jj-element
    .aside-left
      list-style none
      a
        display block




</style>
