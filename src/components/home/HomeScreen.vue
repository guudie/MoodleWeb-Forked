<template>
  <div class="home">
    <HomeCarousel />

    <horizontal-slider>
      <course-slide v-for="(course, index) in courses" 
        :key="index"
        :courseInfo="course"
      >
      </course-slide>
    </horizontal-slider>
  </div>
</template>

<script>
import AuthenApi from "../../services/apis/AuthenApi"
import HomeCarousel from './HomeCarousel.vue'
import HorizontalSlider from './HorizontalSlider.vue'
import CourseSlide from './CourseSlide.vue'

export default {
  name: "HomeScreen",
  data () {
    return {
      courses: [
        {
          name: 'OOP',
          desc: 'This is the course\'s brief description ',
          img: 'https://picsum.photos/seed/345253/400/200/?blur=2',
        },
        {
          name: 'Linear algebra',
          desc: 'This is the course\'s brief description ',
          img: 'https://picsum.photos/seed/345253/200/200/?blur=2',
        },
        {
          name: 'Calculus 1',
          desc: 'This is the course\'s brief description ',
          img: 'https://picsum.photos/seed/345253/400/200/?blur=2',
        },
        {
          name: 'Calculus 2',
          desc: 'This is the course\'s brief description ',
          img: 'https://picsum.photos/seed/345253/400/200/?blur=2',
        },
        {
          name: 'Calculus 3',
          desc: 'This is the course\'s brief description ',
          img: 'https://picsum.photos/seed/345253/400/200/?blur=2',
        },
        {
          name: 'Calculus 4',
          desc: 'This is the course\'s brief description ',
          img: 'https://picsum.photos/seed/345253/400/200/?blur=2',
        },
        {
          name: 'Calculus 5',
          desc: 'This is the course\'s brief description ',
          img: 'https://picsum.photos/seed/345253/400/200/?blur=2',
        },
      ]
    }
  },
  mounted(){
    // AuthenApi.login({email:"client1@gmail.com",password: "123456"}).then((res)=>{
    //   console.log("loginnnnn", res);
    // })
  },
  components: {
    HomeCarousel,
    HorizontalSlider,
    CourseSlide,
  }
};
</script>

<style lang="scss" scope>
.home {
  min-height: 300vh;
}
</style>