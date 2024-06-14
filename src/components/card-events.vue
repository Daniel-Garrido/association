<script setup>
import { defineProps } from 'vue';

const props = defineProps({
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
});

// Formatea date para asegurarte de que tenga HTML válido
const formattedDate = props.date;
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
       <!-- Usa v-html solo en el contenido que necesita ser interpretado como HTML -->
       <p class="card__description" v-html="formattedDate"></p>
      
    </div>
  </div>
</template>

<style scoped>

.card__container{
 
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  box-shadow: 3px 4px 24px 0px rgba(0, 0, 0, 0.05);
  margin-bottom: 5rem;
}

.card__img{
  width: 400px;
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
  color: var(--c-yellow-primary);
  font-family: var(--ff-source-serif-4);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 25px;
  margin-bottom: 1.2rem;
  padding: 0 1.7rem;
  
}

.card__description{
  text-align: justify;
  color: var(--c-grey-primary);
  font-family: var(--ff-montserrat);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 0 1.7rem;
}
</style>