<template>
  <nav class="sticky top-0 bg-white z-50 shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <!-- Logo MAIKRON (muestra solo en pantallas grandes) -->
      <div class="hidden md:flex items-center space-x-4">
        <img class="w-24" src="../../assets/imagenes/logo-MAIKRON2.png" alt="logo-maikron">
        <ul class="flex space-x-6">
          <li v-for="item in listItems" :key="item.section" class="relative group">
            <linkSection :section="item.section" :status_btn="item.status" @click="scrollSection(item.section)" />
            <!-- Submenú de la sección "About" -->
            <ul v-if="item.subMenu" class="absolute left-0 top-full mt-2 bg-white shadow-lg border border-gray-200 hidden group-hover:block">
              <li v-for="subItem in item.subMenu" :key="subItem.name" class="px-4 py-2 hover:bg-gray-100">
                <a :href="subItem.link">{{ subItem.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Botón de menú hamburguesa (muestra solo en pantallas pequeñas) -->
      <button class="md:hidden" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Menú desplegable para pantallas pequeñas -->
    <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg">
      <ul class="flex flex-col items-center space-y-4 py-4">
        <li v-for="item in listItems" :key="item.section">
          <linkSection :section="item.section" :status_btn="item.status" @click="scrollSection(item.section); toggleMenu()" />
          <!-- Submenú de la sección "About" -->
          <ul v-if="item.subMenu" class="bg-white shadow-lg">
            <li v-for="subItem in item.subMenu" :key="subItem.name" class="px-4 py-2 hover:bg-gray-100">
              <a :href="subItem.link" @click="toggleMenu">{{ subItem.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
import linkSection from './link-section.vue';

export default {
  components: {
    linkSection
  },
  setup() {
    const listItems = ref([
      { section: "home", status: true },
      { section: "jounal", status: false },
      { section: "events", status: false },
      { section: "conferences", status: false },
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

    let indicePorActivar = '';
    let indiceActivo = '';

    const desactivar_btn = () => {
      if (indiceActivo !== '') {
        listItems.value[indiceActivo].status = false;
      }
    };

    const cambiar_status = () => {
      if (indiceActivo !== '') {
        desactivar_btn();
      }
      listItems.value[indicePorActivar].status = true;
      indiceActivo = indicePorActivar;
    };

    const scrollSection = (refName) => {
      if (refName === 'home') {
        scrollTo(0, 0);
      } else {
        const item = document.getElementById(refName);
        if (item) {
          item.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    const isMenuOpen = ref(false);
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < 483) {
        indicePorActivar = 0;
      } else if (scrollY >= 483 && scrollY < 1305) {
        indicePorActivar = 1;
      } else if (scrollY >= 1305 && scrollY < 2037) {
        indicePorActivar = 2;
      } else if (scrollY >= 2037 && scrollY < 2672) {
        indicePorActivar = 3;
      } else if (scrollY >= 2672 && scrollY < 3512) {
        indicePorActivar = 4;
      } else if (scrollY >= 3512 && scrollY < 4058) {
        indicePorActivar = 5;
      } else if (scrollY >= 4058 && scrollY < 4635) {
        indicePorActivar = 6;
      } else if (scrollY >= 4635) {
        if (indiceActivo !== '') {
          desactivar_btn();
          indiceActivo = '';
          indicePorActivar = '';
        }
      }

      if (indicePorActivar !== '') {
        cambiar_status();
      }
    });

    return {
      listItems,
      isMenuOpen,
      toggleMenu,
      scrollSection
    };
  }
};
</script>

<style scoped>
.btn-logo {
  background-color: transparent;
}

.active {
  font-weight: bold;
  color: var(--c-yellow-primary);
}

@media (max-width: 767px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>