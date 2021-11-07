<template>
    <div class="container">
        <h1>Chào mừng đến với Edulanthropy</h1>
        <LoginByEmail v-show="showEmailLogin"></LoginByEmail>
        <RegisterByEmail v-show="false"></RegisterByEmail>
        <router-view></router-view>
        <div v-show="loginScreen" class="login-button">
            <Button @btn-click="onClick" 
            :text="'Use ' + 'email ' + '/ ' + 'phone ' + 'number '" :source="'https://fullstack.edu.vn/assets/images/signin/personal-18px.svg'" />
            <Button :text='"Continue " + "with " + "google"' :source="'https://fullstack.edu.vn/assets/images/signin/google-18px.svg'"/>
            <Button :text='"Continue " + "with " + "facebook"' :source="'https://fullstack.edu.vn/assets/images/signin/facebook-18px.svg'"/>
            <Button :text='"Continue " + "with " + "github"' :source="'https://fullstack.edu.vn/assets/images/signin/github-18px.svg'"/>
        </div>
        <div class="sign-up">
            <h3>Bạn chưa có tài khoản?</h3>
            <router-link to="/Register">Đăng ký</router-link>
        </div>
    </div>
</template>

<script>
    import Button from './Button.vue'
    import LoginByEmail from './LoginByEmailScreen.vue'
    import RegisterByEmail from './RegisterByEmailScreen.vue'
    export default {
        name: 'LoginScreen',
        components: {
            Button,
            LoginByEmail,
            RegisterByEmail
        },
        methods: {
            onClick() {
                this.showEmailLogin = true
            },
        },
        data() {
            return {
                showEmailLogin: false,
                showEmailRegister: false,
            }
        },
        computed: {
            loginScreen() {
                if(this.showEmailLogin === false) {
                    return true
                }
                return false
            }
        }
    }
</script>

<style scoped>
.container {
    width: 640px;
    margin: 30px auto;
    overflow: auto;
    min-height: 600px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
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
</style>