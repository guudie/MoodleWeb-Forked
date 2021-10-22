<template>
  <div id="app">
    <div class="os-container">
      <Header v-if="checkRouter" style="z-index: 1000" />
      <div class="os-main">
        <SideBar v-if="checkRouter" />
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
  computed: {
    checkRouter() {
      return this.$route.path !== "/search" && this.$route.path !== "/register";
    },
  },
  mounted() {
    let lastScrollTop = 0;

    document.onscroll = (event) => {
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        // downscroll code
        console.log("down");
      } else {
        // upscroll code
        console.log("up");
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    // document
    //   .querySelector(".os-container")
    //   .addEventListener("scroll", (event) => {
    //     console.log(event);
    //   });
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
  color: #000;
  text-decoration: none;
}
</style>
