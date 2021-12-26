<template>
  <div class="course-slider">
    <div class="title">
      <h2>{{ title }}</h2>
      <router-link :to="'/courses'">
        <div class="view-more">
          <div>View more</div>
          <i class="fas fa-chevron-right"></i>
        </div>
      </router-link>
    </div>

    <CourseItem :courses="courses" />
  </div>
</template>

<script>
import CourseItem from "./CourseItem.vue";
export default {
  name: "CourseSlider",
  data() {
    return {};
  },
  components: {
    CourseItem
  },
  props: {
    title: String,
    courses: []
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  height: 5px;
  scroll-behavior: smooth;
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 2.5px;
}

.course-slider {
  background: rgb(50, 6, 117);
  background: linear-gradient(
    41deg,
    rgba(50, 6, 117, 1) 0%,
    rgba(62, 35, 126, 1) 17%,
    rgba(107, 56, 196, 1) 55%,
    rgba(179, 5, 198, 1) 96%
  );
  margin-top: 50px;
  padding: 20px 60px;
  position: relative;
  border-radius: 10px;
  box-shadow: -6px 6px 0px 2px #2b1c61;
  // outline: 2px solid #3c2b7a;
}

.title {
  text-align: left;
  margin-bottom: 30px;
  position: relative;

  h2 {
    font-family: "Montserrat";
    font-weight: 700;
    color: #fff;
  }

  .view-more {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 20px;
    right: 20px;
    gap: 4px;
    color: #fff;

    div {
      font-family: "Montserrat";
      font-weight: 500;
    }
  }

  .view-more:hover div,
  :hover i {
    cursor: pointer;
    color: #f2a8fa;
  }
}
</style>
