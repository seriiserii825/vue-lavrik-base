<template>
  <div class="radio">
    <form>
      <div class="content alert alert-info">
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
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="checkbox">
          Agree all
        </label>
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input class="form-check-input" type="radio">
          Get spam
        </label>
      </div>
      <div class="links">
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" name="link" type="radio">
            Email
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" name="link" type="radio">
            Phone
          </label>
        </div>
      </div>
      <hr>
      <button class="btn btn-primary">
        Send Data
      </button>
    </form>
    <div>
      <table class="table table-bordered">
        <tr>
          <td>Agree all</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Get spam</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Spam type</td>
          <td>email</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {}
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
  box-shadow: 0 4px 8px rgba(0,0,0,.2);
}
</style>
