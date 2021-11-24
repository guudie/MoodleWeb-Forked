import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import HomeScreen from "../components/home/HomeScreen.vue"
import CoursesScreen from "../components/courses/CoursesScreen.vue"
import Information from "../components/infomation/InfoScreen.vue"
import PasswordChange from "../components/infomation/PasswordChangeScreen.vue"

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
      path: "/info",
      component: Information
    },
    {
      path: "/info/changepassword",
      component: PasswordChange
    }
  ]
})