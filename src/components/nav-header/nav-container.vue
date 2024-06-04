<script setup>
import { ref } from 'vue';
import linkSection from './link-section.vue';

// Lista de las secciones
const listItems = ref([
  {section:"home", status: true},
  {section:"jounal", status: false},
  {section:"events", status: false},
  {section:"conferences", status: false},
  {section:"projects", status: false},
  {section:"products", status: false},
  {section:"about", status: false},
  {section:"community", status: false},
])
// Variable que almacena que boton esta activo, dependiendo la seccion mostrada al centro de la pantalla
let indicePorActivar = '',
indiceActivo = ''


const desactivar_btn = () => {
  listItems.value[indiceActivo].status = false
}


const cambiar_status = () => {

  // Desactiva al boton anterior
  if (indiceActivo !== ''){
    desactivar_btn()
  }

  // Activa el btn de la seccion mostrada en pantalla
  listItems.value[indicePorActivar].status = true
  indiceActivo = indicePorActivar
}


const scrollSection = (refName) => {
  if(refName === 'home'){
    scrollTo(0,0)
  }else{
    const item = document.getElementById(refName)
    if(item){
      item.scrollIntoView({
        bahavior: 'smooth'
      })
    }
  }
}


addEventListener('scroll', (e) => {
  if(scrollY < 483){
    indicePorActivar = 0
  }
  if(scrollY >= 483 && scrollY < 1305){
    indicePorActivar = 1
  }
  if(scrollY >= 1305 && scrollY < 2037){
    indicePorActivar = 2
  }
  if(scrollY > 2037 && scrollY < 2672){
    indicePorActivar = 3
  }
  if(scrollY > 2672 && scrollY < 3512){
    indicePorActivar = 4
  }
  if(scrollY > 3512 && scrollY < 4058){
    indicePorActivar = 5
  }
  if(scrollY > 4058 && scrollY < 4635){
    indicePorActivar = 6
  }
  if(scrollY >= 4635){
    if(indiceActivo !== ''){
      desactivar_btn()
      indiceActivo = ''
      indicePorActivar = ''
    }
  }

  if(indicePorActivar !== ''){
    cambiar_status()
  }
})
</script>

<template>
  <nav class="nav">
    <ul class="nav__list container">
    <!-- Logo MIKRON -->
      <li>
        <button
          class="btn-logo"
          @click="scrollSection('home')">
          <figure>
            <img src="../../assets/imagenes/logo-MAIKRON.png
            " alt="logo-maikron">
          </figure>
        </button>
      </li>
      <!-- Botones para navegar entre seccion -->
      <ul class="nav__list--sections">
        <li class="nav-item" v-for="item in listItems">
          <linkSection
            :section="item.section"
            :status_btn="item.status"
            @click="scrollSection(item.section)" />
        </li>
        <li>
          <button
            class="btn-contact_us"
            @click="scrollSection('contact')">contact us</button>
        </li>
      </ul>
      <!-- Boton Contact Us -->
    </ul>
  </nav>
</template>

<style scoped>

ul{
  list-style: none;
}
button{
  border: 0;
  cursor: pointer;
}

.nav{
  position: sticky;
  top:0;
  background-color: white;
  z-index: 999;
}

.nav__list{
  padding: 0.7rem 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 1200px;
  margin: 0 auto; */
}

.nav__list--sections{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.btn-logo{
  margin-right: 4.8rem;
}

.btn-contact_us{
  color: #FFF;
  background-color: black;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  font-family: var(--ff-montserrat);
  font-size: 12px;
  font-weight: 600;
  padding: 0.875rem 1.4rem;
  margin-left: 1.5rem;
  transition: color 0.2s ease-in-out;
}

.btn-contact_us:hover{
  color: var(--c-yellow-primary);
}
</style>