<template>
  <div class="animation">
    <h2>Animation</h2>
    <button class="btn btn-primary mb-4" @click="showAlert= !showAlert">Toggle animation</button>
    <transition name="fade" mode="out-in" appear>
      <div class="alert alert-danger" v-if="showAlert">
        <h2>Some alert</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi eaque eligendi, enim, explicabo facere ipsa iste iure labore minus neque officia quae quasi reiciendis repellendus sapiente sunt voluptate!</p>
      </div>
      <div class="same" v-else>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci delectus earum eius explicabo id in iusto laborum nostrum omnis, quisquam quos recusandae suscipit vel. Inventore laudantium maiores molestias numquam officia.</div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAlert: true
    }
  }
}
</script>

<style lang="scss">
.wrapper {
  max-width: initial;
  text-align: center;
  min-height: 100vh;
}
.alert {
  display: table;
  margin: 0 auto;
  width: 40rem;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(200px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(200px);
  }
}
.fade-enter-active {
  animation: fadeIn 2s ease;
}
.fade-leave-active {
  animation: fadeOut .5s ease;
}
</style>
