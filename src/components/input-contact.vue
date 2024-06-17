<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
  })


let patron = ''
const modelValue = ref(props.value),
  hasError = ref(false),
  envio = ref(false),
  valido = ref(''),
  emit = defineEmits(["update:modelValue"])



const seleccionarPatron = computed(() => {
  if(props.type.includes("text")){
    return patron = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/
  }
  else if(props.type.includes("tel")){
    return patron = /^\d{10}$/
  }
  else if(props.type.includes("email")){
    return patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  }

})


const activateError = computed(() => {
  if(valido.value === false){
    hasError.value = true
  }
  else if(valido.value === true){
    hasError.value = false
  }
})


const evaluarEnvio = computed(() => {
  if(valido.value === true){
    if(hasError.value === true){
      hasError.value = false
    }
    envio.value = true
  }
  else if(valido.value === false){
    envio.value = false
  }

})



watch(modelValue,(newModel) => {

    valido.value = patron.test(newModel)
    evaluarEnvio.value

    if(envio.value === true){
      emit("update:modelValue", newModel)
    }else{
      emit("update:modelValue", "")
    }
})


patron = seleccionarPatron.value

</script>

<template>
  <label for="" class="label">
    {{ label }}
    <input
      :type="type"
      class="input"
      :class="{'hasError': hasError}"
      v-model.trim="modelValue"
      :placeholder="placeholder"
      @blur="activateError"
      >
  </label>
</template>

<style scoped>

.label{
  color: #343B44;
  font-family: var(--ff-montserrat);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 2.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-transform: capitalize;
}

.input{
  width: 305px;
  height: 45px;
  border: 1px solid #343b444d;
  color: var(--c-grey-primary);
  font-family: var(--ff-montserrat);
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 2.3rem;
  padding: 0.3rem 16px;
  outline: none;
  transition: border, background-color, 0.3s;
}


input:focus{
  border: 1px solid var(--c-yellow-primary);
}

.hasError, .hasError:focus{
  border: 1px solid #ff0000;
  background-color: rgba(255, 3, 3, 0.062);
}
</style>