<template>
  <div class="sidebar-right-container desktop-sticky">
    <h3 class="ad-title">Pubblicità</h3>
    
    <!-- Prima pubblicità -->
    <div class="ad-box">
      <div class="ad-content">
        <img src="@/assets/pardula.jpg" alt="Corso di pasticceria sarda" class="ad-image">
        <h4 class="ad-heading">Corso di Pasticceria Sarda</h4>
        <p class="ad-text">Impara i segreti delle pardulas tradizionali!</p>
      </div>
    </div>
      
    
    <!-- Terza pubblicità -->
    <div class="ad-box special-ad">
      <div class="ad-content">
        <div class="offer-badge">-20%</div>
        <h4 class="ad-heading">Offerta Speciale</h4>
        <p class="ad-text">Forni professionali per dolci sardi perfetti!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidebar-right-container {
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.ad-title {
  color: #074079;
  font-family: 'NotableLocal', sans-serif;
  border-bottom: 2px solid #074079;
  padding-bottom: 8px;
  margin-top: 0;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.ad-box {
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: white;
}

.ad-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.ad-content {
  padding: 1rem;
  position: relative;
  text-align: center;
}

.ad-image {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.8rem;
  transition: transform 0.5s ease;
}

.ad-box:hover .ad-image {
  transform: scale(1.05);
}

.ad-heading {
  color: #074079;
  margin: 0.5rem 0;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.ad-box:hover .ad-heading {
  color: #053260;
}

.ad-text {
  color: #555;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

/* Stile per l'offerta speciale */
.special-ad {
  border: 2px solid #ffcc00;
  background-color: #fffbf0;
}

.offer-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #ff3b30;
  color: white;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-weight: bold;
  font-size: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transform: rotate(10deg);
  /* Sostituita animazione @keyframes complessa con transition semplice */
  transition: transform 0.3s ease;
}

.offer-badge:hover {
  transform: scale(1.05) rotate(10deg);
}

/* Rimossa animazione @keyframes pulse - troppo complessa */

/* Responsive design per dispositivi mobili */
@media (max-width: 767px) {
  .ad-box {
    margin-bottom: 15px;
  }
  
  .ad-image {
    height: 100px;
  }
  
  .ad-heading {
    font-size: 0.9rem;
  }
  
  .ad-text {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
  

}
</style>