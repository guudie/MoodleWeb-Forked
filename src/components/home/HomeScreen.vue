<template>
  <div class="home">
    <HomeCarousel />
  </div>
</template>

<script>
import AuthenApi from "../../services/apis/AuthenApi"
import HomeCarousel from './HomeCarousel.vue'

export default {
  name: "HomeScreen",
  mounted(){
    // AuthenApi.login({email:"client1@gmail.com",password: "123456"}).then((res)=>{
    //   console.log("loginnnnn", res);
    // })
  },
  components: {
    HomeCarousel,
  }
};
</script>

<style lang="scss" scope>
.home {
  min-height: 300vh;
  z-index: -10000;
}
</style>