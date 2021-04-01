<template>
  <div>
    <h2>Cart</h2>
    <hr/>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Remove</th>
      </tr>
      </thead>
      <tbody v-if="cartProducts.length > 0">
      <tr v-for="({ id, title, price }) in cartProducts" :key="id">
        <th scope="row">{{ id }}</th>
        <td>{{ title }}</td>
        <td>{{ price }}</td>
        <td>
          <button class="btn btn-danger" @click="removeFromCart(id)">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
    <router-link :to="{ name: 'checkout' }" class="btn btn-success"
    >Checkout
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  computed: {
    ...mapGetters("cart", { items: "items" }),
    ...mapGetters("products", { allProducts: "all" }),
    cartProducts() {
      if (this.items.length > 0) {
        return this.items.reduce(
          (result, current) => {
            const findedProduct = this.allProducts.find(
              (product) => product.id.toString() === current.id.toString()
            )
            return [...result, { id: findedProduct.id, title: findedProduct.title, price: findedProduct.price }]
          }, []
        )
      }
      return []
    }
  },
  methods: {
    ...mapActions("cart", { removeFromCart: "remove" })
  },
  mounted() {
    console.log("this.items", this.items)
    console.log("this.cartProducts", this.cartProducts)
  }
}
</script>
