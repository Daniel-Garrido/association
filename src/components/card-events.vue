<script setup>
defineProps({
  src: {
      type: String,
      required: true
    },
  title: {
      type: String,
      required: true
    },
  date: {
      type: String,
      required: true
    },
})
</script>

<template>
  <div class="card__container">
    <figure class="card__img">
      <img :src="src" alt="img-event">
    </figure>

    <div class="text__container">
      <h3 class="card__title">
        {{ title }}
      </h3>
      <p class="card__date">
        {{ date }}
      </p>
    </div>
  </div>
</template>

<style scoped>

.card__container{
  width: 568px;
  height: 195px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 3px 4px 24px 0px rgba(0, 0, 0, 0.05);
}

.card__img{
  width: 221px;
  height: 100%;
  flex-shrink: 0;
}

.card__img img{
  width: 100%;
  height: 100%;
}

.text__container{
  padding: 1.4rem 1.2rem 0 1.2rem;
}

.card__title{
  color: #2E3339;
  font-family: var(--ff-source-serif-4);
  font-weight: 600;
  line-height: 1.25rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.card__date{
  color: #000;
  font-family: var(--ff-montserrat);
  font-size: 0.75rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.25rem;
}
</style>