<template>
  <div class="hello">
    <h1>目录</h1>
    <ul>
      <li><a href=""></a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'directory',
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
<style lang="stylus">

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>
