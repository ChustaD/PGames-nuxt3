<template>
  <div v-if="achievements?.results.length" class="achievements">
    <div class="achievements__title">
      Achievements:
    </div>
    <div
      v-for="achievement in achievements?.results"
      :key="achievement.id"
      class="achievement"
    >
      <img
        class="achievement__img"
        :src="achievement.image"
        alt=".img"
      >
      <div class="achievement__text">
        <div class="achievement__name">
          {{ achievement.name }}
        </div>
        <div class="achievement__description">
          {{ achievement.description }}
        </div>
      </div>
      <div class="achievement__percent">
        {{ achievement.percent }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // list: {
  //   type: Array,
  //   default: () => []
  // },
  gameId: {
    type: String,
    required: true
  },
})

const { data: achievements } = await useLazyFetch(`/api/games/${props.gameId}/achievements`)


</script>

<style  scoped>
.achievements {
  display: grid;
  gap: 10px;
  padding: 15px 30px;
  background: rgba(39, 41, 63, 0.75);

  .achievements__title {
    display: flex;
    justify-self: flex-start;
    padding: 5px 20px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
    background: rgba(102, 204, 51, 0.75);
  }

  .achievement {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #3C4464;

    .achievement__img {
      width: 80px;
      height: 80px;
      background: rgba(39, 41, 63);
    }

    .achievement__text {
      flex: 1 1 100%;
    }

    .achievement__name {
      font-size: 16px;
      font-weight: 500;
    }

    .achievement__description {
      font-size: 14px;
      color: #8490a9;
    }

    .achievement__percent {
      padding-right: 30px;
      font-weight: 500;
    }
  }
}
</style>
