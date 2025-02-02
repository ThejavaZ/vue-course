import { createRouter, createWebHistory } from "vue-router";
import Contador from "../components/modules/contador/components/Contador.vue";
import ListaDeTareas from "../components/modules/lista de tareas/components/ListaDeTareas.vue";
import registrarView from "../components/modules/registro/views/registrarView.vue";

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
    {
      path: "/registrar",
      name: "registrar",
      component: registrarView,
    },
  ],
});

export default router;
