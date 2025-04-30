<!-- Logo e Titolo--> 
<template>
  <div class="header-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo Pistoccheddus" class="logo">
    </div>
    <div class="title-container">
      <h1 class="site-title">Pistoccheddus</h1>
      <p class="site-subtitle">Il sito dei dolci Sardi migliori al mondo</p>
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
  border-radius: 8px;
  overflow: hidden;
}

.logo-container {
  margin: 0;
  padding: 0;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo {
  max-width: 80px;
  height: auto;
  display: block;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
}

.title-container {
  text-align: center;
  line-height: 1;
  padding: 5px;
  border-radius: 5px;
  backdrop-filter: blur(2px);
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
}

.site-title {
  font-size: 1.5rem;
  margin: 0;
  color: #074079;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.site-subtitle {
  font-size: 0.875rem;
  margin-top: 0.25rem;
  color: #333;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.9);
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