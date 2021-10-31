<template>
        <form @submit="onSubmit" class="email-login">
            <div class="form-control">
                <label class="email">Email</label>
            </div>
            <div class="form-control">
                <input v-model="text" type="text" name="phoneNum" placeholder="Nhập email">
            </div>
            <div class="form-control">
                <input v-model="verify" type="text" name="verify" placeholder="Nhập mật khẩu">
            </div>
            <div class="form-control">
                <input type="submit" value="Đăng nhập" class="sign-in-btn">
            </div>
        </form>
</template>

<script>
    import Button from '../constructs/Button.vue'
    export default {
        name: 'LoginByEmail',
        components: {
            Button
        },
        props: {
            users: []
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()
                    if(!this.text) {
                        alert('Please add an email')
                        return
                    }
                    if(!this.verify) {
                        alert('Please add a password')
                        return
                    }

                    for(var i = 0; i < this.users.length; i++) {
                        if(this.text === this.users[i].email && this.verify === this.users[i].password) {
                            alert('Successfully login!!')
                            this.$router.push('/')
                            this.text = ''
                            this.verify = ''
                            return
                        }
                    }
                    alert('Wrong email or password!!')
            },
        },
        data() {
            return {
                text: '',
                verify: '',
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
.email-login {
    width: 80%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
}
h1 {
    color: #000;
    font-weight: bold;
    margin-bottom: 50px;
}
.sign-up {
    margin-top: 20px;
}
.form-control {
    width: 100%;
    align-items: center;
    margin: 0 auto;
    border: none;
    display: flex;
}
.form-control label {
    display: block;
}
.form-control input {
    width: 100%;
    height: 44px;
    padding: 3px 7px;
    font-size: 17px;
    border: 2px solid #dce0e3;
    border-radius: 25px;
    margin-top: 10px;
}
.form-control input:focus {
    outline: none;
}
.phoneNum {
    text-align: start;
    flex: 1;
}
.loginWithEmail {
    text-align: end;
    flex: 1;
}
.send-btn {
    padding: 9px 10px;
    background: #dce0e3;
}
.sign-in-btn {
    margin-top: 20px;
    letter-spacing: 2px;
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    border-radius: 25px;
    width: 100%;
    background: #91ede5;
}
.form-control p {
    margin-bottom: 0;
}

/* Email */
.email {
    text-align: start;
    flex: 1;
}
.loginWithPhoneNum {
    text-align: end;
    flex: 1;
}
</style>