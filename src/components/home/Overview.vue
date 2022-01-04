<template>
  <div class="overview">
    <div class="content">
      <h1>Welcome!</h1>
      <p>
        Chào mừng đến với EDUlanthropy. Đăng ký học miễn phí ngay bây giờ!
      </p>
      <router-link :to="registerLink"><button class="register">Đăng ký học</button></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Overview",
  data() {
    return {
      registerLink: {type: String, required: true}
    };
  },
  mounted() {
    if (!localStorage.getItem('access_token'))
      this.registerLink = "/register";
    else
      this.registerLink = "/courses"
  }
};
</script>

<style lang="scss" scoped>

.overview {
  position: relative;
  min-height: 500px;
  //background-color: #e9ecef;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    max-width: 95%;
    max-height: 50%;
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-family: "Montserrat";

    h1 {
      text-align: left;
      font-weight: 400;
      font-size: 60px;
      margin-bottom: 20px;
    }

    p {
      text-align: left;
      font-size: 17px;
    }

    button {
      position: absolute;
      margin: 20px 0px;
      left: 15px;
      width: 200px;
      height: 40px;
      border: 2px solid #fff;
      border-radius: 20px;
      font-weight: 600;
      color: #fff;
      background: #6347c7;
    }
  }
}
</style>
