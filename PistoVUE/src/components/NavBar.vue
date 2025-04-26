<template>
  <div class="navbar-container">
    <nav class="main-nav">
      <RouterLink to="/" class="nav-link" title="Home">Home</RouterLink>
      <RouterLink to="/prodotti" class="nav-link" title="Prodotti">Prodotti</RouterLink>
      <RouterLink to="/aggiungi-prodotto" class="nav-link" title="Aggiungi Prodotto">Aggiungi Prodotto</RouterLink>
      <RouterLink to="/chi-siamo" class="nav-link" title="Chi Siamo">Chi Siamo</RouterLink>
      <RouterLink to="/login" class="nav-link" title="Login">Login</RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Stili per la navigazione */
.navbar-container {
  width: 100%;
}

.main-nav {
  display: flex;
  flex-direction: column; 
  width: 100%;
  padding: 0.5rem 0;
}

.nav-link {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 0.75rem 1rem;
  font-weight: 500;
  transition: background-color 0.2s, color 0.2s;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-link:last-child {
  border-bottom: none;
}

.nav-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Stili per il link della pagina corrente */
.router-link-exact-active,
.router-link-active {
  font-weight: bold;
  color: #074079;
  background-color: #aed3ac;
  border-radius: 4px;
}

/* Previene il layout shift quando i link cambiano stile
   (gli elementi non vengono spostati quando diventano bold) */
.nav-link::after {
  display: block;
  content: attr(title);
  height: 0;
  visibility: hidden;
  overflow: hidden;
  font-weight: bold; /* Forza il massimo spazio che potrebbe occupare */
}

/* Media query per desktop (768px and above) */
@media (min-width: 768px) {
  .main-nav {
    flex-direction: row; 
    justify-content: flex-start;
    align-items: center;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
    border-bottom: none;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .nav-link:last-child {
    border-right: none;
  }
  
}
</style>