export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    length: (state) => state.products.length,
    total: (state) => "hw"
  },
  mutations: {
    add(state, id) {
      state.products.push({ id, cnt: 1 })
    },
    remove(state, id) {
      state.products = state.products.filter((item) => item.id !== id)
    }
  },
  actions: {
    add(store, id) {
      store.commit("add", id)
    },
    remove(store, id) {
      store.commit("remove", id)
    }
  }
}
