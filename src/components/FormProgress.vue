<template>
  <form @submit.prevent="onSubmit">
    <div class="progress">
      <div class="progress-bar" :style="progressWidth">{{ fieldsDone }}</div>
    </div>
    <div>
      <div class="form-group" v-for="(field, i) in info" :key="field.name">
        <label>{{ field.name }}</label>
        <span
          v-if="field.isIconVisible"
          class="fa"
          :class="field.valid ? 'fa-check-circle text-success' : 'fa-exclamation-circle text-danger'"
        ></span>
        <input type="text" class="form-control" @input="onInput($event.target.value, i)" :value="field.value">
      </div>
    </div>
    <button class="btn btn-primary" :disabled="!formIsValid">
      Send Data
    </button>
  </form>
  <table class="table table-bordered" v-if="isSubmited">
    <tr v-for="item in info" :key="item.name">
      <td>{{ item.name }}</td>
      <td>{{ item.value }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data () {
    return {
      info: [
        {
          name: 'Name',
          value: '',
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/
        },
        {
          name: 'Email',
          value: '',
          pattern: /.+/
        },
        {
          name: 'Some Field 1',
          value: '',
          pattern: /.+/
        },
        {
          name: 'Some Field 2',
          value: '',
          pattern: /.+/
        }
      ],
      isSubmited: false
    }
  },
  computed: {
    // Заблокировать кнопку
    // Рассчитать ширину прогресс бара
    fieldsDone () {
      return this.info.reduce((sum, current) => {
        const number = current.valid ? 1 : 0
        return sum + number
      }, 0)
    },
    progressWidth () {
      const percent = 100 / this.info.length
      return 'width: ' + this.fieldsDone * percent + '%'
    },
    formIsValid () {
      return this.fieldsDone === this.info.length
    }
  },
  methods: {
    onInput (value, i) {
      const field = this.info[i]
      field.value = value
      field.isIconVisible = true
      field.valid = field.pattern.test(field.value)
    },
    onSubmit () {
      this.isSubmited = true
    }
  },
  created () {
    this.info.forEach(item => {
      item.isIconVisible = false
      item.valid = false
    })
  }
}
</script>

<style lang="scss">
* {
  text-align: left;
}
.progress {
  position: relative;
  margin-bottom: 6rem;
}
.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: darkgreen;
}
button {
  margin-bottom: 5rem;
}
.fa {
  margin-left: .4rem;
}
</style>
