<script setup>
import { defineProps } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'; // Importa Swiper y SwiperSlide desde 'swiper/vue'
import 'swiper/swiper-bundle.css'; // Importa los estilos de Swiper

// Define las propiedades del componente
defineProps({
  listProyects: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div class="swiper">
    <!-- Swiper Container con configuraciones -->
    <swiper
      :slides-per-view="3"
      :space-between="50"
      :loop="true"
      :autoplay="{ delay: 3500 }"
      :speed="1000"
      class="mySwiper"
      navigation
      pagination={{ clickable: true, dynamicBullets: true }}
    >
      <!-- Itera sobre los proyectos y renderiza cada slide -->
      <swiper-slide v-for="item in listProyects" :key="item.id">
        <cardProjects
          :src="item.src"
          :title="item.title"
          :description="item.description"
        />
      </swiper-slide>
    </swiper>

    <!-- Botón de navegación previo -->
    <button class="swiper__btn swiper__btn--prev">
      <figure>
        <img :src="require('@/assets/icons/arrow_left_yellow.svg')" alt="" /> <!-- Ajusta la ruta de la imagen según la estructura de tu proyecto -->
      </figure>
    </button>

    <!-- Botón de navegación siguiente -->
    <button class="swiper__btn swiper__btn--next">
      <figure>
        <img :src="require('@/assets/icons/arrow_right_yellow.svg')" alt="" /> <!-- Ajusta la ruta de la imagen según la estructura de tu proyecto -->
      </figure>
    </button>
  </div>
</template>

<style scoped>
/* Estilos específicos para el componente slider-projects */
.swiper {
  width: 100%; /* Ajusta el ancho según tus necesidades */
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
  top: 50%; /* Ajusta la posición verticalmente según necesites */
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
}

/* Estilos para la paginación de Swiper */
.swiper-pagination-bullet {
  background-color: #888888;
  height: 13px;
  width: 13px;
}

.swiper-pagination-bullet-active {
  background-color: var(--c-yellow-secondary); /* Define el color activo según tu paleta */
}
</style>
