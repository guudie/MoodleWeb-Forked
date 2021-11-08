<template>
  <div id="app">
    <div class="os-container">
      <Header v-if="checkRouter"  />
      <SideBar v-if="checkRouter" />
      <div class="os-main">
          <router-view />
          <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../src/components/constructs/Header.vue";
import SideBar from "../src/components/constructs/SideBar.vue";
import Footer from "../src/components/constructs/Footer.vue";

export default {
  name: "app",
  data() {
    return {
  
    };
  },
  components: {
    Header,
    SideBar,
    Footer,
  },
  computed: {
    checkRouter() {
      return this.$route.path !== "/search" && this.$route.path !== "/register";
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .os-container {
    .os-main {
        width: calc(100% - 96px);   // để width: 96px thì bị mấy cái div trong home đè lên
        margin-top: 86px;
        margin-left: 96px;
        position: relative;
    }
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #000;
  text-decoration: none;
}

@media screen and (max-width:768px ) {
  .os-main{
    margin-left: 0 !important;
  }
}
</style>
