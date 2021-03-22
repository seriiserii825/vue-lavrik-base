<template>
  <div class="wrapper">
    <Refs/>
  </div>
</template>

<script>
import Refs from './components/Refs'

export default {
  components: {
    Refs
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
