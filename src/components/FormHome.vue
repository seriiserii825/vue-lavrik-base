<template>
  <form @submit="sendForm">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="First Name" v-model.trim="user.name">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Last Name" v-model.trim="user.lastName">
    </div>
    <div class="form-group">
      <input type="tel" class="form-control" placeholder="Phone" v-model.trim="user.phone">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Email" v-model.trim="user.email">
    </div>

    <div class="form-group">
      <h3>Guests</h3>
      <button type="button" class="btn btn-primary">Add guest</button>
    </div>
    <hr>
    <button type="button" :disabled="!formReady" class="btn btn-success">Send Data</button>
  </form>
  <div>
    <h2>All done!</h2>
    <table class="table table-bordered">
      <tr>
        <td>Full name</td>
        <td>{{ user.name + ' ' + user.lastName }}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{{ user.phone }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        lastName: '',
        phone: '',
        email: ''
      },
      formDone: false,
      guests: []
    }
  },
  computed: {
    formReady () {
      return Object.values(this.user).every(item => item !== '')
    }
  }
}
</script>

<style lang="scss">
button {
  cursor: pointer;
}
</style>
