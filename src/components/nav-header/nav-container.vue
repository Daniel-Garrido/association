<<<<<<< HEAD
<template>
  <nav class="nav">
    <div class="container">
      <!-- Contenedor del logo y menú -->
      <div class="logo-menu-container">
        <!-- Logo MAIKRON a la izquierda -->
        <button class="btn-logo" @click="scrollToSection('home', 0)">
          <figure>
            <img class="img-logo" src="../../assets/imagenes/logo-MAIKRON2.png" alt="logo-maikron">
          </figure>
        </button>

        <!-- Menú de navegación -->
        <ul class="nav__list--sections">
          <li class="nav-item" v-for="(item, index) in listItems" :key="item.section">
            <linkSection :section="item.section" :status_btn="item.status" @click="handleMenuClick(item.section, index)" />

            <!-- Submenú de la sección "about" -->
            <ul v-if="item.section === 'about' && item.status" class="submenu">
              <li v-for="subItem in item.subMenu" :key="subItem.name">
                <a :href="subItem.link">{{ subItem.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

=======
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
<script setup>
import { ref } from 'vue';
import linkSection from './link-section.vue';

<<<<<<< HEAD
const listItems = ref([
  { section: "home", status: true },
  { section: "jounal", status: false },
  { section: "events", status: false },
  { section: "projects", status: false },
  {
    section: "about",
    status: false,
=======
// Lista de las secciones
const listItems = ref([
  {section:"home", status: true},
  {section:"jounal", status: false},
  {section:"events", status: false},
  {section:"projects", status: false},
  
  {
    section: "about", 
    status: false, 
   
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
    subMenu: [
      { name: "Historia", link: "#" },
      { name: "Misión", link: "#" },
      { name: "Visión", link: "#" }
    ]
<<<<<<< HEAD
  }
]);

let indiceActivo = null;

const desactivar_btn = () => {
  if (indiceActivo !== null) {
    listItems.value[indiceActivo].status = false;
  }
};

const activar_btn = (index) => {
  desactivar_btn();
  listItems.value[index].status = true;
  indiceActivo = index;
};

const scrollToSection = (section, index) => {
  const targetSection = document.getElementById(section);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
    activar_btn(index);
  }
};

const handleMenuClick = (section, index) => {
  if (indiceActivo !== index) {
    desactivar_btn(); // Desactiva la sección activa anterior
    activar_btn(index); // Activa la nueva sección
    scrollToSection(section, index); // Hace scroll a la nueva sección
  } else {
    scrollToSection(section, index); // Si ya está activa, solo hace scroll
  }
};

addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  listItems.value.forEach((item, index) => {
    const sectionElement = document.getElementById(item.section);
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        if (indiceActivo !== index) {
          activar_btn(index); // Activa la nueva sección visible en el scroll
        }
      }
    }
  });
});
</script>

<style scoped>
=======

  }
  
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
      <!-- Logo MAIKRON -->
      <li>
        <button class="btn-logo" @click="scrollSection('home')">
          <figure>
            <img class="img-logo" src="../../assets/imagenes/logo-MAIKRON2.png" alt="logo-maikron">
          </figure>
        </button>
      </li>
      <!-- Botones para navegar entre seccion -->
      <ul class="nav__list--sections">
        <li class="nav-item" v-for="item in listItems" :key="item.section">
          <linkSection :section="item.section" :status_btn="item.status" @click="scrollSection(item.section)" />

          <!-- Submenú de la seccion de about-->
          <ul v-if="item.subMenu" class="submenu">
            <li v-for="subItem in item.subMenu" :key="subItem.name">
              <a :href="subItem.link">{{ subItem.name }}</a>
            </li>
          </ul>

        </li>
      </ul>
    </ul>
  </nav>
</template>


<!--estilos a la seccion del menu de navegacion-->
<style scoped>

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

button {
  border: 0;
  cursor: pointer;
}

>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
.nav {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
<<<<<<< HEAD
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0.3rem 0; /* Ajusta el padding del nav para reducir aún más */
}

.container {
  max-width: 1200px; /* Ajusta el ancho máximo según sea necesario */
  margin: 0 auto;
  padding: 0 1.5rem; /* Ajusta el padding horizontal */
}

.logo-menu-container {
  display: flex;
  align-items: center;
}

.btn-logo {
  background-color: white;
  border: none;
  cursor: pointer;
  margin-right: 2.5rem; /* Ajusta el margen derecho del logo para despegarlo más */
}

.img-logo {
  width: 100px; /* Ajusta el tamaño del logo según sea necesario */
}

.nav__list--sections {
  display: flex;
  align-items: center;
  gap: 1rem;
  list-style: none;
}

.nav-item {
  position: relative;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-item:hover .submenu {
  display: block;
}

.submenu li {
  padding: 0.5rem 1rem;
}

.submenu li a {
  color: black;
  text-decoration: none;
  font-family: var(--ff-montserrat);
  font-size: 0.875rem;
}

.submenu li a:hover {
  background-color: #f0f0f0;
=======
}

.nav__list {
  padding: 0.7rem 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__list--sections {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.btn-logo {
  background-color: white;
  margin-right: 4.8rem;
}

.img-logo {
  width: 100px;
>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
}

.btn-contact_us {
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

.btn-contact_us:hover {
  color: var(--c-yellow-primary);
}

<<<<<<< HEAD
.active {
  color: var(--c-yellow-primary);
  background-color: rgba(210, 162, 52, 0.08);
  font-weight: 700;
}

@media (max-width: 768px) {
  .logo-menu-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-logo {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .nav__list--sections {
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-item {
    width: 100%;
  }

  .submenu {
    top: 0;
    right: 0;
    left: auto;
  }

  .nav-item:hover .submenu {
    display: none;
  }

  .btn-contact_us {
    margin-left: 0;
  }
}
=======
/* Estilos para el submenú */
.nav-item{
  position: relative; /*asegura que se posicione relativo a su padre */
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ddd;
  z-index: 1000;
}

.nav-item:hover .submenu {
  display: block;
}

.submenu li {
  padding: 5px 10px;
}

.submenu li a {
  font-family: sans-serif;
  font-size: 16px;
  color: black;
  text-decoration: none;
}

.submenu li a:hover {
  background-color: #f0f0f0;
}

>>>>>>> a29c6ad42dd51058f17bd535add910cf087e7560
</style>
