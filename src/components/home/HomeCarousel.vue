<template>
    <div class="home-carousel">
        <b-container>
            <b-carousel
                id="carousel-1"
                :interval="0"
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333;"
                img-height="10"
            >
                <b-carousel-slide v-for="(slide, index) in slides" :key="index" :img-src="slide.img"></b-carousel-slide>
            </b-carousel>
        </b-container>
        
    </div>
</template>

<script>

export default {
    name: 'HomeCarousel',
    data() {
        return {
            slides: [
                {
                    img: "https://picsum.photos/1024/480/?image=52",
                    text: '',
                },
                {
                    img: "https://picsum.photos/1024/480/?image=54",
                    text: '',
                },
                {
                    img: "https://picsum.photos/1024/480/?image=58",
                    text: '',
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.home-carousel {
}

</style>