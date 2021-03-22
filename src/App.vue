<template>
  <div class="wrapper">
    <Form/>
  </div>
</template>

<script>

import Form from './components/Form'

export default {
  name: 'App',
  data () {
    return {
      numbers: [1, 2, 3, 4, 5, 6]
    }
  },
  components: {
    Form
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
.wrapper {
  margin: 0 auto;
  padding: 15px;
  max-width: 900px;
}
</style>
