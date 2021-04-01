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
            <hr />
            <router-link class="btn btn-primary" :to="`/product/${id}`">Read more...</router-link>
            <hr />
            <button
              v-if="inCart(id)"
              class="btn btn-danger"
              @click="removeHandler(id)"
            >
              Remove
            </button>
            <button v-else class="btn btn-success" @click="addHandler(id)">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  computed: {
    ...mapGetters("products", { products: "all" }),
    ...mapGetters("cart", { inCart: "has" })
  },
  methods: {
    ...mapActions("cart", {
      addToCart: "add",
      removeFromCart: "remove",
      changeProductsSum: "products"
    }),
    addHandler(id) {
      this.addToCart(id)
      this.changeProductsSum()
    },
    removeHandler(id) {
      this.removeFromCart(id)
      this.changeProductsSum()
    }
  }
}
</script>

<style scoped>
.row {
  padding-left: 15px;
}
</style>
