import { createStore } from 'vuex'

export default createStore({
  state: {
    cnt: 1,
    price: 1000,
    status: 'none'
  },
  getters: {
    cnt: (state) => state.cnt,
    price: (state) => state.price,
    status: (state) => state.status,
    total(state) {
      return state.cnt * state.price
    }
  },
  mutations: {
    setCnt(state, cnt) {
      state.cnt = Math.max(1, cnt)
    },
    setStatus(state, status) {
      state.status = status
    }
  },
  actions: {
    increase(store) {
      store.commit('setCnt', store.state.cnt - 1)
    },
    decrease(store) {
      store.commit('setCnt', store.state.cnt + 1)
    },
    setCnt(store, payload) {
      const cnt = parseInt(payload)

      store.commit('setCnt', isNaN(cnt) ? 1 : cnt)
    },
    sendOrder(store) {
      store.commit('setStatus', 'pending')
      setTimeout(() => {
        store.commit('setStatus', 'done')
      }, 500)
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
