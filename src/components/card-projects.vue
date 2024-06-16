<<<<<<< HEAD
=======
<!-- contenedor de las tarjetas de los proyectos -->
<script setup>

/**variables del contenido */
defineProps({
  src: {
      type: String,
      required: true
    },
  title:{
      type: String,
      required: true
    },
  description: {
      type: String,
      required: true
    },
})
</script>

>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
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

<<<<<<< HEAD
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
});
</script>

<style scoped>
.card__container {
=======
<style scoped>

.card__container{

 
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  border: 1px solid #888;
  padding: 0.5rem;
}

<<<<<<< HEAD
.card__img {
=======
.card__img{
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  width: 100%;
  height: 190px;
  margin-bottom: 1.5rem;
  filter: grayscale();
}

<<<<<<< HEAD
.card__img img {
=======
.card__img img{
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  max-width: 100%;
  height: 100%;
}

<<<<<<< HEAD
.card__title {
=======
.card__title{
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  color: #FFF;
  font-family: var(--ff-montserrat);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 1.2rem;
  padding: 0 1.2rem;
<<<<<<< HEAD
  text-align: center;
}

.card__description {
=======
}

.card__description{
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  color: #D2D2D2;
  font-family: var(--ff-montserrat);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  padding: 0 1.2rem;
<<<<<<< HEAD
  text-align: justify;
}

@media (max-width: 768px) {
  .card__title {
    font-size: 1rem;
  }

  .card__description {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
</style>
=======
}
</style>
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
