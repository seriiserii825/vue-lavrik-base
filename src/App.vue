<template>
  <input type="text" v-model="promo">
  <div v-if="hasSale">
    <div class="base">base: {{price}}</div>
    <div class="final">total: {{total}} -{{sale}}%</div>
  </div>
  <div class="final" v-else>total: {{total}}</div>
</template>

<script>
function getSale (promo) {
  const promos = { some: 10, final: 20 }
  return Object.prototype.hasOwnProperty.call(promos, promo) ? promos[promo] : 0
}
export default {
  name: 'App',
  data () {
    return {
      promo: '',
      price: 1000
    }
  },
  computed: {
    sale () {
      return getSale(this.promo)
    },
    hasSale () {
      return this.sale > 0
    },
    total () {
      const sale = getSale(this.promo)
      return this.price - (sale / 100 * this.price)
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
