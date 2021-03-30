import { createStore } from 'vuex'

export default createStore({
  state: {
    cnt: 1,
    price: 1000
  },
  mutations: {
    increase(state) {
      state.cnt++
    },
    decrease(state) {
      if (state.cnt > 1) {
        state.cnt--
      }
    }
  },
  strict: process.env.NODE_ENV !== 'production'
})
