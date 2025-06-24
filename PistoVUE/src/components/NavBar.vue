<template>
  <div class="navbar-container">
    <nav class="main-nav clearfix">
      <RouterLink to="/" class="nav-link" title="Home">Home</RouterLink>
      <RouterLink to="/prodotti" class="nav-link" title="Prodotti">Prodotti</RouterLink>
      <RouterLink to="/aggiungi-prodotto" class="nav-link" title="Aggiungi Prodotto">Aggiungi Prodotto</RouterLink>
      <RouterLink to="/chi-siamo" class="nav-link" title="Chi Siamo">Chi Siamo</RouterLink>
      <RouterLink 
        to="/login" 
        class="nav-link" 
        :class="{ 'highlight-login': shouldHighlightLogin }"
        :title="sessionStore.isAuthenticated ? 'Profilo' : 'Login'">
        {{ sessionStore.isAuthenticated ? 'Profilo' : 'Login' }}
      </RouterLink>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'
import { useSessionStore } from '@/stores/session'

const route = useRoute()
const sessionStore = useSessionStore()

// Computed per determinare se evidenziare il pulsante login
const shouldHighlightLogin = computed(() => {
  return route.name === 'auth' && sessionStore.showAuthRedirect
})
</script>

<style scoped>
/* Stili per la navigazione */
.navbar-container {
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.main-nav {
  width: 100%;
  padding: 0.5rem;
  backdrop-filter: blur(5px);
  text-align: center;
}

.nav-link {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 0.75rem 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.3);
  margin: 2px 0;
  border-radius: 4px;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.8);
}

.nav-link:last-child {
  border-bottom: none;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Stili per il link della pagina corrente */
.router-link-exact-active,
.router-link-active {
  font-weight: bold;
  color: #074079;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Previene il layout shift quando i link cambiano stile */
.nav-link::after {
  display: block;
  content: attr(title);
  height: 0;
  visibility: hidden;
  overflow: hidden;
  font-weight: bold;
}



/* Stili per l'evidenziazione quando l'utente viene reindirizzato */
.nav-link.highlight-login {
  background-color: rgba(220, 53, 69, 0.9) ;
  color: white ;
  /* border: 2px solid #dc3545; */
  animation: pulseRed 1.5s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(220, 53, 69, 0.7);
}

@keyframes pulseRed {
  0% {
    box-shadow: 0 0 15px rgba(220, 53, 69, 0.7);
    background-color: rgba(220, 53, 69, 0.9);
  }
  50% {
    box-shadow: 0 0 30px rgba(220, 53, 69, 1);
    background-color: rgba(220, 53, 69, 1);
  }
  100% {
    box-shadow: 0 0 15px rgba(220, 53, 69, 0.7);
    background-color: rgba(220, 53, 69, 0.9);
  }
}

/* Media query per desktop (768px and above) */
@media (min-width: 768px) {
  .main-nav {
    text-align: center;
    padding: 0.25rem 0.5rem;
  }
  
  .nav-link {
    display: inline-block;
    float: none;
    vertical-align: top;
    padding: 0.5rem 1rem;
    border-bottom: none;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 2px;
  }
  
  .nav-link:last-child {
    border-right: none;
  }
  
  
}
</style>