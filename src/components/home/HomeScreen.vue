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
    Course.getList(0).then(res => (this.courses = res.data.items.slice(0,4)));
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
