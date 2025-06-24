<template>
  <div class="footer-container clearfix">
    <div class="logo-container hover-transform">
      <img src="@/assets/logo.png" alt="Logo Pistoccheddus" class="logo">
    </div>
    <div class="content-container">
      <div class="title-container">
        <h3 class="footer-title">Pistoccheddus Group &copy; 2025</h3>
      </div>
      <div class="details-container">
        <div class="team-contacts">
          <div class="team-members">
            <div class="team-member">
              <span>Igor Derosas - <a>igorderosas@mail</a></span>
            </div>
            <div class="team-member">
              <span>Leonardo Melis - <a>leonardomelis@mail</a></span>
            </div>
            <div class="team-member">
              <span>Matteo Parasuco - <a>matteoparasuco@mail</a></span>
            </div>
            <div class="team-member">
              <span>Sharon Pisanu - <a>sharonpisau@mail</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  padding: 0.6rem 0.5rem;
  width: 100%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  color: #ffffff;
  background-color: rgba(7, 64, 121, 0.7); /* Sfondo blu scuro più opaco */
  text-align: center;
}

.logo-container {
  margin: 0;
  padding: 0;
  margin-right: 0.5rem;
  display: inline-block;
  vertical-align: middle;
}

.logo {
  max-width: 40px;
  height: auto;
  display: block;
  filter: brightness(1.3) drop-shadow(0 0 3px rgba(255, 255, 255, 0.3));
}

.content-container {
  width: 100%;
  text-align: center;
}

.title-container {
  text-align: center;
  line-height: 1;
  padding: 0.2rem 0;
  border-radius: 5px;
}

.footer-title {
  font-family: 'NotableLocal', sans-serif;
  font-size: 1.1rem;
  margin: 0;
  color: #ffffff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.details-container {
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
}

.team-contacts {
  text-align: center;
}

.team-members {
  text-align: center;
  margin-bottom: 0.25rem;
}

.team-member {
  display: block;
  color: #e0e0e0;
  font-size: 0.8rem;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin-bottom: 0.25rem;
}

.team-member span {
  margin: 0;
}

.team-contacts a {
  color: #74b2e8; /* Blu chiaro per i link su sfondo scuro */
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: bold;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
}

.team-contacts a:hover {
  color: #ffffff;
  text-decoration: underline;
}

/* Responsive: Desktop (768px and above) */
@media (min-width: 768px) {
  .footer-container {
    text-align: left;
    padding: 0.6rem 1.5rem;
  }
  
  .logo-container {
    float: left;
    margin-bottom: 0;
    margin-right: 1rem;
  }
  
  .content-container {
    overflow: hidden;
    text-align: left;
  }
  
  .title-container {
    float: left;
    text-align: left;
    line-height: 1.2;
    margin-bottom: 0;
    width: auto;
  }
  
  .details-container {
    float: right;
    text-align: right;
    margin-top: 0;
    margin-left: 2rem;
  }
  
  .team-contacts {
    text-align: right;
    margin-bottom: 0.5rem;
  }

  /* Layout orizzontale per desktop */
  .team-members {
    text-align: right;
    margin-bottom: 0;
  }
  
  .team-member {
    display: inline;
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
  
  .team-member:not(:last-child)::after {
    content: " |";
    margin: 0 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  }
}
</style>