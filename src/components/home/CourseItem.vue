<template>
  <div class="slides-container" ref="container">
    <div class="course" v-for="(course, index) in courses" :key="index">
      <div class="img-wrapper">
        <router-link :to="`/courses/${course.id}`">
          <img :src="course.image" />
        </router-link>
      </div>

      <div class="course-info">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
      </div>
    </div>
    <i @click="scrLeft" class="left fas fa-chevron-left scr-btn"></i>
    <i @click="scrRight" class="right fas fa-chevron-right scr-btn"></i>
  </div>
</template>

<script>
export default {
  name: "CourseItem",
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
  padding-top: 5px;
  display: flex;
  overflow-x: auto;
  gap: 10px;
  overflow-y: hidden;
}

.slides-container:hover {
  &::-webkit-scrollbar-thumb {
    background-color: #7759e6;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #937de4;
  }
}

.course {
  box-shadow: -2px 3px 8px 1px #342764;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;

  .img-wrapper {
    width: 300px;
    height: 100px;

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      max-width: 100%;
      //max-height: 100%;
    }
  }

  .course-info {
    padding: 20px;
    text-align: left;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #fff;
    //color: #FFF;
    font-family: "Montserrat";

    h3 {
      font-weight: bold;
      font-size: 22px;
    }

    p {
      font-weight: 500;
      font-size: 15px;
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
