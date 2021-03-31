<template>
  <div>Product title</div>
  <div class="price">{{ price }}</div>
  <hr/>
  <button class="btn btn-danger" @click="increase">-1</button>
  <input type="text" :value="cnt" @blur="onInput"/>
  <button class="btn btn-success" @click="decrease">+1</button>
  <hr/>
  <button type="button" :class="showClasses" @click="sendOrder">
    {{ showText }}
  </button>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

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
    ...mapActions(['sendOrder', 'increase', 'decrease', 'setCnt']),
    onInput(e) {
      const lastCnt = this.cnt
      this.setCnt(e.target.value)

      if (lastCnt === this.cnt && lastCnt.toString() !== e.target.value) {
        console.log('nz')
        this.$forceUpdate()
      }
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
