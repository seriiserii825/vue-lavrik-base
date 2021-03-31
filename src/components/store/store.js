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
    increase(state) {
      state.cnt++
    },
    decrease(state) {
      if (state.cnt > 1) {
        state.cnt--
      }
    },
    setCnt(state, cnt) {
      state.cnt = cnt
    },
    setStatus(state, status) {
      state.status = status
    }
  },
  actions: {
    setCnt(store, payload) {
      const payloadToNumber = parseInt(payload)
      if (payload === -1 && store.state.cnt > 1) {
        store.commit('setCnt', store.state.cnt - 1)
      } else if (payload === 1) {
        store.commit('setCnt', store.state.cnt + 1)
      } else if (
        payload.length === ('' + payloadToNumber).length ||
        payload > 1
      ) {
        store.commit('setCnt', payloadToNumber)
      } else {
        store.commit('setCnt', 1)
      }
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
