<template>
  <div>
    <h2>Cart</h2>
    <div>In cart: {{ cnt }}</div>
    <div>Total: {{ total }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['cnt', 'total'])
}
</script>

<style lang="scss">

</style>
