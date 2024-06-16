<script setup>
import cardProjects from './card-projects.vue';
import { register } from 'swiper/element/bundle';
import 'swiper/css/bundle';

register();

defineProps({
  listProyects: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="swiper">
    <swiper-container
      direction="horizontal"
      :slides-per-view="1"
      :space-between="50"
      :centered-slides="true"
      class="mySwiper"
      :loop="true"
      :modules="modules"
      :speed="1000"
      :navigation="{
        prevEl: '.swiper__btn--prev',
        nextEl: '.swiper__btn--next'
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true
      }"
    >
      <swiper-slide v-for="item in listProyects" :key="item.title">
        <cardProjects
          :src="item.src"
          :title="item.title"
          :description="item.description"
        />
      </swiper-slide>
    </swiper-container>

    <!-- Navigation buttons -->
    <button class="swiper__btn swiper__btn--prev">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_left_yellow.svg'" alt="Previous">
      </figure>
    </button>
    <button class="swiper__btn swiper__btn--next">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_right_yellow.svg'" alt="Next">
      </figure>
    </button>
  </div>
</template>

<style scoped>
/* Estilos para el componente Swiper y sus elementos */

/* Estilo para listas no ordenadas */
ul {
  list-style: none;
}

/* Contenedor principal */
.swiper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Contenedor hijo */
swiper-container {
  width: 90%;
  padding: 1rem;
}

/* Estilos para los botones de navegación */
.swiper__btn {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  margin: 1rem;
}

.swiper__btn--next {
  right: 0;
}

.swiper__btn--prev {
  left: 0;
}

.swiper__btn img {
  width: 100%;
  height: 100%;
}

/* Estilos para los bullets de la paginación */
swiper-container::part(pagination) {
  bottom: 0;
}

swiper-container::part(bullet) {
  background-color: #888888;
  height: 13px;
  width: 13px;
}

swiper-container::part(bullet-active) {
  background-color: var(--c-yellow-secondary);
  height: 13px;
  width: 13px;
}

@media (max-width: 640px) {
  .swiper__btn {
    width: 40px;
    height: 40px;
  }
}
</style>
