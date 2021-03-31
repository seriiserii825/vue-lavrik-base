import { createRouter, createWebHistory } from "vue-router"
import Cart from "../views/Cart"
import Checkout from "../views/Checkout"
import ProductsList from "../views/ProductsList"

const routes = [
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/checkout",
    component: Checkout
  },
  {
    path: "/",
    component: ProductsList
  }
]

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
