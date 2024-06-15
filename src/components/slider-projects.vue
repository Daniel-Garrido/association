<!-- Contenedor de los botones para deslizar  -->
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
})
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
      <swiper-slide v-for="item in listProyects">
        <cardProjects
          :src="item.src"
          :title="item.title"
          :description="item.description" />
      </swiper-slide>
    </swiper-container>

    <!-- icono de deslizar hacia la izquierda -->
    <button class="swiper__btn swiper__btn--prev">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_left_yellow.svg'" alt="">
      </figure>
    </button>

    <!-- icono de deslizar hacia la derecha -->
    <button class="swiper__btn swiper__btn--next">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_right_yellow.svg'" alt="">
      </figure>
    </button>
  </div>
</template>

<style scoped>

/* estilo a las listas */
ul{
  list-style: none;
}

/**contenedor padre */
.swiper{

  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/**contenedor hijo */
swiper-container{
  width: 90%;
  padding: 1rem;
}

/**estilos a los botones del slider  */
.swiper__btn{
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

.swiper__btn--next{
  right: 0;
}
.swiper__btn--prev{
  left: 0;
}


.swiper__btn img{

  width: 100%;
  height: 100%;
  display: flex;
}

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

</style>