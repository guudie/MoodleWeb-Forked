<template>
    <div class="container">
        <h1>Đăng ký tài khoản Edulanthropy</h1>
        <RegisterByEmail @addUser="AddUser" v-show="showEmailRegister"></RegisterByEmail>
        <router-view></router-view>
        <div v-show="registerScreen" class="login-button">
            <Button @btnClick="onClick" 
            :text="'Use ' + 'email ' + '/ ' + 'phone ' + 'number '" :source="'https://fullstack.edu.vn/assets/images/signin/personal-18px.svg'" />
            <Button :text='"Continue " + "with " + "google"' :source="'https://fullstack.edu.vn/assets/images/signin/google-18px.svg'"/>
            <Button :text='"Continue " + "with " + "facebook"' :source="'https://fullstack.edu.vn/assets/images/signin/facebook-18px.svg'"/>
            <Button :text='"Continue " + "with " + "github"' :source="'https://fullstack.edu.vn/assets/images/signin/github-18px.svg'"/>
        </div>
        <div class="sign-up">
            <h3>Bạn đã có tài khoản?</h3>
            <router-link to="/login">Đăng nhập</router-link>
        </div>
    </div>
</template>
<script>
    import AuthenApi from '../../services/apis/AuthenApi'
    import Button from './Button.vue'
    import RegisterByEmail from './RegisterByEmailScreen.vue'
    export default {
        name: 'RegisterScreen',
        components: {
            Button,
            RegisterByEmail
        },
        methods: {
            onClick() {
                this.showEmailRegister = true
            },
            AddUser(newUser) {
                AuthenApi.register(newUser)
            }
        },
        data() {
            return {
                showEmailRegister: false,
            }
        },
        computed: {
            registerScreen() {
                if(this.showEmailRegister === false) {
                    return true
                }
                return false
            }
        },
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