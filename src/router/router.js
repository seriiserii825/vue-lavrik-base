import { createRouter, createWebHistory } from "vue-router"
import Cart from "../views/Cart"
import Checkout from "../views/Checkout"
import ProductsList from "../views/ProductsList"
import Product from "../views/Product"
import E404 from "../views/E404"

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
  },
  { name: "NotFound", path: "/:catchAll(.*)", component: E404 }
]

export default createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})
