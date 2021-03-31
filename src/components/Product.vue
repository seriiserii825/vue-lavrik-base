<template>
  <div>Product title</div>
  <div class="price">{{ price }}</div>
  <hr/>
  <button class="btn btn-danger" @click="setCnt(-1)">-1</button>
  <input type="text" :value="cnt" @change="onInput">
  <button class="btn btn-success" @click="setCnt(+1)">+1</button>
  <hr>
  <button type="button" :class="showClasses" @click="sendOrder">{{ showText }}</button>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters(['price', 'cnt', 'status']),
    showAlert() {
      return this.status !== 'none'
    },
    showText() {
      return this.status === 'pending' ? 'Loading...' : 'Done'
    },
    showClasses() {
      return {
        'alert-danger': this.status === 'pending',
        'alert-success': this.status === 'done'
      }
    }
  },
  methods: {
    ...mapMutations(['increase', 'decrease']),
    ...mapActions(['sendOrder', 'setCnt']),
    onInput(e) {
      this.setCnt(e.target.value.trim())
    }
  }
}
</script>

<style lang="scss">
.btn {
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
