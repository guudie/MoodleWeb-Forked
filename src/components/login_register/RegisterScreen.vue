<template>
    <div class="container">
        <h1>Đăng ký tài khoản Edulanthropy</h1>
        <RegisterByEmail @add-user="AddUser" :users="this.users" v-show="showEmailRegister"></RegisterByEmail>
        <router-view></router-view>
        <div v-show="registerScreen" class="login-button">
            <Button @btn-click="onClick" 
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
                // gửi cái này lên db
                this.users = [...this.users, newUser]
                console.log(this.users)
            }
        },
        data() {
            return {
                showEmailRegister: false,
                users: [],
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
        created() {
            this.users = [
                {
                    name: 'Nguyễn Đức Hiếu',
                    email: '123@gmail.com',
                    level: 0,
                    password: '123'
                },
                {
                    name: 'Dương Quang Hùng',
                    email: '12@gmail.com',
                    level: 0,
                    password: '12'
                },
                {
                    name: 'Phạm Văn Thật',
                    email: '1@gmail.com',
                    level: 1,
                    password: '1'
                }
            ]
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