import { createRouter, createWebHistory } from "vue-router";
import Contador from "../components/Contador.vue";
import ListaDeTareas from "@/components/ListaDeTareas.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // path: '/',
      // name: 'home',
      // component: HomeView,
    },
    {
      path: "/contador",
      name: "contador",
      component: Contador,
    },
    {
      path: "/lista-de-tareas",
      name: "lista-de-tareas",
      component: ListaDeTareas,
    },
  ],
});

export default router;
