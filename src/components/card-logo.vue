<script setup>
defineProps({
  src: {
      type: String,
      required: true
    },
})
</script>

<template>
  <figure>
    <img
      :src="src"
      alt="logo-community">
  </figure>
</template>

<style scoped>
figure{
  background-color: white;
  border-radius: 145px;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
}

img{
  max-width: 130px;
  max-height: 149px;
  border: 0;
}
</style>