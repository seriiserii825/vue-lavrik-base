<template>
  <div>Product title</div>
  <div class="price">{{ price }}</div>
  <hr/>
  <button class="btn btn-danger" @click="decrease">-1</button>
  <input type="text" :value="cnt" @input="onInput">
  <button class="btn btn-success" @click="increase">+1</button>
  <hr>
  <button type="button" :class="showClasses" @click="sendOrder">{{ showText }}</button>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

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
    ...mapMutations(['increase', 'decrease', 'setCnt']),
    ...mapActions(['sendOrder']),
    onInput(e) {
      this.setCnt(e.target.value.trim())
    }
  }
}
</script>

<style lang="scss">
.btn {
  margin-left: 1rem;
}
</style>
