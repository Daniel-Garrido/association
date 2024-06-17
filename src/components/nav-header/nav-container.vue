<template>
  <nav class="nav" :style="{ display: isHeaderVisible ? 'block' : 'none' }">
    <div class="container">
      <!-- Contenedor del logo y menú -->
      <div class="logo-menu-container flex items-center justify-between">
        <!-- Logo MAIKRON a la izquierda -->
        <button class="btn-logo" @click="scrollToSection('home')">
          <img class="img-logo" src="../../assets/imagenes/logo-MAIKRON2.png" alt="logo-maikron">
        </button>

        <!-- Menú de navegación para pantallas grandes -->
        <ul class="nav__list--sections hidden md:flex flex-grow items-center justify-end gap-4">
          <li class="nav-item" v-for="(item, index) in listItems" :key="item.section">
            <linkSection
              :section="item.section"
              :status_btn="item.status"
              @click="handleMenuClick(item.section, index)"
              :class="{ 'active': item.status }"
            />

            <!-- Submenú de la sección "about" -->
            <ul v-if="item.section === 'about' && item.status" class="submenu absolute top-full left-0 bg-white border border-gray-300 shadow-lg z-50">
              <li v-for="subItem in item.subMenu" :key="subItem.name">
                <a :href="subItem.link">{{ subItem.name }}</a>
              </li>
            </ul>
          </li>
        </ul>

        <!-- Botón de menú para pantallas pequeñas -->
        <button class="md:hidden" @click="toggleMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Menú de navegación para pantallas pequeñas -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="mobile-menu md:hidden">
          <ul class="mobile-menu__list">
            <li v-for="(item, index) in listItems" :key="item.section" @click="handleMenuClick(item.section, index); closeMobileMenu()">
              <a :href="'#' + item.section" :class="{ 'active': item.status }">{{ item.section }}</a>
              <!-- Submenú para la sección "about" -->
              <ul v-if="item.section === 'about' && item.status" class="mobile-submenu">
                <li v-for="subItem in item.subMenu" :key="subItem.name">
                  <a :href="subItem.link">{{ subItem.name }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
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
    isHeaderVisible.value = false; // Oculta el header al hacer clic en una sección del menú
  } else {
    scrollToSection(section, index); // Si ya está activa, solo hace scroll
    isHeaderVisible.value = false; // Oculta el header al hacer clic en una sección del menú
  }
};

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const isHeaderVisible = ref(true); // Estado para controlar la visibilidad del header

// Función para manejar el scroll y resaltar la sección activa
const handleScroll = () => {
  const scrollPosition = window.scrollY;

  listItems.value.forEach((item, index) => {
    const targetSection = document.getElementById(item.section);
    if (targetSection) {
      const sectionTop = targetSection.offsetTop;
      const sectionHeight = targetSection.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        if (!item.status) {
          activar_btn(index);
        }
      } else {
        if (item.status) {
          desactivar_btn();
        }
      }
    }
  });
};

// Escuchar el evento scroll al montar y desmontar el componente
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
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
  justify-content: space-between; /* Añadido para distribuir los elementos */
}

.btn-logo {
  background-color: transparent;
  border: none;
  cursor: pointer;
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

.mobile-menu {
  display: none; /* Oculta el menú desplegable en pantallas pequeñas por defecto */
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.mobile-menu__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
}

.mobile-menu__list li {
  padding: 0.5rem;
}

.mobile-submenu {
  display: none;
}

.mobile-menu__list li:hover .mobile-submenu {
  display: block;
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
    display: block;
  }

  .mobile-menu {
    display: none; /* Oculta el menú desplegable en pantallas pequeñas por defecto */
    top: 100%;
    left: 0;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .active {
    color: #ff9900; /* Color de resaltado para la sección activa en el menú */
    font-weight: bold; /* Estilo de texto más destacado para la sección activa */
  }
}
</style>
