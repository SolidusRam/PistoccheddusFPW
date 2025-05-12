<template>
  <div class="auth-view">
    <h2 class="auth-title">{{ isLogin ? 'Accedi' : 'Registrati' }}</h2>
    
    <div class="auth-container">
      <!-- Form di Login -->
      <form v-if="isLogin" class="auth-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="login-email">Email</label>
          <input 
            type="email" 
            id="login-email" 
            v-model="loginForm.email" 
            placeholder="Inserisci la tua email"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="login-password">Password</label>
          <input 
            type="password" 
            id="login-password" 
            v-model="loginForm.password" 
            placeholder="Inserisci la tua password"
            required
          >
        </div>
        
        <div class="form-group remember-me">
          <input type="checkbox" id="remember-me" v-model="loginForm.rememberMe">
          <label for="remember-me">Ricordami</label>
        </div>
        
        <button type="submit" class="auth-button">Accedi</button>
        
        <div class="auth-links">
          <a href="#" class="forgot-password">Password dimenticata?</a>
          <p>Non hai ancora un account? <a href="#" @click.prevent="toggleAuthMode">Registrati</a></p>
        </div>
      </form>
      
      <!-- Form di Registrazione -->
      <form v-else class="auth-form" @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="register-name">Nome</label>
          <input 
            type="text" 
            id="register-name" 
            v-model="registerForm.name" 
            placeholder="Inserisci il tuo nome"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="register-surname">Cognome</label>
          <input 
            type="text" 
            id="register-surname" 
            v-model="registerForm.surname" 
            placeholder="Inserisci il tuo cognome"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="register-email">Email</label>
          <input 
            type="email" 
            id="register-email" 
            v-model="registerForm.email" 
            placeholder="Inserisci la tua email"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="register-password">Password</label>
          <input 
            type="password" 
            id="register-password" 
            v-model="registerForm.password" 
            placeholder="Crea una password"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="register-password-confirm">Conferma Password</label>
          <input 
            type="password" 
            id="register-password-confirm" 
            v-model="registerForm.passwordConfirm" 
            placeholder="Conferma la tua password"
            required
          >
        </div>
        
        <div class="form-group accept-terms">
          <input type="checkbox" id="accept-terms" v-model="registerForm.acceptTerms" required>
          <label for="accept-terms">Accetto i <a href="#" class="terms-link">Termini e Condizioni</a></label>
        </div>
        
        <button type="submit" class="auth-button">Registrati</button>
        
        <div class="auth-links">
          <p>Hai già un account? <a href="#" @click.prevent="toggleAuthMode">Accedi</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Stato per controllare se siamo in modalità login o registrazione
const isLogin = ref(true);

// Form data per login
const loginForm = ref({
  email: '',
  password: '',
  rememberMe: false
});

// Form data per registrazione
const registerForm = ref({
  name: '',
  surname: '',
  email: '',
  password: '',
  passwordConfirm: '',
  acceptTerms: false
});

// Funzione per passare da login a registrazione e viceversa
const toggleAuthMode = () => {
  isLogin.value = !isLogin.value;
};

// Funzione per gestire il login (non funzionante)
const handleLogin = () => {
  // In un'applicazione reale, qui ci sarebbe la logica di autenticazione
  console.log('Login con:', loginForm.value);
  alert('Funzionalità di login non ancora implementata');
};

// Funzione per gestire la registrazione (non funzionante)
const handleRegister = () => {
  // In un'applicazione reale, qui ci sarebbe la logica di registrazione
  console.log('Registrazione con:', registerForm.value);
  alert('Funzionalità di registrazione non ancora implementata');
};
</script>

<style scoped>
.auth-view {
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
}

.auth-title {
  color: #074079;
  font-family: 'NotableLocal', sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
}

.auth-container {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #074079;
  outline: none;
  box-shadow: 0 0 0 2px rgba(7, 64, 121, 0.2);
}

.remember-me,
.accept-terms {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.remember-me label,
.accept-terms label {
  margin-bottom: 0;
  font-weight: normal;
}

.auth-button {
  background-color: #074079;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
  font-weight: bold;
}

.auth-button:hover {
  background-color: #053260;
}

.auth-links {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  color: #555;
}

.auth-links a {
  color: #074079;
  text-decoration: none;
  transition: color 0.3s;
}

.auth-links a:hover {
  color: #053260;
  text-decoration: underline;
}

.forgot-password {
  align-self: flex-start;
}

.terms-link {
  color: #074079;
  text-decoration: underline;
}

@media (max-width: 767px) {
  .auth-container {
    padding: 1.5rem;
  }
  
  .auth-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
  
  .form-group input {
    padding: 0.7rem;
  }
}
</style>