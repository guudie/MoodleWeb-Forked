<template>
    <div class="horizontal-slider">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'HortizontalSlider',
    data() {
        return {

        }
    },

}
</script>

<style>

.horizontal-slider {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow-x: auto;
    gap: 20px;
    margin-top: 50px;
}

</style>