<!-- contenedor de las tarjetas de los proyectos -->
<script setup>
import { defineProps } from 'vue';

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
  }
});
</script>

<template>
  <div class="card__container">
    <figure class="card__img">
      <img :src="src" alt="img-project">
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
.card__container {
  width: 100%;
  border: 1px solid #888;
  padding: 0.5rem;
}

.card__img {
  width: 100%;
  height: 190px;
  margin-bottom: 1.5rem;
  filter: grayscale();
}

.card__img img {
  max-width: 100%;
  height: 100%;
}

.card__title {
  color: #FFF;
  font-family: var(--ff-montserrat);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.2rem;
  padding: 0 1.2rem;
  text-align: center;
}

.card__description {
  color: #D2D2D2;
  font-family: var(--ff-montserrat);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0 1.2rem;
  text-align: justify;
}

/** diseño responsivo a la seccion de proyectos*/
@media (max-width: 500px) {
  .card__title {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
  }

  .card__description {
    font-size: 0.9rem;
    line-height: 1.25rem;
  }
}
</style>
