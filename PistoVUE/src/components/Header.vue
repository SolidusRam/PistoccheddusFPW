<template>
  <div class="header-container clearfix">
    <div class="title-container blur-medium">
      <div class="logo-container hover-transform">
        <img src="@/assets/logo.png" alt="Logo Pistoccheddus" class="logo">
      </div>
      <h1 class="site-title">Pistoccheddus</h1>
      <p class="site-subtitle">Il sito dei dolci Sardi migliori al mondo</p>
    </div>
  </div>
</template>

<style scoped>
.header-container {
  text-align: center;
  padding: 0.20rem;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
}

.logo-container {
  margin: 0 auto 0.5rem;
  display: inline-block;
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
  padding: 10px;
  border-radius: 5px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
}

.site-title {
  font-family: 'NotableLocal', sans-serif; /* Applica il font Notable */
  font-size: 2rem;
  margin: 0;
  color: #012586;
  text-shadow: 1px 1px 2px rgba(19, 18, 18, 0.8);
}

.site-subtitle {
  font-family:Arial, Helvetica, sans-serif; /* Applica il font Notable */
  font-size: 1rem;
  margin-top: 0.25rem;
  color: #000000;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
}

/* Responsive: Desktop (768px and above) */
@media (min-width: 768px) {
  .header-container {
    text-align: left;
    padding: 0.75rem;
  }
  
  .title-container {
    text-align: left;
    line-height: 1.5;
    padding: 10px;
  }
  
  .logo-container {
    float: left;
    margin: 0 1.5rem 0 0;
  }
  
  .site-title {
    font-size: 1.75rem;
  }
}
</style>