<template>
  <div class="Todo">
    <h1>Your actions</h1>
    <todo-item
      v-for="(item, i) in todoList"
      :key="item.title"
      :title="item.title"
      :current="item.current"
      :max="item.max"
      @on-step="makeStep(i)"
    />

    <!--<div class=" action " v-for="(action, i) in todoList" :key="action.title">-->
    <!--&lt;!&ndash;  <div class="alert" :class="getActionClass(action)">&ndash;&gt;-->
    <!--    <h2>{{ action.title }}</h2>-->
    <!--    <div class="progress">-->
    <!--      <div :style="{width: (action.current / action.max * 100) + '%'}"-->
    <!--           class="progress-bar"-->
    <!--      >-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <hr>-->
    <!--    <h3 v-if="action.current === action.max">All done!</h3>-->
    <!--    <button v-else type="button" class="btn btn-primary" @click="makeStep(i)">-->
    <!--      I make step!-->
    <!--    </button>-->
    <!--  </div>-->
    <!--</div>-->
  </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  components: { TodoItem },
  data: () => ({
    todoList: [
      { title: 'First action', current: 1, max: 5 },
      { title: 'Other work', current: 2, max: 10 },
      { title: 'Some fun', current: 4, max: 7 }
    ]
  }),
  methods: {
    makeStep (i) {
      const step = this.todoList[i]

      if (step.current < step.max) {
        step.current++
      }
    }
  }
}
</script>

<style lang="scss">
* {
  text-align: left;
}
</style>
