// slider-conferences.vue

<script setup>
import cardConferences from './card-conferences.vue';
import { defineProps } from 'vue'; // Asegúrate de importar defineProps desde vue
import { Swiper, SwiperSlide } from 'swiper/vue'; // Importa Swiper y SwiperSlide desde swiper/vue
import 'swiper/swiper-bundle.css'; // Importa los estilos básicos de Swiper

defineProps({
  listConferences: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="swiper">
    <Swiper
      direction="horizontal"
      :slides-per-view="3"
      :space-between="50"
      centered-slides
      loop
      autoplay="{ delay: 3500 }"
      speed="1000"
      :navigation="{ prevEl: '.swiper__btn--prev', nextEl: '.swiper__btn--next' }"
      :pagination="{ clickable: true, dynamicBullets: true }"
    >
      <SwiperSlide v-for="item in listConferences" :key="item.title">
        <cardConferences :src="item.src" :title="item.title" :route="item.route"/>
      </SwiperSlide>
    </Swiper>

    <button class="swiper__btn swiper__btn--prev">
      <figure>
        <img :src="'src/assets/icons/arrow_left_black.svg'" alt="">
      </figure>
    </button>

    <button class="swiper__btn swiper__btn--next">
      <figure>
        <img :src="'src/assets/icons/arrow_right_black.svg'" alt="">
      </figure>
    </button>
  </div>
</template>


<style scoped>
.swiper {
  width: 100%; /* Ajusta el ancho según sea necesario */
  position: relative;
  margin: 0 auto;
}

.swiper__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 45px;
  position: absolute;
  top: 50%; /* Ajusta la posición según sea necesario */
  transform: translateY(-50%);
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
  display: flex;
}
</style>
