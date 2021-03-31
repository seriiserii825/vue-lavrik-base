export default {
  namespaced: true,
  state: {
    items: tmpGetProducts()
  },
  getters: {
    all: (state) => state.items
  },
  mutations: {},
  actions: {}
}

function tmpGetProducts() {
  return [
    { id: 100, title: "Iphone", price: 200 },
    { id: 101, title: "Lenovo", price: 300 },
    { id: 102, title: "Nokia", price: 400 },
    { id: 103, title: "Samsung", price: 400 }
  ]
}
