<template>
  <div>
    <header>
      <div class="container">
        <div class="row">
          <div class="col col-sm-9">
            <h1>Site</h1>
          </div>
          <div class="col col-sm-3">
            <div class="alert alert-default">
              <div>In Cart: {{ cartCnt }}</div>
              <div>Total: ...</div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-sm-3 menu">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="item in menu"
                :key="item.route"
              >
                <router-link
                  exact-active-class="active"
                  :to="{ name: item.name }"
                >{{ item.title }}
                </router-link
                >
              </li>
            </ul>
          </div>
          <div class="col col-sm-9">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data() {
    return {
      menu: [
        { name: "products", title: "Products" },
        { name: "cart", title: "Cart" },
        { name: "checkout", title: "Checkout" }
      ]
    }
  },
  computed: {
    ...mapGetters("cart", { cartCnt: "length" })
  }
}
</script>

<style>
.menu {
  border-right: 1px solid #ddd;
}

.list-group-item {
  padding: 0;
}

.list-group-item a {
  display: block;
  padding: 1rem 2rem;
  text-decoration: none;
  transition: all 0.2s ease-out;
}

.list-group-item a.active {
  color: white;
  background-color: dodgerblue;
}
</style>
