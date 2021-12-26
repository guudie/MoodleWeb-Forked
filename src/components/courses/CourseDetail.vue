<template>
  <div class="item">
    <Card class="content">
      <div class="image">
        <img :src="course.img" :alt="course.name" />
      </div>
      <div class="info">
        <h2>{{ course.name }}</h2>
        <p>{{ course.desc }}</p>
      </div>
      <div class="actions">
        <button @click="enrollCourse()" class="btn btn--enroll">ENROLL</button>
      </div>
    </Card>
  </div>
</template>

<script>
import Button from "../login_register/Button.vue";
import Card from "../UI/Card.vue";
export default {
  name: "CourseDetail",
  data() {
    return {
      courses: [
        {
          id: "c1",
          name: "OOP",
          desc: "This is the course's brief description. Later changed",
          img: "https://picsum.photos/seed/345253/1920/640/?blur=2"
        },
        {
          id: "c2",
          name: "Linear algebra",
          desc: "This is the course's brief description. Later changed",
          img: "https://picsum.photos/seed/345253/1920/640/?blur=2"
        },
        {
          id: "c3",
          name: "Calculus 1",
          desc: "This is the course's brief description. Later changed",
          img: "https://picsum.photos/seed/345253/1920/640/?blur=2"
        },
        {
          id: "c4",
          name: "Calculus 2",
          desc: "This is the course's brief description. Later changed",
          img: "https://picsum.photos/seed/345253/1920/640/?blur=2"
        },
        {
          id: "c5",
          name: "Calculus 3",
          desc: "This is the course's brief description. Later changed",
          img: "https://picsum.photos/seed/345253/1920/640/?blur=2"
        },
        {
          id: "c6",
          name: "Calculus 4",
          desc: "This is the course's brief description. Later changed",
          img: "https://picsum.photos/seed/345253/1920/640/?blur=2"
        },
        {
          id: "c7",
          name: "Calculus 5",
          desc: "This is the course's brief description. Later changed",
          img: "https://picsum.photos/seed/345253/1920/640/?blur=2"
        }
      ],
      course: {
        id: "",
        name: "",
        desc: "",
        img: ""
      },
      isLoggedIn: false
    };
  },
  components: {
    Card,
    Button
  },
  created() {
    const courseId = this.$route.params.courseId;
    // console.log(courseId);
    this.course = this.courses.find(course => course.id === courseId);
    // console.log(this.user)
  },
  methods: {
    enrollCourse() {
      if(!this.isLoggedIn) {
        this.$router.push('/login')
      } else {

      }
    }
  },
  mounted() {
    this.isLoggedIn = localStorage.getItem("access_token");
  }
};
</script>

<style scoped>
.item {
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
}

.content {
  padding: 0;
}

.info {
  padding: 1rem;
  text-align: center;
}

.image {
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;
}

.image img {
  width: 40rem;
  height: 100%;
  object-fit: cover;
}

.info h2,
.info h3,
.info p {
  margin: 0 0 0.5rem 0;
}

.actions {
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;
}

.btn--enroll {
  background-color: transparent;
  border: 1px solid steelblue;
}

.btn--enroll:hover,
.btn--enroll:active {
  background-color: rgb(66, 134, 190);
  color: white;
  outline: none;
}
</style>
