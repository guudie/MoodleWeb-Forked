<template>
    <button @click="$emit('btn-click')" style="border: 2px solid #dce0e3; border-radius: 25px; color: #000" class="btn">
        <div class="image">
            <img :src="source" alt="">
        </div>
        <div class="text">
            {{text}}
        </div>
    </button>
</template>

<script>

export default {
    name: 'Button',
    props: {
        text: String,
        source: String,
    },
}
</script>

<style scoped>
button {
    width: 320px;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 8px auto;
    
}
.text {
    text-align: center;
    flex: 15;
}
.image {
    flex: 1;
}
</style>
