<template>
    <div class="forum-card">
        <div class="visit">
            <div class="visit-func">
                <h2>Visit the Forum!</h2>
                <p class="checkout">Checkout our forum!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio recusandae, voluptates soluta aliquid nulla nisi blanditiis ducimus vitae fuga quod quam, minima quis, nam suscipit officia ex? Quas, non officiis.</p>
            </div>
        </div>
        <div class="img-wrapper">
            <img :src="'https://picsum.photos/seed/23426/' + 800 + '/400/?blur=2'" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ForumCard',
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@500;900&display=swap');

.forum-card {
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 100%;
    min-height: 500px;
    margin-top: 50px;
    border-radius: 10px;
    background: rgb(83,108,235);
    background: linear-gradient(245deg, rgba(83,108,235,1) 0%, rgba(161,106,242,1) 26%, rgba(187,115,215,1) 50%, rgba(235,136,156,1) 91%);
    overflow: hidden;

    .visit {
        position: relative;
        flex: 40%;
        height: 400px;
        align-self: center;

        .visit-func {
            position: absolute;
            font-family: 'Work Sans';
            font-weight: 500;
            right: 20px;
            margin-left: 40px;
            max-width: 400px;
            text-align: justify;

            .checkout {
                margin-top: 50px;
            }

            h2 {
                background-color: #4d3a94;
                padding: 10px;
                color: #fff;
                cursor: pointer;
            }
        }
    }

    .img-wrapper {
        position: relative;
        align-self: center;
        height: 400px;
        flex: 60%;

        img {
            position: absolute;
            height: 95%;
            left: 0;
            top: 0px;
            bottom: 0px;
            box-shadow: 3px 3px 8px 2px #3e2c80;
            border-radius: 10px;
        }
    }
}

</style>