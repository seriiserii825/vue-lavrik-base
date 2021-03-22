<template>
  <input type="text" v-model.lazy="promo">
  <div v-if="hasSale">
    <div class="base">base: {{ price }}</div>
    <div class="final">total: {{ total }} -{{ sale }}%</div>
  </div>
  <div class="final" v-else>total: {{ total }}</div>
  <button class="btn btn-danger" @click="promo = ''">x</button>
  <button class="btn btn-primary" @click="promo = 'some'">For new clients</button>
</template>

<script>
function getSale (promo, onComplete = Function) {
  const promos = { some: 10, final: 20 }
  setTimeout(function () {
    onComplete(Object.prototype.hasOwnProperty.call(promos, promo) ? promos[promo] : 0)
  }, 1000)
}

export default {
  name: 'App',
  data () {
    return {
      sale: 0,
      promo: '',
      price: 1000
    }
  },
  computed: {
    hasSale () {
      return this.sale > 0
    },
    total () {
      return this.sale > 0 ? this.price - (this.sale / 100 * this.price) : this.price
    }
  },
  watch: {
    promo () {
      getSale(this.promo, (sale) => {
        this.sale = sale
      })
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
