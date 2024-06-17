<!-- FloatingButton.vue -->
<template>
    <button class="fixed-menu-btn" @click="toggleHeader">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isHeaderVisible = ref(true);
  
  const toggleHeader = () => {
    isHeaderVisible.value = !isHeaderVisible.value;
    const navContainer = document.querySelector('.nav');
    if (navContainer) {
      navContainer.style.display = isHeaderVisible.value ? 'block' : 'none';
    }
  };
  </script>
  
  <style scoped>
  .fixed-menu-btn {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    z-index: 1000; /* Z-index alto para estar por encima de otros elementos */
    padding: 0.5rem;
    background-color: white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 9999px;
  }
  </style>
  