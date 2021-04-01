export default {
  namespaced: true,
  state: {
    items: [],
    sum: 0
  },
  getters: {
    length: (state) => state.items.length,
    has(state) {
      return (id) => state.items.some((item) => item.id === id)
    },
    sum: (state) => state.sum,
    items: (state) => state.items
  },
  mutations: {
    add(state, id) {
      state.items.push({ id, cnt: 1 })
    },
    remove(state, id) {
      state.items = state.items.filter((item) => item.id !== id)
    },
    addSum(state, payload) {
      state.sum = payload
    }
  },
  actions: {
    add(store, id) {
      if (!store.getters.has(id)) {
        store.commit("add", id)
      }
    },
    remove(store, id) {
      if (store.getters.has(id)) {
        store.commit("remove", id)
      }
    },
    products({ commit, getters, rootGetters }) {
      const allProducts = rootGetters["products/all"]
      const items = getters.items
      let sum = 0
      items.forEach((item) => {
        allProducts.forEach((product) => {
          if (item.id === product.id) {
            sum += product.price
          }
        })
      })
      commit("addSum", sum)
    }
  }
}
