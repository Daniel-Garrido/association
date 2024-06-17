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
  description: {
      type: String,
      required: true
    },
})
</script>

<template>
  <div class="card__container">
    <figure class="card__img">
      <img :src="src" alt="">
    </figure>
    <h3 class="card__title">
      {{ title }}
    </h3>
    <p class="card__description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.card__container{
  width: 100%;
  background-color: red;
  box-shadow: 3px 4px 24px 0px rgba(0, 0, 0, 0.05);
}

.card__img{
  text-align: center;
  width: 100%;
  height: 190px;
  filter: grayscale();
  margin-bottom: 1.8rem;
}

.card__img img{
  max-width: 100%;
  height: 100%;
}

.card__title{
  color: var(--c-yellow-primary);
  font-family: var(--ff-source-serif-4);
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 1.2rem;
  padding: 0 1.7rem;
  
}

.card__description{
  color: var(--c-grey-primary);
  font-family: var(--ff-montserrat);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 0 1.7rem;
}
</style>