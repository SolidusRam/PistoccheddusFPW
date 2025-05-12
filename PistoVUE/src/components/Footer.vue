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
          <ul>
            <li>
              <span>Mario Rossi - <a href="mailto:mario.rossi@email.com">mario.rossi@email.com</a></span>
              <span class="separator">|</span>
              <span>Anna Bianchi - <a href="mailto:anna.bianchi@email.com">anna.bianchi@email.com</a></span>
              <span class="separator">|</span>
              <span>Giuseppe Verdi - <a href="mailto:giuseppe.verdi@email.com">giuseppe.verdi@email.com</a></span>
              <span class="separator">|</span>
              <span>Laura Neri - <a href="mailto:laura.neri@email.com">laura.neri@email.com</a></span>
            </li>
          </ul>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.6rem 0.5rem;
  width: 100%;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  color: #ffffff;
  background-color: rgba(7, 64, 121, 0.7); /* Sfondo blu scuro più opaco */
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
  max-width: 40px;
  height: auto;
  display: block;
  filter: brightness(1.3) drop-shadow(0 0 3px rgba(255, 255, 255, 0.3));
}

.content-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
}

.team-contacts ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.team-contacts li {
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e0e0e0;
  font-size: 0.8rem;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
}

/* Nascondi il separatore su mobile */
.separator {
  display: none;
}

.team-contacts li span:first-child,
.team-contacts li span:last-child {
  margin: 0 0 0.25rem 0;
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
  display: flex;
  align-items: center;
  padding-top: 0.2rem;
  width: 100%;
  justify-content: center;
}

.social-icons {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
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
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.6rem 1.5rem;
    align-items: center;
  }
  
  .logo-container {
    margin-bottom: 0;
    margin-right: 1rem;
  }
  
  .content-container {
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .title-container {
    text-align: left;
    line-height: 1.2;
    margin-bottom: 0;
  }
  
  .details-container {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
  }
  
  .team-contacts {
    text-align: right;
  }
  
  .social-links {
    border-top: none;
    padding-top: 0;
    width: auto;
  }

  /* Ripristina layout orizzontale per desktop */
  .team-contacts li {
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  /* Mostra il separatore su desktop */
  .separator {
    display: inline;
    margin: 0 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);
  }

  /* Ripristina margini per desktop */
  .team-contacts li span {
    margin: 0;
  }
}
</style>