<!-- Logo e Titolo--> 
<template>
  <div class="header-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo Pistoccheddus" class="logo">
    </div>
    <div class="title-container">
      <h1 class="site-title">Titolone</h1>
      <p class="site-subtitle">Sottotitolo super</p>
    </div>
  </div>
</template>

<style scoped>

.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.20rem;
  width: 100%;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

.logo-container {
  margin: 0; /* Rimosso ogni margine */
  padding: 0; /* Rimosso ogni padding */
  margin-right: 0.5rem; /* Solo un piccolo spazio a destra */
  display: flex; /* Aggiunto per centrare verticalmente */
  align-items: center; 
}

.logo {
  max-width: 80px;
  height: auto;
  display: block;
}

.title-container {
  text-align: center;
  line-height: 1;
}

.site-title {
  font-size: 1.5rem;
  margin: 0;
  color: #074079;
}

.site-subtitle {
  font-size: 0.875rem;
  margin-top: 0.25rem;
  color: #666;
}

/* Responsive: Desktop (768px and above) */
@media (min-width: 768px) {
  .header-container {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.75rem;
  }
  
  .logo-container {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
  
  .title-container {
    text-align: left;
    line-height: 1.5;
  }
  
  .site-title {
    font-size: 1.75rem;
  }
}

</style>