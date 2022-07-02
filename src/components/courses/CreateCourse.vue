<template>
  <div class="container">
    <h3>Đăng khoá học</h3>
    <form @submit="onSubmit" class="course-create">
      <!-- Tieu de -->
      <div class="form-control">
        <label class="title">Tiêu đề khóa học</label>
      </div>
      <div class="form-control">
        <input v-model="title" placeholder="Nhập tiêu đề khóa học" />
      </div>
      <div v-show="showTitleRequest" class="form-control" style="color:red">
        <p>Vui lòng nhập tiêu đề khóa học</p>
      </div>
      <!-- Mo ta -->
      <div class="form-control">
        <label class="description">Mô tả</label>
      </div>
      <div class="form-control">
        <input v-model="desc" placeholder="Nhập mô tả khóa học" />
      </div>
      <div v-show="showDescRequest" class="form-control" style="color:red">
        <p>Mô tả phải dài hơn 5 ký tự</p>
      </div>
      <!-- Phan loai -->
      <div class="cate-area">
        <select
          @change="onChange($event)"
          v-for="(cate, index) in cates"
          :key="index"
        >
          <option>--- Chọn loại khóa học ---</option>
          <option :value="cate.id">{{ cate.title }}</option>
        </select>
      </div>
      <div v-show="showCateRequest" class="form-control" style="color:red">
        <p>Vui lòng chọn loại khóa học</p>
      </div>
      <!-- Hinh anh -->
      <div class="form-control">
        <label class="image">Ảnh nền</label>
      </div>
      <div class="form-control">
        <input v-model="image" placeholder="Nhập link ảnh" />
      </div>
      <!-- Intro -->
      <div class="form-control">
        <label class="intro">Giới thiệu</label>
      </div>
      <div class="form-control">
        <input v-model="intro" placeholder="Nhập giới thiệu tổng quan" />
      </div>
      <div v-show="showIntroRequest" class="form-control" style="color:red">
        <p>Vui lòng nhập giới thiệu</p>
      </div>
      <!-- chapter -->
      <div class="add-chapter-btn">
        <button type="button" @click="addChapter" v-show="!showTitleChapter">
          Thêm chương
        </button>
        <button type="button" @click="addChapter" v-show="showTitleChapter">
          Đóng
        </button>
      </div>
      <div v-for="(chap, index) in chapters" :key="index">
        <p>{{ chap.title }}</p>
      </div>
      <div v-show="showTitleChapter" class="form-control">
        <input v-model="chapterTitle" placeholder="Nhập tiêu đề chương" />
      </div>
      <div
        v-show="showChapterTitleRequest"
        class="form-control"
        style="color:red"
      >
        <p>Vui lòng nhập tiêu đề chương học</p>
      </div>
      <div v-show="showTitleChapter" class="form-control input-chapter-area">
        <input
          v-model="chapterContent"
          placeholder="Nhập nội dung chương (Tùy chọn)"
        />
        <button @click="realAdd" type="button" class="add-chapter-icon">
          +
        </button>
      </div>
      <div class="form-control">
        <input type="submit" value="Tạo" class="create-btn" />
      </div>
    </form>
  </div>
</template>

<script>
import Card from "../UI/Card.vue";
import { Course } from "../../services/apis/ApiService";
export default {
  name: "CreateCourse",
  components: {
    Card
  },
  data() {
    return {
      title: "",
      desc: "",
      intro: "",
      chapters: [],
      chapterTitle: "",
      chapterContent: "",
      image: "",
      cate: 0,
      cates: [],
      showTitleChapter: false,
      showTitleRequest: false,
      showDescRequest: false,
      showIntroRequest: false,
      showCateRequest: false,
      showChapterTitleRequest: false
    };
  },
  methods: {
    onChange(e) {
      this.cate = e.target.value;
    },
    addChapter() {
      this.showTitleChapter = !this.showTitleChapter;
    },
    realAdd() {
      if (!this.chapterTitle) {
        this.showChapterTitleRequest = true;
        return;
      }
      this.chapters.push({
        title: this.chapterTitle,
        content: this.chapterContent || "",
        video: ""
      });
      this.chapterTitle = ""
      this.chapterContent = ""
      this.showTitleChapter = false
    },
    onSubmit(event) {
      event.preventDefault();
      this.showTitleRequest = this.title ? false : true;
      this.showDescRequest = this.desc.length >= 5 ? false : true;
      this.showIntroRequest = this.intro ? false : true;
      this.showCateRequest = this.cate != 0 ? false : true;
      if(!this.chapterTitle && this.chapterContent) {
        this.showChapterTitleRequest = true
      }
      if (
        this.showTitleRequest ||
        this.showDescRequest ||
        this.showIntroRequest ||
        this.showChapterRequest ||
        this.showCateRequest ||
        this.showChapterTitleRequest
      ) {
        return;
      }
      const newCourse = {
        cate_id: this.cate,
        title: this.title,
        short_title: this.title.substr(0, 6),
        description: this.desc,
        intro: this.intro,
        chapters: this.chapters,
        image: this.image || ""
      };
      Course.createCourse(newCourse).then(res => this.$router.push('/'))
    }
  },
  mounted() {
    Course.getCategory().then(res => (this.cates = res.data.items));
  }
};
</script>

<style scoped>
.container {
  width: 640px;
  margin: 30px auto;
  overflow: auto;
  min-height: 600px;
  padding: 30px;
  border: 1px solid slateblue;
  border-radius: 5px;
  font-family: "Montserrat";
}
.course-create {
  width: 80%;
  align-items: center;
  text-align: center;
  margin: 20px auto 0;
}
h1 {
  color: #000;
  font-weight: bold;
  margin-bottom: 50px;
}
.sign-up {
  margin-top: 20px;
}
.form-control {
  width: 100%;
  align-items: center;
  margin: 0 auto;
  border: none;
  display: flex;
}
.form-control label {
  display: block;
  font-weight: bold;
}
.form-control input {
  width: 100%;
  height: 44px;
  padding: 3px 15px;
  font-size: 17px;
  border: 2px solid #dce0e3;
  border-radius: 25px;
  margin-top: 0px;
  margin-bottom: 15px;
}
.form-control input:focus {
  outline: none;
}
.create-btn {
  margin-top: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  border-radius: 25px;
  width: 100%;
  background: #6347c7;
  border: 2px solid #6347c7;
}

.form-control p {
  margin-bottom: 0;
}

.title {
  text-align: start;
  flex: 1;
}

select {
  padding: 10px;
  border-radius: 6px;
}

.add-chapter-btn {
  text-align: left;
  margin-left: 10px;
}

.add-chapter-btn > button {
  border-radius: 6px;
  font-weight: bold;
  font-size: 16px;
  color: #6347c7;
  padding: 10px 2px;
  border-radius: 25px;
  width: 10rem;
  outline: none;
  border: 2px solid #6347c7;
  background-color: white;
}

.input-chapter-area {
  display: flex;
  align-items: center;
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
