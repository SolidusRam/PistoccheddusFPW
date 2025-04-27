<template>
  <div class="footer-content">
    <p class="group-name">Pistoccheddus Group &copy; 2025</p>
    <div class="team-contacts">
      <h4>Contatti:</h4>
      <ul>
        <li>
          <span>Mario Rossi - <a href="mailto:mario.rossi@email.com">mario.rossi@email.com</a></span>
          <span class="separator"> | </span>
          <span>Anna Bianchi - <a href="mailto:anna.bianchi@email.com">anna.bianchi@email.com</a></span>
        </li>
        <li>
          <span>Giuseppe Verdi - <a href="mailto:giuseppe.verdi@email.com">giuseppe.verdi@email.com</a></span>
          <span class="separator"> | </span>
          <span>Laura Neri - <a href="mailto:laura.neri@email.com">laura.neri@email.com</a></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  padding-left: 1.5rem;
  padding-right: 1rem;    
  font-size: 0.875rem;
}

.group-name {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.team-contacts h4 {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.team-contacts ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.team-contacts li {
  margin-bottom: 0.25rem;
  display: flex; /* Use flexbox for better control */
  flex-direction: column; /* Stack vertically by default (mobile) */
  align-items: center; /* Center items when stacked */
}

/* Nascondi il separatore su mobile */
.separator {
  display: none;
}

/* Rimuovi margini specifici per mobile */
.team-contacts li span:first-child,
.team-contacts li span:last-child {
  margin: 0 0 0.25rem 0; /* Add some bottom margin when stacked */
}

.team-contacts a {
  color: #aed3ac; 
  text-decoration: none;
}

.team-contacts a:hover {
  text-decoration: underline;
}

/* Responsive: Desktop */
@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .group-name {
    margin-bottom: 0;
  }

  .team-contacts {
    text-align: right;
  }

  /* Ripristina layout orizzontale per desktop */
  .team-contacts li {
    flex-direction: row; /* Align horizontally on desktop */
    justify-content: flex-end; /* Align to the right */
  }

  /* Mostra il separatore su desktop */
  .separator {
    display: inline;
    margin: 0 0.5rem; /* Add space around the separator */
  }

  /* Ripristina margini per desktop */
  .team-contacts li span:first-child,
  .team-contacts li span:last-child {
    margin: 0; /* Reset mobile margins */
  }
}
</style>