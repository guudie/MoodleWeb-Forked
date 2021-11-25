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

<style lang="scss">
// để tạm, tải font sau
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap');

.form-change-password {
    min-height: 500px;
    font-family: 'Montserrat';

    div {
      margin-bottom: 30px;

      label {
        padding-left: 5px;
        font-weight: bold;
      }

      input {
        padding-left: 10px;
        font-size: 15px;
      }
    }
}
</style>