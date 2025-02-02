<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validationSchema="schema" @submit="onSubmit">
      <div class="form">
        <label for="">Nombre:</label>
        <Field
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
        <Field type="email" name="email" id="" placeholder="ingrese su email" />
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

const onSubmit = () => {
  console.log("se ha enviado el formulario");
};
</script>

<style scoped>
.form {
  margin-bottom: 20px;
}
</style>
