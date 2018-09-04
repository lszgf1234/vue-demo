<template>
  <div class="jj-element-layout">
    <h2>基础用法</h2>
    <el-tree :data="data"  @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>

  export default {
    name: 'ElementTree',
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],


      }
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
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
