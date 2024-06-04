<script setup>
import cardConferences from './card-conferences.vue';
import { register } from 'swiper/element/bundle';
import 'swiper/css/bundle';

register();
defineProps({
  listConferences: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="swiper">
    <swiper-container
      direction="horizontal"
      :slides-per-view="3"
      :space-between="50"
      :centered-slides="true"
      class="mySwiper"
      :loop="true"
      :modules="modules"
      :autoplay="{delay: 3500}"
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
      <swiper-slide v-for="item in listConferences">
        <cardConferences :src="item.src" :title="item.title" :route="item.route"/>
      </swiper-slide>
    </swiper-container>

    <button class="swiper__btn swiper__btn--prev">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_left_black.svg'" alt="">
      </figure>
    </button>

    <button class="swiper__btn swiper__btn--next">
      <figure>
        <img :src="'src\\assets\\icons\\arrow_right_black.svg'" alt="">
      </figure>
    </button>
  </div>
</template>

<style scoped>
ul{
  list-style: none;
}

.swiper{
  width: 1270px;
  position: relative;
  margin: 0 auto;
}

swiper-container{
  width: 1180px;
  height: 280px;
  margin: 0 auto;
}

.swiper__btn{
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
  top: 108px;
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
  height: 13px;
  width: 13px;
}
swiper-container::part(bullet-active) {
  background-color: var(--c-yellow-primary);
  height: 13px;
  width: 13px;
}
</style>