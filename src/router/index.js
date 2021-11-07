import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import HomeScreen from "../components/home/HomeScreen.vue"
import CoursesScreen from "../components/courses/CoursesScreen.vue"
import Register from "../components/login_register/RegisterScreen"
import LoginScreen from "../components/login_register/LoginScreen"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeScreen
    },
    {
      path: "/courses",
      component: CoursesScreen
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/login",
      component: LoginScreen
    }
  ]
})