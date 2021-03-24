<template>
  <div class="wrapper">
    <FormProgress/>
  </div>
</template>

<script>
// import Radio from './components/Radio'

import FormProgress from './components/FormProgress'

export default {
  components: {
    FormProgress
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
