<template>
  <div class="home">
    <h1>This is Home.....</h1>
  </div>
</template>

<script>
import AuthenApi from "../../services/apis/AuthenApi"
export default {
  name: "HomeScreen",
  mounted(){
    // AuthenApi.login({email:"client1@gmail.com",password: "123456"}).then((res)=>{
    //   console.log("loginnnnn", res);
    // })
  }
};
</script>

<style lang="scss" scope>
.home {
  min-height: 300vh;
}
</style>