<template>
  <div class="home">
    <HomeCarousel />
    <Overview />

    <CourseSlider title="These are our courses" :courses="this.courses" />

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
    let cateId;
    Course.getCategory().then(res => {
      cateId = res.data.items[0].id;
    });
    Course.getList(0).then(res => (this.courses = res.data.items));
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
