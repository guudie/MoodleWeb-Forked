import Vue from "vue";
import VueRouter from "vue-router";

import HomeScreen from "../components/home/HomeScreen.vue";
import CoursesScreen from "../components/courses/CoursesScreen.vue";
import Information from "../components/infomation/InfoScreen.vue";
import Register from "../components/login_register/RegisterScreen.vue";
import LoginScreen from "../components/login_register/LoginScreen.vue";

Vue.use(VueRouter);

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
      path: "/profile",
      component: Information
    },
    { path: "/register", component: Register },
    {
      path: "/login",
      component: LoginScreen
    }
  ]
});
