import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from "../components/home/HomeScreen.vue"


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeScreen

    }
  ]
})