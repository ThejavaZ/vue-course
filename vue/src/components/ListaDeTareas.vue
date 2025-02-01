<template>
  <h1>Lista de tareas</h1>

  <input type="text" v-model="tarea" @keydown.enter="agregar" />
  <button @click="agregar">Agregar</button>
  <ul>
    <li v-for="(tarea, index) in lista" :key="index">
      {{ tarea }}
      <button class="delete" @click="remover(index)">x</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
const tarea = ref("");
const lista = ref([]);

function agregar() {
  lista.value.push(tarea.value);
  tarea.value = "";
}

function remover(index) {
  lista.value.splice(index, 1);
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}

.delete {
  margin-left: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
