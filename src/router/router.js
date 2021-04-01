import { createRouter, createWebHistory } from "vue-router"
import Cart from "../views/Cart"
import Checkout from "../views/Checkout"
import ProductsList from "../views/ProductsList"
import Product from "../views/Product"

const routes = [
  {
    name: "cart",
    path: "/cart",
    component: Cart
  },
  {
    name: "checkout",
    path: "/checkout",
    component: Checkout
  },
  {
    name: "product",
    path: "/product/:id",
    component: Product
  },
  {
    name: "products",
    path: "/",
    component: ProductsList
  }
]

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
