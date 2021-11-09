<template>
    <div class="home-carousel">
        <div class="slides">
            <img v-for="(slide, index) in slides" 
                :key="index" 
                :src="slide.img" 
                v-show="index===currentSlide"
            />

            <i @click="prev" class="prev fas fa-chevron-left change-slide-btn"></i>
            <i @click="next" class="next fas fa-chevron-right change-slide-btn"></i>
            <div class="indicators">
                <span @click="changeSlide(i)" v-for="i in slidesSize" :key="i" :class="{active: i===currentSlide+1}" class="paginations"></span>
            </div>
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
        },
        changeSlide(i){
            this.currentSlide = i-1;
        }
    }
}
</script>

<style lang="scss" scoped>

.slides {
    position: relative;
    overflow: hidden;
    max-height: 1000px;

    img {
        border-radius: 10px;
    }

    .change-slide-btn {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: calc(50% - 15px);
        cursor: pointer;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        background-color: #6347c7;
        color: #fff;
        box-shadow: 0px 2px 5px #999;
    }
    .change-slide-btn:hover {
        background-color: #6e53d1;
    }
    .change-slide-btn:active {
        background-color: #453094;
        box-shadow: 0px 0px 5px #999;
    }
    
    .next {
        right: 0px;
        margin-right: 20px;
    }
    .prev {
        left: 0px;
        margin-left: 20px;
    }
}

.indicators {
    position: absolute;
    width: 100%;
    bottom: 12px;
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    
    .paginations {
        cursor: pointer;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #FFF;
        box-shadow: 0px 2px 5px #999;

    }
    .active {
        background-color: #6347c7;
    }
}

</style>