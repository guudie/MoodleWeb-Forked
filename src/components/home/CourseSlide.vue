<template>
    <div class="course-slide">
        <div class="image-wrap">
            <img :src="courseInfo.img" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'CourseSlide',
    data() {
        return {

        }
    },
    props: {
        courseInfo: {},
    }
}
</script>

<style>

.course-slide {
    
}

</style>