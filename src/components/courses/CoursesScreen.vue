<template>
  <div class="courses">
    <LoadingSpinner class="loading" v-show="isLoading" />
    <div class="create-course-area" v-show="!isLoading && isTeacher">
      <button class="create-course-btn" @click="createCourse">
        Create Course
      </button>
    </div>
    <ul class="course-grid__list">
      <li v-for="(course, index) in courses" :key="index" class="item">
        <router-link :to="`/courses/${course.id}`">
          <img :src="course.image" :alt="course.title" class="image" />
        </router-link>

        <div class="info">
          <h1 class="title">{{ course.title }}</h1>
          <div class="short_title">
            <i class="fas fa-users"></i>
            <span>{{ course.short_title }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Course } from "../../services/apis/ApiService";
import { Authen } from "../../services/apis/ApiService";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  name: "CoursesScreen",
  components: {
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

<style scoped>
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

.course-grid__list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.item {
  width: 20rem;
  min-height: 18rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  text-align: left;
  border: 2px solid #ccc;
  border-radius: 10px;
}

.image {
  width: 100%;
  height: 10rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.title {
  font-size: 2rem;
  margin-top: 1rem;
  width: 100%;
  overflow-x: hidden;
}
</style>
