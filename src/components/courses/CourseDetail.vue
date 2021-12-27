<template>
  <div class="details">
    <div class="infor">
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
    <div class="sidebar">
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
          <li>{{course.chapters.length }} bài học để hoàn thành</li>
          <li>Học mọi lúc mọi nơi</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Course } from "../../services/apis/ApiService";
export default {
  name: "CourseDetail",
  data() {
    return {
      courses: [],
      course: {},
      isLoggedIn: false,
      registed: false
    };
  },
  methods: {
    enrollCourse() {
      if (!this.isLoggedIn) {
        this.$router.push("/login");
      } else {
        Course.registerCourse({ course_id: this.course.id });
        this.registed = true
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
  border-radius: 12px;
  height: 30rem;
  border: 1px solid #ccc;
  text-align: center;
}

.sidebar > header {
  font-size: 1.5rem;
  font-weight: bold;
  min-height: 33px;
  margin-bottom: 12px;
  color: steelblue;
  margin-top: 2.5rem;
}

.sidebar img {
  width: 100%;
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
  background-color: white;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
}

button:active,
button:hover,
button:focus {
  background: steelblue;
  color: white;
  outline: none;
}
</style>
