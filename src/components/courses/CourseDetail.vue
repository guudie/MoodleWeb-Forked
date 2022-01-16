<template>
  <div class="details">
    <loading-spinner v-show="!course.chapters" />
    <div
      class="create-course-area"
      v-show="!isLoading && isTeacher && course.chapters && editable"
    >
      <button class="create-course-btn" @click="editCourse" v-show="!isEditing">
        Sửa
      </button>
      <button class="create-course-btn" @click="editCourse" v-show="isEditing">
        Lưu
      </button>
    </div>
    <div class="infor" v-show="course.chapters && !isEditing">
      <header>{{ course.title }}</header>
      <p class="description">{{ course.description }}</p>
      <!-- <p class="intro">{{ course.intro.content }}</p> -->
      <h2 class="chapter-area">Nội dung khóa học</h2>
      <div v-for="(chap, index) in course.chapters" :key="index">
        <div class="chapter-item">
          <p>{{ chap.title }}</p>
        </div>
      </div>
      <div
        v-if="!course.chapters || course.chapters.length === 0"
        class="chapter-item"
      >
        <p>Đang cập nhật</p>
      </div>
    </div>

    <div class="infor" v-show="course.chapters && isEditing">
      <input v-model="course.title" class="header" />
      <textarea v-model="course.description" class="infor-description" />
      <textarea v-model="course.intro" class="infor-intro" />

      <h2 class="chapter-area">Nội dung khóa học</h2>
      <div v-for="(chap, index) in course.chapters" :key="index">
        <div class="chapter-item">
          <input
            v-model="course.chapters[index].title"
            class="chapter-item__content"
          />
        </div>
      </div>
      <div class="add-chapter-btn">
        <button type="button" @click="addChapter" v-show="!showTitleChapter">
          Thêm chương
        </button>
        <button type="button" @click="addChapter" v-show="showTitleChapter">
          Đóng
        </button>
      </div>
      <input
        v-model="chapterTitle"
        placeholder="Nhập tiêu đề chương"
        v-show="showTitleChapter"
      />

      <p v-show="showTitleRequest" style="color: red">
        Vui lòng nhập tiêu đề chương học
      </p>
      <div v-show="showTitleChapter" class="input-chapter-area">
        <input
          v-model="chapterContent"
          placeholder="Nhập nội dung chương (Tùy chọn)"
        />
        <button @click="realAdd" type="button" class="add-chapter-icon">
          +
        </button>
      </div>
    </div>

    <div class="sidebar" v-show="course.chapters">
      <div>
        <img :src="course.image" :alt="course.title" />
      </div>
      <header>MIỄN PHÍ</header>
      <button @click="enrollCourse" v-show="!registed">ĐĂNG KÝ NGAY</button>
      <button @click="continueLearn" v-show="registed">BẮT ĐẦU HỌC</button>
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
      <button @click="unregister" v-show="registed" class="unregister-btn">
        HỦY ĐĂNG KÝ
      </button>
    </div>
  </div>
</template>

<script>
import { Course } from "../../services/apis/ApiService";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
import { Authen } from "../../services/apis/ApiService";

export default {
  components: { LoadingSpinner },
  name: "CourseDetail",
  data() {
    return {
      courses: [],
      course: {},
      isLoggedIn: false,
      registed: false,
      editable: 0,
      isLoading: false,
      isTeacher: false,
      isEditing: false,
      showTitleChapter: false,
      chapterTitle: "",
      chapterContent: "",
      showTitleRequest: false,
    };
  },
  methods: {
    enrollCourse() {
      if (!this.isLoggedIn) {
        this.$router.push("/login");
      } else {
        Course.registerCourse({ course_id: this.course.id }).then(() => {
          this.registed = true;
          this.$store.dispatch("getRegisteredCourse");
        });
      }
    },
    unregister() {
      Course.unRegisterCourse({ course_id: this.course.id }).then(() => {
        this.registed = false;
        this.$store.dispatch("getRegisteredCourse");
      });
    },
    continueLearn() {
      window.location.href = "https://www.youtube.com/watch?v=PkZNo7MFNFg";
    },
    editCourse() {
      this.isEditing = !this.isEditing;
      if (!this.isEditing) {
        Course.editCourseDetail(this.course);
      }
    },
    addChapter() {
      this.showTitleChapter = !this.showTitleChapter;
    },
    realAdd() {
      if (!this.chapterTitle) {
        this.showTitleRequest = true;
        return;
      }
      this.course.chapters.push({
        title: this.chapterTitle,
        content: this.chapterContent || "",
        video: "",
      });
      this.chapterTitle = "";
      this.chapterContent = "";
      this.showTitleChapter = false;
    },
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("access_token");
    const courseId = this.$route.params.courseId;
    Course.getCourseDetail(courseId).then((res) => {
      this.course = res.data.items;
      this.registed = this.course.registed == 1 ? true : false;
      this.isLoading = false;
      this.editable = this.course.editor;
      console.log(this.course);
    });
    if (localStorage.getItem("access_token")) {
      Authen.getUser().then((res) => {
        const user = res.data.items;
        this.isTeacher = user.level == 1 ? true : false;
        this.isLoading = false;
      });
    }
  },
};
</script>

<style scoped>
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
  width: 5rem;
  margin-top: 10px;
}
.create-course-btn:hover,
.create-course-btn:focus,
.create-course-btn:active {
  background-color: steelblue;
  color: whitesmoke;
  border: 1px solid steelblue;
  outline: none;
}
.details {
  display: flex;
  margin: 0rem 10rem;
  height: 100%;
  padding: 1rem;
  padding-top: 3rem;
  font-family: "Montserrat";
  min-height: 100vh;
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
  margin-top: 10px;
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

.unregister-btn {
  background-color: red;
  border: 2px solid red;
}

.unregister-btn:hover,
.unregister-btn:active,
.unregister-btn:focus {
  background: white;
  color: rgb(206, 9, 9);
  outline: none;
}

.header {
  margin-top: 10px;
  border-radius: 4px;
  font-size: 1.5rem;
  outline: none;
  border: 1px solid #ccc;
  padding: 0.14rem;
  padding-left: 10px;
  display: block;
  width: 100%;
}

.infor-description,
.infor-intro {
  display: block;
  width: 100%;
  height: 10rem;
  margin-top: 25px;
}

.chapter-item__content {
  width: 100%;
  margin-top: 5px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #ccc;
  padding: 0.14rem;
  padding-left: 10px;
}

.input-chapter-area {
  display: flex;
  align-items: center;
}

.add-chapter-btn {
  margin-top: 5px;
}

.add-chapter-icon {
  margin-bottom: 15px;
  margin-left: 10px;
  border-radius: 5px;
  background: #6347c7;
  color: white;
  outline: none;
  border: 1px solid #6347c7;
}
</style>
