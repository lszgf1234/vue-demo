<template>
  <div class="jj-element-layout">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    name: 'ElementLayout',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/stylus">
  .jj-element-layout
    .bg-purple-dark
      background #f5f5f5
      height 60px
      font-size 29px
</style>
