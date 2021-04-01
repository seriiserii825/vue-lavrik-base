<template>
  <div>
    <h1>{{ item.title }}</h1>
    <router-link :to="{ name: 'products' }">Back to products</router-link>
    <hr />
    <div class="alert alert-success" v-if="item.price">{{ item.price }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      item: {}
    }
  },
  computed: {
    ...mapGetters("products", { singleProduct: "singleProduct" })
  },
  mounted() {
    this.item = this.singleProduct(this.$route.params.id)
  }
}
</script>
