<template>
  <div class="slides-container" ref="container">
    <div class="course" v-for="(course, index) in courses" :key="index">
      <div class="img-wrapper">
        <router-link :to="`/courses/${course.id}`">
          <img class="imgg" :src="course.image" :alt="course.title" />
        </router-link>
      </div>

      <div class="course-info">
        <h3>{{ course.title }}</h3>
        <div class="side-info">
          <i class="fas fa-users"></i>
          <span>{{ course.short_title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseItemAll",
  props: {
    courses: Array
  },
  methods: {
    scrLeft() {
      this.$refs.container.scrollBy({
        top: 0,
        left: -800,
        behavior: "smooth"
      });
    },
    scrRight() {
      this.$refs.container.scrollBy({
        top: 0,
        left: +800,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.slides-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  overflow-y: auto;
  height: 100vh;
}

.course {
  box-shadow: -2px 3px 8px 1px #342764;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
  max-width: 300px;

  .img-wrapper {
    // width: 300px;
    height: 155px;
    overflow: hidden;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      max-width: 100%;
      object-fit: contain;
      //max-height: 100%;
    }
  }

  .course-info {
    width: 300px;
    padding: 20px;
    text-align: left;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #fff;
    //color: #FFF;
    font-family: "Montserrat";

    h3 {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-weight: bold;
      font-size: 22px;
    }

    p {
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 0;
    }

    .side-info{
      display: block;
      i{
        color: #4e4e4e;
      }
      span{
        margin-left: 8px;
      }
    }
  }
}
.scr-btn {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #fff;
  color: #6347c7;
  box-shadow: 0px 2px 5px #412f85;
}

.scr-btn:hover {
  color: #937de4;
}

.left {
  left: 20px;
}
.right {
  right: 20px;
}
</style>
