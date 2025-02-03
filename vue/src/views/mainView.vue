<template>
  <Header :mensaje="texto" />
  <br />
  <div class="container">
    <Sidebar />
    <div class="content">
      <input v-model="texto" type="text" name="" id="" />{{ texto }}
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "../components/SideBar.vue";
import Header from "../components/Header.vue";
import { ref } from "vue";

const texto = ref("");
</script>
<style scoped>
.container {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
