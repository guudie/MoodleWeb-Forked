<template>
  <div class="card">
      <slot />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {}
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  overflow: hidden;
  background: white;
}
</style>
