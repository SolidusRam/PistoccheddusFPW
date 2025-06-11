<template>
  <div class="footer-container">
    <div class="logo-container">
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
              <span>Mario Rossi - <a href="mailto:mario.rossi@email.com">mario.rossi@email.com</a></span>
            </div>
            <div class="team-member">
              <span>Anna Bianchi - <a href="mailto:anna.bianchi@email.com">anna.bianchi@email.com</a></span>
            </div>
            <div class="team-member">
              <span>Giuseppe Verdi - <a href="mailto:giuseppe.verdi@email.com">giuseppe.verdi@email.com</a></span>
            </div>
            <div class="team-member">
              <span>Laura Neri - <a href="mailto:laura.neri@email.com">laura.neri@email.com</a></span>
            </div>
          </div>
        </div>
        <div class="social-links">
          <div class="social-icons">
            <a href="#" class="social-icon" title="Facebook">FB</a>
            <a href="#" class="social-icon" title="Instagram">IG</a>
            <a href="#" class="social-icon" title="Twitter">X</a>
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
  transition: transform 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
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

.social-links {
  padding-top: 0.2rem;
  width: 100%;
  text-align: center;
}

.social-icons {
  text-align: center;
}

.social-icon {
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  line-height: 1.75rem;
  width: 1.75rem;
  height: 1.75rem;
  background-color: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  text-decoration: none;
  border-radius: 50%;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.4);
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  font-weight: bold;
  margin: 0 0.375rem;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.7);
  color: #074079;
  transform: scale(1.1);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

/* Responsive: Desktop (768px and above) */
@media (min-width: 768px) {
  .footer-container {
    text-align: left;
    padding: 0.6rem 1.5rem;
  }
  
  .footer-container::after {
    content: "";
    display: table;
    clear: both;
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
  
  .social-links {
    border-top: none;
    padding-top: 0;
    width: auto;
    text-align: right;
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