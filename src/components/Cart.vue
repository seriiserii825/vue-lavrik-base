<template>
  <div>
    <h2>Cart</h2>
    <div>In cart: {{ $store.state.cnt }}</div>
    <div>Total: {{ $store.state.price * $store.state.cnt }}</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

</style>
