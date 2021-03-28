<template>
  <div class="radio">
    <form>
      <div class="content alert alert-info" @scroll="handleScroll($event)">
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
        <p>This text no one reads. This text no one reads. This text no one reads.</p>
      </div>
      <div class="controls" v-if="scrollEnd">
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="agree">
            Agree all
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" v-model="showSpam">
            Get spam
          </label>
        </div>
        <div class="links" v-if="showSpam">
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" name="link" type="radio" value="email" v-model="link">
              Email
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input class="form-check-input" name="link" type="radio" value="phone" v-model="link">
              Phone
            </label>
          </div>
        </div>
        <hr>
        <button type="button" class="btn btn-primary" v-if="agree" @click="sendForm">
          Send Data
        </button>
      </div>
    </form>
    <table class="table table-bordered" v-if="formReady && agree">
      <tr>
        <td>Agree all</td>
        <td v-if="agree">Yes</td>
        <td v-else>No</td>
      </tr>
      <tr>
        <td>Get spam</td>
        <td v-if="showSpam">Yes</td>
        <td v-else>No</td>
      </tr>
      <tr v-if="showSpam">
        <td>Spam type</td>
        <td>{{ link }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollEnd: false,
      formReady: false,
      showSpam: false,
      agree: false,
      link: 'email'
    }
  },
  methods: {
    handleScroll (event) {
      const target = event.target
      this.scrollEnd = target.clientHeight + target.scrollTop === target.scrollHeight
    },
    sendForm () {
      this.formReady = true
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
.content {
  height: 400px;
  overflow-y: scroll;
}
.links {
  display: flex;
  align-items: center;
  justify-content: center;
  .form-check {
    display: block;
    margin-right: 2rem;
  }
}
form {
  margin-bottom: 7rem;
}
.table {
  margin-bottom: 8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}
</style>
