<template>
  <div class="courses">
    <LoadingSpinner class="loading" v-show="isLoading" />
    <div class="create-course-area" v-show="!isLoading && isTeacher">
      <button class="create-course-btn" @click="createCourse">
        Create Course
      </button>
    </div>
    <CourseItemAll v-show="!isLoading" :courses="courses" />
  </div>
</template>

<script>
import CourseItemAll from "./CourseItem.vue";
import { Course } from "../../services/apis/ApiService";
import { Authen } from "../../services/apis/ApiService";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  name: "CoursesScreen",
  components: {
    CourseItemAll,
    LoadingSpinner
  },
  data() {
    return {
      courses: [],
      isLoading: true,
      isTeacher: false
    };
  },
  methods: {
    createCourse() {
      this.$router.push("/course/create");
    }
  },
  mounted() {
    Course.getList(0).then(res => {
      this.courses = res.data.items;
      this.isLoading = false;
    });
    if (localStorage.getItem("access_token")) {
      Authen.getUser().then(res => {
        this.user = res.data.items;
        this.isTeacher = this.user.level == 1 ? true : false;
      });
    }
  }
};
</script>

<style>
.loading {
  height: 100vh;
}
.create-course-area {
  text-align: right;
  margin-right: 10px;
}
.create-course-btn {
  background-color: whitesmoke;
  color: black;
  border-radius: 6px;
  padding: 0.5rem;
  border: 1px solid steelblue;
  outline: none;
  cursor: pointer;
}
.create-course-btn:hover,
.create-course-btn:focus,
.create-course-btn:active {
  background-color: steelblue;
  color: whitesmoke;
  border: 1px solid steelblue;
  outline: none;
}
</style>
