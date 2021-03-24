<template>
  <div class="action">
    <div class="alert" :class="getActionClass">
      <h2>{{ title }}</h2>
      <div class="progress">
        <div
          class="progress-bar"
          :style="{width: (current / max * 100) + '%'}"
        ></div>
      </div>
      <hr>
      <h3 v-if="current === max">All done!</h3>
      <button type="button" class="btn btn-primary" @click="$emit('on-step')">
        I make step!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    current: Number,
    max: Number
  },
  data () {
    return {
      some: ''
    }
  },
  computed: {
    getActionClass () {
      const rel = this.current / this.max
      return {
        'alert-danger': rel < 0.25,
        'alert-warning': rel >= 0.25 && rel < 0.75,
        'alert-success': rel >= 0.75
      }
    }
  }
}
</script>

<style lang="scss">

</style>
