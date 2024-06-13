<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  src: {
      type: String,
      required: true
  },
  title: {
      type: String,
      required: true
  },
  route: {
      type: String,
      required: true
  },
})

</script>

<template>
  <div class="card__container">
    <figure class="card__img">
      <img :src="src" alt="img_conference">
    </figure>

    <h3 class="card__title">
      {{ title }}
    </h3>

    <RouterLink :to="route" class="card__link">
      learn more
      <img :src="'src\\assets\\imagenes\\arro-icon.svg'" alt="" class="arrow__icon">
    </RouterLink>
  </div>
</template>

<style scoped>

.card__container{
  width: 360px;
  height: 246px;
  position: relative;
  flex-shrink: 0;
}

.card__img{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  filter: brightness(75%);
}

.card__title{
  color: #FFF;
  font-family: var(--ff-montserrat);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.6rem;
  position: absolute;
  top: 1.5rem;
  left: 1.2rem;
  right: 5rem;
  text-align: left;
}

.card__link{
  text-transform: uppercase;
  color: #FFE29F;
  text-align: right;
  font-family: var(--ff-montserrat);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 2.64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  position: absolute;
  bottom: .7rem;
  right: 1.2rem;
  text-decoration: none;
  padding-block: 0.3rem;
  transition: filter 0.3s;
}

.card__link:hover{
  filter: brightness(75%);
}

.arrow__icon{
  width: 1rem;
  height: 1rem;
}
</style>