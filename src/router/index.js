import Vue from 'vue'
import VueRouter from 'vue-router'

// Components
import HomeScreen from "../components/home/HomeScreen.vue"
import CoursesScreen from "../components/courses/CoursesScreen.vue"


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
    }
  ]
})