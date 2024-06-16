<<<<<<< HEAD
=======
<!-- Contenedor de los botones para deslizar  -->
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
<script setup>
import cardProjects from './card-projects.vue';
import { register } from 'swiper/element/bundle';
import 'swiper/css/bundle';

<<<<<<< HEAD
// Register Swiper components
register();

// Define props
=======
register();
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
defineProps({
  listProyects: {
    type: Array,
    required: true
  }
<<<<<<< HEAD
});
=======
})
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
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
<<<<<<< HEAD
      <!-- Swiper slides -->
      <swiper-slide v-for="item in listProyects" :key="item.title">
=======
      <swiper-slide v-for="item in listProyects">
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
        <cardProjects
          :src="item.src"
          :title="item.title"
          :description="item.description" />
      </swiper-slide>
    </swiper-container>

<<<<<<< HEAD
    <!-- Navigation buttons -->
    <button class="swiper__btn swiper__btn--prev">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_left_yellow.svg'" alt="Previous">
      </figure>
    </button>
    <button class="swiper__btn swiper__btn--next">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_right_yellow.svg'" alt="Next">
=======
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
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
      </figure>
    </button>
  </div>
</template>

<style scoped>
<<<<<<< HEAD
/* Styles for the Swiper component and its elements */

/* Style for unordered lists */
ul {
  list-style: none;
}

/* Parent container */
.swiper {
  width: 100%;
=======

/* estilo a las listas */
ul{
  list-style: none;
}

/**contenedor padre */
.swiper{

  width:100%;
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  display: flex;
  justify-content: center;
  align-items: center;
}

<<<<<<< HEAD
/* Child container */
swiper-container {
=======
/**contenedor hijo */
swiper-container{
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  width: 90%;
  padding: 1rem;
}

<<<<<<< HEAD
/* Styles for navigation buttons */
.swiper__btn {
  width: 50px;
  height: 50px;
=======
/**estilos a los botones del slider  */
.swiper__btn{
  width: 50px;
  height: 50px;
 
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
<<<<<<< HEAD
=======
  
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  margin: 1rem;
<<<<<<< HEAD
}

.swiper__btn--next {
  right: 0;
}

.swiper__btn--prev {
  left: 0;
}

.swiper__btn img {
=======
 
}

.swiper__btn--next{
  right: 0;
}
.swiper__btn--prev{
  left: 0;
}


.swiper__btn img{

>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  width: 100%;
  height: 100%;
  display: flex;
}

<<<<<<< HEAD
/* Styles for pagination bullets */
swiper-container::part(pagination) {
  bottom: 0;
}

=======
swiper-container::part(pagination) {
  bottom: 0;

}
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
swiper-container::part(bullet) {
  background-color: #888888;
  height: 13px;
  width: 13px;
}
<<<<<<< HEAD

=======
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
swiper-container::part(bullet-active) {
  background-color: var(--c-yellow-secondary);
  height: 13px;
  width: 13px;
}

<<<<<<< HEAD
@media (max-width: 640px) {
  .swiper__btn {
    width: 40px;
    height: 40px;
  }
}
</style>
=======
</style>
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
