<template>
  <div id="app">
<ToDoItemGroup></ToDoItemGroup>
  </div>

</template>

<script>
    import ToDoItemGroup from './components/ToDoItemGroup.vue'
export default {
  name: 'app',
  components: {
      ToDoItemGroup
  },
  data(){
    return{
      count:1
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
