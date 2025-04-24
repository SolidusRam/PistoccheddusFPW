<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/prodotti">Prodotti</RouterLink>
    <RouterLink to="/aggiungi-prodotto">Aggiungi Prodotto</RouterLink>
    <RouterLink to="/chi-siamo">Chi Siamo</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Stili per la navigazione */
.router-link-exact-active {
  /* Stili per il link della pagina corrente esatta (es. Home) */
  font-weight: bold;
  text-decoration: underline;
}
/* Puoi usare .router-link-active se vuoi uno stile per le rotte "genitore" attive */
</style>