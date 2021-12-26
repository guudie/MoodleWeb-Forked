<template>
  <div class="home">
    <HomeCarousel />
    <Overview />

    <CourseSlider title="Khóa học nổi bật" :courses="this.courses" />

    <ForumCard />
  </div>
</template>

<script>
import HomeCarousel from "./HomeCarousel.vue";
import CourseSlider from "./CourseSlider.vue";
import ForumCard from "./ForumCard.vue";
import Overview from "./Overview.vue";
import { Course } from "../../services/apis/ApiService";

export default {
  name: "HomeScreen",
  data() {
    return {
      courses: []
    };
  },
  mounted() {
    // AuthenApi.login({email:"client1@gmail.com",password: "123456"}).then((res)=>{
    //   console.log("loginnnnn", res);
    // })
    // Course.getList(0).then(res => (this.courses = res.data.items));
    // Course.getList(0).then(res => console.log(res.data.items));
    Course.getCategory().then(res => console.log(res.data.items))
    Course.getList(0).then(res=> this.courses = (res.data.items))
  },
  components: {
    HomeCarousel,
    CourseSlider,
    ForumCard,
    Overview
  }
};
</script>

<style lang="scss" scope></style>
