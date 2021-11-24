<template>
  <form action="" class="container__custom form-change-password">
      <div class="form-control__custom">
        <label>Password</label>
        <input type="text" placeholder="Enter password">
      </div>
      <div class="form-control__custom">
        <label>New Password</label>
        <input type="text" placeholder="Enter new password">
      </div>
      <div class="form-control__custom">
        <label>Confirm Password</label>
        <input type="text" placeholder="Confirm password">
      </div>
  </form>
</template>

<script>
import '../UI/reuse.css'
export default {
    name: 'PasswordChange'
}
</script>

<style>
.form-change-password {
    min-height: 500px;
}
</style>