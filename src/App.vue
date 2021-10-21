<template>
  <div id="app">
    <div class="os-container">
      <Header />
      <div class="os-main">
        <SideBar />
        <div class="os-body">
          <router-view />
          <Footer />
        </div>
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
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    Header,
    SideBar,
    Footer,
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
      display: flex;
      .os-body {
        width: 100%;
      }
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
  color: #42b983;
}
</style>
