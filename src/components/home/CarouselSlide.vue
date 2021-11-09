<template>
    <div class="carousel-slide">
        <transition :name="direction">
            <div v-show="activeSlide===index" class="activeSlide">
                <img :src="slideInfo.img" />
                <div class="content">
                    <h2>{{ slideInfo.title }}</h2>
                    <p>{{ slideInfo.text }}</p>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'CarouselSlide',
    data() {
        return {

        }
    },
    props: {
        activeSlide: Number,
        index: Number,
        slideInfo: {},
        direction: String,
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;900&display=swap');

// .activeSlide {
//     position: relative;
//     width: 1024px;
//     margin-left: 100px;
// }

img {
    border-radius: 10px;
    //position: relative;
}

.content {
    position: absolute;
    bottom: 16px;
    left: 16px;
    text-align: left;
    margin-left: calc((100% - min(100%, 1600px))/2);

    h2 {
        font-family: 'Work Sans';
        font-weight: 900;
        text-shadow: 0px 0px 5px #555;
        color: #FFF;
    }
    p {
        font-family: 'Work Sans';
        font-weight: 500;
        color: #FFF;
    }
}

.left-enter-active {
    animation: leftInAnimation 0.6s ease-in-out;
}

.left-leave-active {
    animation: leftOutAnimation 0.6s ease-in-out;
}

@keyframes leftInAnimation {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}
@keyframes leftOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
}

.right-enter-active {
    animation: rightInAnimation 0.6s ease-in-out;
}

.right-leave-active {
    animation: rightOutAnimation 0.6s ease-in-out;
}

@keyframes rightInAnimation {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
@keyframes rightOutAnimation {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
}

</style>