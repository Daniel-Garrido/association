<script setup>
import { ref, onMounted, watch } from 'vue';
import inputContact from './input-contact.vue';

const nameValue = ref(""),
lastNameValue = ref(""),
telValue = ref(""),
emailValue = ref(""),
miFormulario = ref(null),
disabledBtn = ref(true)

let enviarFormulario = ""


// Activa el boton de "send" cuando los campos obligatorios esten llenados corre
watch([nameValue, lastNameValue, telValue, emailValue],(newValues) => {
  if(newValues.includes("")){
    disabledBtn.value = true
  }else{
    disabledBtn.value = false
  }
})


onMounted(() => {
  enviarFormulario = () => {
    alert("Formulario Eviado")
    disabledBtn.value = true
    miFormulario.value.reset()
  }
})
</script>

<template>
  <form
    ref="miFormulario"
    class="contact__form"
    @submit.prevent="enviarFormulario">
    <div class="input__container">
      <inputContact
        label="name"
        placeholder="Write your name"
        type="text"
        :value="nameValue"
        @update:model-value="(newValue) => (nameValue = newValue)" />
      <inputContact
        label="last name"
        placeholder="Write your last name"
        type="text"
        :value="lastNameValue"
        @update:model-value="(newValue) => (lastNameValue = newValue)" />
      <inputContact
        label="email"
        placeholder="Write your email"
        type="email"
        :value="emailValue"
        @update:model-value="(newValue) => (emailValue = newValue)" />
      <inputContact
        label="tel"
        placeholder="Write your number phone"
        type="tel"
        :value="telValue"
        @update:model-value="(newValue) => (telValue = newValue)" />
    </div>
    <button
      type="submit"
      class="contact__btn--form"
      :class="{'contact__btn--form--disabled':disabledBtn}"
      @click="validarDatos"
      :disabled="disabledBtn"
      >send</button>
  </form>
</template>

<style scoped>
.contact__form{
  max-width: 692px;
  margin: 0 auto;
  box-shadow: 3px 4px 24px 0px rgba(0, 0, 0, 0.05);
  padding: 2.6rem 1.75rem 1.5rem 1.75rem;
  text-align: right;
}

.input__container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.contact__btn--form{
  background: #2E3339;
  color: #FFF;
  text-align: center;
  font-family: var(--ff-montserrat);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  margin-top: 1.5rem;
  cursor: pointer;
  border: 0;
  transition: color, background-color, 0.3s ease-in-out;
  text-transform: capitalize;
}

.contact__btn--form:hover{
  background-color: #5a616b;
}

.contact__btn--form--disabled{
  filter: brightness(60%);
  pointer-events: none;
}
</style>