<template>
    <div class="forum-card">
        <div class="visit-button">
            <h2>Visit the Forum!</h2>
        </div>
        <div class="img-wrapper">
            <img :src="'https://picsum.photos/seed/23426/' + 600 + '/400/?blur=2'" />
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
    min-height: 400px;
    margin-top: 50px;
    //background-color: #6347c7;

    .visit-button {
        font-family: 'Work Sans';
        font-weight: 500;
        
    }

    .img-wrapper {
        align-self: center;
        height: 200px;

        img {
            height: 100%;
        }
    }
}

</style>