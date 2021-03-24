<template>
  <form>
    <div class="progress">
      <div class="progress-bar"></div>
    </div>
    <div>
      <div class="form-group" v-for="(field) in info" :key="field.name">
        <label>{{ field.name }}</label>
        <input type="text" class="form-control" v-model="field.value">
      </div>
    </div>
    <button class="btn btn-primary">
      Send Data
    </button>
    <pre>
    {{ info }}
    </pre>
  </form>
  <div>
    <table class="table table-bordered">
      <tr>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: [
        {
          name: 'Name',
          value: '',
          pattern: /^[a-zA-Z ]{2,30}$/,
          activated: false, // is visibble icon
          valid: false // is valid input
        },
        {
          name: 'Phone',
          value: '',
          pattern: /^[0-9]{7,14}$/,
          activated: false, // is visibble icon
          valid: false // is valid input
        },
        {
          name: 'Email',
          value: '',
          pattern: /.+/,
          activated: false, // is visibble icon
          valid: false // is valid input
        },
        {
          name: 'Some Field 1',
          value: '',
          pattern: /.+/,
          activated: false, // is visibble icon
          valid: false // is valid input
        },
        {
          name: 'Some Field 2',
          value: '',
          pattern: /.+/,
          activated: false, // is visibble icon
          valid: false // is valid input
        }
      ]
    }
  }
}
</script>

<style lang="scss">
* {
  text-align: left;
}
.progress {
  margin-bottom: 6rem;
}
button {
  margin-bottom: 5rem;
}
</style>
