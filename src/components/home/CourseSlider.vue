<template>
    <div class="course-slider">
        <div class="title">
            <h2>{{ title }}</h2>
        </div>
        <div class="slides-container" ref="container">
            <div class="course"
                v-for="(course, index) in courses"
                :key="index"
            >
                <div class="img-wrapper">
                    <img :src="course.img" />
                </div>
                
                <div class="course-info">
                    <h3>{{ course.name }}</h3>
                    <p>{{ course.desc }}</p>
                </div>
            </div>
        </div>
            
        <i @click="scrLeft" class="left fas fa-chevron-left scr-btn"></i>
        <i @click="scrRight" class="right fas fa-chevron-right scr-btn"></i>
    </div>
</template>

<script>
export default {
    name: 'CourseSlider',
    data() {
        return {

        }
    },
    props: {
        title: String,
        courses: [],
    },
    methods: {
        scrLeft() {
            this.$refs.container.scrollBy({
                top: 0,
                left: -800,
                behavior: 'smooth'
            })
        },
        scrRight() {
            this.$refs.container.scrollBy({
                top: 0,
                left: +800,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;900&display=swap');

::-webkit-scrollbar {
    height: 6px;
}

::-webkit-scrollbar-track {
    background: #FFF;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.course-slider {
    margin-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
    position: relative;

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
        box-shadow: 0px 2px 5px #888;
    }

    .scr-btn:hover {
        color: #937de4;
    }

    .scr-btn:active {
        background-color: #ddd;
        color: #332077;
    }

    .left {
        left: 20px;
    }
    .right {
        right: 20px;
    }
}

.title {
    text-align: left;
    margin-bottom: 30px;

    h2 {
        font-family: 'Work Sans';
        font-weight: 900;
        color: #2e1e69;
    }
}

.slides-container {
    display: flex;
    overflow-x: auto;
    gap: 10px;
}

.course {
    box-shadow: -2px 3px 5px #20173f;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 10px;

    .img-wrapper {
        width: 300px;

        img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            max-width: 100%;
        }
    }

    .course-info {
        padding: 10px;
        text-align: left;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        //background-color: #584696;
        //color: #FFF;
    }
}



</style>