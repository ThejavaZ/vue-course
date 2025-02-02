<template>
  <h1>Hola Mundo</h1>

  <p>Contador: {{ count }}</p>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);

function incrementar() {
  count.value++;
}
function decrementar() {
  count.value--;
}
</script>

<style scoped></style>
