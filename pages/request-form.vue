<template>
  <v-container>
    <h1>Formulário de Solicitação</h1>

    <v-form>
      <v-text-field label="Nome" required></v-text-field>
      <v-text-field label="Localização" required></v-text-field>
      <v-select
          :items="['Troca de Lâmpada', 'Solicitação de Patrulha']"
          label="Tipo de Solicitação"
          required
      ></v-select>
      <v-textarea label="Descrição" required></v-textarea>
      <v-btn color="primary" class="mt-4" @click="submitRequest">Enviar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  methods: {
    submitRequest() {
      alert('Solicitação enviada com sucesso!')
    },
  },
}
</script>
