<template>
  <div class="details">
    <loading-spinner v-show="!course.chapters" />
    <div class="infor" v-show="course.chapters">
      <header>{{ course.title }}</header>
      <p class="description">{{ course.description }}</p>
      <!-- <h2>What can you learn</h2> -->
      <h2 class="chapter-area">Nội dung khóa học</h2>
      <div v-for="(chap, index) in course.chapters" :key="index">
        <div class="chapter-item">
          <p>{{ chap.title }}</p>
        </div>
      </div>
    </div>
    <div class="sidebar" v-show="course.chapters">
      <div>
        <img :src="course.image" :alt="course.title" />
      </div>
      <header>MIỄN PHÍ</header>
      <button @click="enrollCourse" v-show="!registed">ĐĂNG KÝ NGAY</button>
      <button @click="continueLearn" v-show="registed">
        BẮT ĐẦU HỌC
      </button>
      <div class="prerequisite">
        <h2>TIÊN QUYẾT</h2>
        <ul>
          <li>Trình Độ Cơ Bản</li>
          <li>
            {{ course.chapters ? course.chapters.length : 0 }} bài học để hoàn
            thành
          </li>
          <li>Học mọi lúc mọi nơi</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Course } from "../../services/apis/ApiService";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },
  name: "CourseDetail",
  data() {
    return {
      courses: [],
      course: {},
      isLoggedIn: false,
      registed: false,
      isLoading: false
    };
  },
  methods: {
    enrollCourse() {
      if (!this.isLoggedIn) {
        this.$router.push("/login");
      } else {
        Course.registerCourse({ course_id: this.course.id });
        this.registed = true;
      }
    },
    continueLearn() {
      window.location.href = "https://www.youtube.com/watch?v=PkZNo7MFNFg";
    }
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("access_token");
    const courseId = this.$route.params.courseId;
    Course.getCourseDetail(courseId).then(res => {
      this.course = res.data.items;
      console.log(this.course);
      this.registed = this.course.registed == 1 ? true : false;
    });
  }
};
</script>

<style scoped>
.details {
  display: flex;
  margin: 0rem 10rem;
  height: 100vh;
  padding: 1rem;
  padding-top: 3rem;
  font-family: "Montserrat";
}

.infor {
  width: 70%;
  text-align: left;
}

.infor header {
  font-size: 2.5rem;
  font-weight: bold;
  min-height: 33px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.infor h2 {
  margin-top: 6rem;
  text-transform: uppercase;
}

.sidebar {
  width: 30%;
  height: fit-content;
  border-radius: 10px;
  text-align: center;
  margin-left: 20px;
  /* box-shadow: -6px 6px 0px 2px #3c2b7a; */
  outline: 2px solid #6347c7;
}

.sidebar > header {
  font-size: 1.5rem;
  font-weight: 500;
  min-height: 33px;
  margin-bottom: 12px;
  color: #6347c7;
  margin-top: 2.5rem;
}

.sidebar img {
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  outline: 2px solid #6347c7;
}

.sidebar ul {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.prerequisite {
  margin-top: 4px;
}

button {
  padding: 0.5rem 1rem;
  background-color: #6347c7;
  border: 2px solid #6347c7;
  border-radius: 10px;
  margin-bottom: 1rem;
  font-weight: bold;
  color: white;
}

button:active,
button:hover,
button:focus {
  background: white;
  color: #6347c7;
  outline: none;
}

.loading {
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  margin-top: 10rem;
}
</style>
