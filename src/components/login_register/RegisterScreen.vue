<template>
  <div class="container">
    <h1 style="text-align: center">Đăng ký tài khoản Edulanthropy</h1>
    <RegisterByEmail
      @addUser="AddUser"
      v-show="showEmailRegister"
    ></RegisterByEmail>
    <router-view></router-view>
    <div v-show="registerScreen" class="login-button">
      <Button
        @btnClick="onClick"
        :text="'Use ' + 'email ' + '/ ' + 'phone ' + 'number '"
        :source="iconps"
      />
      <Button :text="'Continue ' + 'with ' + 'google'" :source="icongg" />
      <Button :text="'Continue ' + 'with ' + 'facebook'" :source="iconfb" />
      <Button :text="'Continue ' + 'with ' + 'github'" :source="icongh" />
    </div>
    <div class="sign-up" style="text-align: center">
      <h3>Bạn đã có tài khoản?</h3>
      <router-link class="sign-up-router" to="/login">Đăng nhập</router-link>
    </div>
    <LoadingSpinner class="loading" v-show="isLoading" />
  </div>
</template>
<script>
import iconperson from "../../assets/images/login_register/personal.svg";
import icongoogle from "../../assets/images/login_register/google.svg";
import iconfacebook from "../../assets/images/login_register/facebook.svg";
import icongithub from "../../assets/images/login_register/github.svg";
import { Authen } from "../../services/apis/ApiService";
import Button from "./Button.vue";
import RegisterByEmail from "./RegisterByEmailScreen.vue";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  name: "RegisterScreen",
  components: {
    Button,
    RegisterByEmail,
    LoadingSpinner
  },
  methods: {
    onClick() {
      this.showEmailRegister = true;
    },
    AddUser(newUser) {
      this.isLoading = true
      Authen.register(newUser)
        .then(res => {
          this.$router.push("/login");
        })
        .catch(e => {
          alert(error.data.msg);
          this.isLoading = false;
          return;
        });
    }
  },
  data() {
    return {
      showEmailRegister: false,
      iconps: iconperson,
      icongg: icongoogle,
      iconfb: iconfacebook,
      icongh: icongithub,
      isLoading: false
    };
  },
  computed: {
    registerScreen() {
      if (this.showEmailRegister === false) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
.container {
  width: 640px;
  margin: 30px auto;
  overflow: auto;
  min-height: 600px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 10px;
  font-family: "Montserrat";
}
.login-button {
  display: flex;
  flex-direction: column;
}
h1 {
  color: #000;
  font-weight: bold;
  margin-bottom: 50px;
}
.sign-up {
  margin-top: 20px;
}

.sign-up .sign-up-router:hover {
  color: #6347c7;
}
</style>
