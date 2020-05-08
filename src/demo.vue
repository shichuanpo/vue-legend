<template>
  <div id="app">
    <vue-legend :data='legendData' :editable="true"/>
  </div>
</template>

<script>
import vueLegend from './vue-legend/index.vue'

export default {
  name: 'app',
  components: {
    vueLegend
  },
  data () {
    return {
      legendData: ['图例1', '图例2', '图例3', '图例4', '图例5', '图例6', '图例7', '图例8', '图例9', '图例10', '图例11', '图例12', '图例13', '图例14']
    }
  }
}
</script>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
