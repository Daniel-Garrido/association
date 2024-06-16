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

<script setup>
import { ref } from 'vue';
import linkSection from './link-section.vue';

const listItems = ref([
  { section: "home", status: true },
  { section: "jounal", status: false },
  { section: "events", status: false },
  { section: "projects", status: false },
  {
    section: "about",
    status: false,
    subMenu: [
      { name: "Historia", link: "#" },
      { name: "Misión", link: "#" },
      { name: "Visión", link: "#" }
    ]
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
.nav {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 999;
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
</style>
