<template>
  <div class="jj-element-layout">
    <h2>基础用法</h2>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <div class="block">
      <h2 class="demonstration">完整功能</h2>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page.currentPage"
        :page-sizes="pagesizes"
        :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'ElementPagination',
    data() {
      return {
        page: {
          size: 10,
          currentPage: 1,
        },
        total: 400,
        pagesizes: [10, 20, 30, 40,1000]

      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        // 回调函数加载数据
        console.log(`当前页: ${val}`);
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
