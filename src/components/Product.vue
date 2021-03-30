<template>
  <div>Product title</div>
  <div class="price">{{ $store.state.price }}</div>
  <hr/>
  <button class="btn btn-danger" @click="$store.commit('decrease')">-1</button>
  <button class="btn btn-success" @click="$store.commit('increase')">+1</button>
</template>

<script>
export default {}
</script>

<style lang="scss">
.btn {
  margin-left: 1rem;
}
</style>
