<template>
    <div class="home-carousel">
        <div fluid class="slides">
            <img v-for="(slide, index) in slides" 
                :key="index" 
                :src="slide.img" 
                v-show="index===currentSlide"
            />

            <i @click="prev" class="prev fas fa-chevron-left"></i>
            <i @click="next" class="next fas fa-chevron-right"></i>
        </div>
        
    </div>
</template>

<script>

export default {
    name: 'HomeCarousel',
    data() {
        return {
            slides: [
                {
                    img: "https://picsum.photos/1024/200/?image=52",
                    text: '',
                },
                {
                    img: "https://picsum.photos/1024/200/?image=54",
                    text: '',
                },
                {
                    img: "https://picsum.photos/1024/200/?image=58",
                    text: '',
                }
            ],
            currentSlide: 0,
            slidesSize: 3,
        }
    },
    methods: {
        prev() {
            if(this.currentSlide===0)
                this.currentSlide = this.slidesSize - 1;
            else
                this.currentSlide--;
        },
        next() {
            this.currentSlide++;
            this.currentSlide %= this.slidesSize;
        }
    }
}
</script>

<style lang="scss" scoped>

.slides {
    position: relative;
    overflow: hidden;

    img {
        border-radius: 10px;
    }

    i {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: calc(50% - 20px);
        cursor: pointer;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        background-color: #6347c7;
        color: #fff;
    }
    
    .next {
        right: 0px;
        margin-right: 100px;
    }
    .prev {
        left: 0px;
        margin-left: 100px;
    }
}

</style>