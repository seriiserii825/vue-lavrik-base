<template>
  <input type="text" v-model="title">
  <hr>
  <h3>{{ title }}</h3>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      title: ''
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
