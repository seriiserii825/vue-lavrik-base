<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div
        class="col col-sm-4 mb-3 mt-3"
        v-for="{ id, title, price } in products"
        :key="id"
      >
        <div class="card">
          <div class="card-body">
            <h3>{{ title }}</h3>
            <div>{{ price }}</div>
            <hr/>
            <button v-if="inCart(id)" class="btn btn-danger" @click="removeFromCart(id)">Remove</button>
            <button v-else class="btn btn-success" @click="addToCart(id)">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  computed: {
    ...mapGetters("products", { products: "all" }),
    ...mapGetters("cart", { inCart: "has" })
  },
  methods: {
    ...mapActions("cart", { addToCart: "add", removeFromCart: "remove" })
  }
}
</script>

<style scoped>
.row {
  padding-left: 15px;
}
</style>
