<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validationSchema="schema" @submit="onSubmit">
      <div class="form">
        <label for="">Nombre:</label>
        <Field
          v-model="nombre"
          type="text"
          name="nombre"
          id=""
          placeholder="ingrese su nombre"
        />
        <ErrorMessage name="nombre" />
      </div>
      <br />
      <div class="form">
        <label for="email">Email:</label>
        <Field
          v-model="email"
          type="email"
          name="email"
          id=""
          placeholder="ingrese su email"
        />
        <ErrorMessage name="email" />
      </div>
      <br />
      <div class="form">
        <button type="submit">registar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema";
import { useRegistrarStore } from "../stores/registrarStore";
import { ref } from "vue";

const registrarStore = useRegistrarStore();

const nombre = ref("");
const email = ref("");

const onSubmit = () => {
  registrarStore.guardarRegistro(nombre.value, email.value);
  console.log("se ha enviado el formulario");
};
</script>

<style scoped>
.form {
  margin-bottom: 20px;
}
</style>
