<template>
  <form @submit="sendForm">
    <div class="form-group">
      <input @input="inputHandler('name')" type="text" class="form-control" placeholder="First Name" v-model="name">
    </div>
    <div class="form-group">
      <input @input="inputHandler('lastName')" type="text" class="form-control" placeholder="Last Name" v-model="lastName">
    </div>
    <div class="form-group">
      <input @input="inputHandler('phone')" type="tel" class="form-control" placeholder="Phone" v-model="phone">
    </div>
    <div class="form-group">
      <input @input="inputHandler('email')" type="email" class="form-control" placeholder="Email" v-model="email">
    </div>

    <div class="form-group">
      <h3>Guests</h3>
      <button type="button" @click="addNewGuest" class="btn btn-primary">Add guest</button>
    </div>

    <div class="form-group" v-if="newGuests.length > 0">
      <div class="form-group" v-for="(guest, index) in newGuests" :key="guest.id">
        <input type="text" :placeholder="guest.id" :value="newGuests[index].value" @input="setNewGuestValue($event, index)">
        <button class="btn btn-danger" @click="removeGuest(guest.id)">remove</button>
      </div>
    </div>
    <hr>
    <button :disabled="!fieldsValid" class="btn btn-success">Send Data</button>
  </form>
  <div v-if="formValid">
    <h2>All done!</h2>
    <table class="table table-bordered">
      <tr>
        <td>Full name</td>
        <td>{{ name + ' ' + lastName }}</td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>{{ phone }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{{ email }}</td>
      </tr>
      <tr v-if="filledNewGuests.length > 0">
        <td>Guests</td>
        <td>
          <ul>
            <li v-for="item in filledNewGuests" :key="item.id">{{ item.value }}</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      nameValid: false,
      lastName: '',
      lastNameValid: false,
      phone: '',
      phoneValid: false,
      email: '',
      emailValid: false,
      formValid: false,
      newGuests: [],
      filledNewGuests: []
    }
  },
  methods: {
    sendForm (e) {
      e.preventDefault()
      if (this.name === '' || this.lastName === '' || this.phone === '' || this.email === '') {
        this.formValid = false
      } else {
        this.formValid = true
        this.filledNewGuests = this.newGuests.filter(item => {
          return item.value.length > 0
        })
      }
    },
    inputHandler (value) {
      if (this[value].length > 0) {
        this[`${value}Valid`] = true
      }
    },
    addNewGuest () {
      this.newGuests.push({ id: Math.floor(Math.random() * 10000), value: '' })
    },
    removeGuest (id) {
      this.newGuests = this.newGuests.filter(item => item.id !== id)
    },
    setNewGuestValue (event, index) {
      this.newGuests[index].value = event.target.value
    }
  },
  computed: {
    fieldsValid () {
      return this.nameValid && this.lastNameValid && this.phoneValid && this.emailValid
    }
  }
}
</script>

<style lang="scss">
button {
  cursor: pointer;
}
</style>
