<template>
  <div class="description">
    <div class="description__title">
      About
    </div>
    <p class="description__text">
      {{ props.text }}
    </p>
  </div>
</template>

<script setup>
// eslint-disable-next-line
const props = defineProps({
  text: {
    type: String,
    default: null
  }
})

</script>

<style  scoped>
.description {
  display: grid;
  align-content: start;
  gap: 10px;
  padding: 15px 30px;
  background: rgba(39, 41, 63, 0.75);

  .description__title {
    display: flex;
    justify-self: flex-start;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    background: rgba(102, 204, 51, 0.75);
  }

  .description__text {
    margin: 0;
    white-space: pre-wrap;
  }
}
</style>
