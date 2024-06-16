<script setup>
defineProps({
<<<<<<< HEAD
  section: {
    type: String,
    required: true
  },
  status_btn: {
    type: Boolean,
    required: true
  },
});
=======
    section: {
      type: String,
      required: true
    },
    status_btn: {
      type: Boolean,
      required: true
    },
  })
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
</script>

<template>
  <button
    class="btn__nav"
    :class="{'active':status_btn}"
  >{{ section }}</button>
</template>

<style scoped>
<<<<<<< HEAD
.btn__nav {
=======
.btn__nav{
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  color: #C8CACE;
  text-align: center;
  text-transform: capitalize;
  text-decoration: none;
  font-family: var(--ff-source-serif-4);
  font-size: 0.875rem;
  font-weight: 400;
  width: 100%;
  height: 100%;
  border: 0;
  background-color: transparent;
  padding: 0.8rem 0.4rem;
  transition: color, background-color, font-weight, 0.2s ease-in;
}

<<<<<<< HEAD
.btn__nav:hover {
  color: var(--c-yellow-primary);
}

.active {
=======
.btn__nav:hover{
  color: var(--c-yellow-primary);
}

.active{
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
  color: var(--c-yellow-primary);
  background-color: rgba(210, 162, 52, 0.08);
  font-weight: 700;
}
<<<<<<< HEAD

@media (max-width: 768px) {
  .btn__nav {
    padding: 0.8rem 1rem; /* Ajuste de padding para mejor legibilidad en móviles */
  }
}
</style>
=======
</style>
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
