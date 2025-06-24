<template>
  <div class="auth-view">
    <!-- Vista per utente NON autenticato -->
    <div v-if="!sessionStore.isAuthenticated" class="auth-container">
      <h2 class="auth-title">{{ showRegister ? 'Registrati' : 'Accedi' }}</h2>
      
      <!-- Toggle tra Login e Registrazione -->
      <div class="auth-toggle clearfix">
        <button 
          @click="showRegister = false" 
          :class="{ active: !showRegister }"
          class="toggle-button">
          Login
        </button>
        <button 
          @click="showRegister = true" 
          :class="{ active: showRegister }"
          class="toggle-button">
          Registrati
        </button>
      </div>
      
      <!-- Messaggi di errore -->
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
      
      <!-- Messaggi di successo -->
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
      
      <!-- Form di Login -->
      <form v-if="!showRegister" class="auth-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            type="text"
            name="username"
            id="username"
            v-model="loginForm.username"
            placeholder="Inserisci il tuo username"
            required
            :disabled="isLoading"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            name="password"
            id="password"
            v-model="loginForm.password"
            placeholder="Inserisci la tua password"
            required
            :disabled="isLoading"
          >
        </div>
        
        <button type="submit" class="auth-button" :disabled="isLoading">
          {{ isLoading ? 'Accesso in corso...' : 'Accedi' }}
        </button>
      </form>

      <!-- Form di Registrazione -->
      <form v-else class="auth-form" @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="reg-nome">Nome</label>
          <input 
            type="text"
            id="reg-nome"
            v-model="registerForm.nome"
            placeholder="Inserisci il tuo nome"
            required
            :disabled="isRegisterLoading"
          >
        </div>
        
        <div class="form-group">
          <label for="reg-cognome">Cognome</label>
          <input 
            type="text"
            id="reg-cognome"
            v-model="registerForm.cognome"
            placeholder="Inserisci il tuo cognome"
            required
            :disabled="isRegisterLoading"
          >
        </div>
        
        <div class="form-group">
          <label for="reg-username">Username</label>
          <input 
            type="text"
            id="reg-username"
            v-model="registerForm.username"
            placeholder="Scegli un username"
            required
            :disabled="isRegisterLoading"
          >
        </div>
        
        <div class="form-group">
          <label for="reg-email">Email</label>
          <input 
            type="email"
            id="reg-email"
            v-model="registerForm.email"
            placeholder="Inserisci la tua email"
            required
            :disabled="isRegisterLoading"
          >
        </div>
        
        <div class="form-group">
          <label for="reg-password">Password</label>
          <input 
            type="password"
            id="reg-password"
            v-model="registerForm.password"
            placeholder="Scegli una password (minimo 5 caratteri)"
            required
            :disabled="isRegisterLoading"
          >
        </div>
        
        <div class="form-group">
          <label for="reg-confirm-password">Conferma Password</label>
          <input 
            type="password"
            id="reg-confirm-password"
            v-model="registerForm.confirmPassword"
            placeholder="Conferma la password"
            required
            :disabled="isRegisterLoading"
          >
        </div>
        
        <div class="form-group">
          <label for="reg-citta">Città</label>
          <input 
            type="text"
            id="reg-citta"
            v-model="registerForm.citta"
            placeholder="Inserisci la tua città"
            required
            :disabled="isRegisterLoading"
          >
        </div>
        
        <!-- Messaggio di validazione per la registrazione -->
        <div v-if="hasRegisterValidationError" class="validation-error">
          {{ registerValidationMessage }}
        </div>
        
        <button type="submit" class="auth-button" :disabled="isRegisterLoading || !isRegisterFormValid || hasRegisterValidationError">
          {{ isRegisterLoading ? 'Registrazione in corso...' : 'Registrati' }}
        </button>
      </form>
    </div>

    <!-- Vista per utente AUTENTICATO -->
    <div v-else class="user-profile">
      <h2 class="auth-title">Benvenuto!</h2>
      
      <div class="user-info">
        <h3>I tuoi dati</h3>
        <div class="user-details">
          <p><strong>Nome:</strong> {{ sessionStore.user.nome }}</p>
          <p><strong>Cognome:</strong> {{ sessionStore.user.cognome }}</p>
          <p><strong>Username:</strong> {{ sessionStore.user.username }}</p>
          <p><strong>Email:</strong> {{ sessionStore.user.email }}</p>
          <p><strong>Città:</strong> {{ sessionStore.user.citta }}</p>
          <p><strong>Registrato il:</strong> {{ formatDate(sessionStore.user.data_registrazione) }}</p>
        </div>

        <!-- Sezione cambio password -->
        <div class="password-section">
          <p class="change-password-link" @click="togglePasswordChange">
            {{ showPasswordChange ? 'Nascondi cambio password' : 'Cambio password' }}
          </p>
          
          <div v-show="showPasswordChange" class="password-change-form">
            <div v-if="passwordMessage" class="password-message" :class="passwordMessageType">
              {{ passwordMessage }}
            </div>
            
            <form @submit.prevent="handlePasswordChange">
              <div class="form-group">
                <label for="oldPassword">Vecchia password</label>
                <input 
                  type="password"
                  id="oldPassword"
                  v-model="passwordForm.oldPassword"
                  placeholder="Inserisci la vecchia password"
                  required
                  :disabled="isPasswordLoading"
                >
              </div>
              
              <div class="form-group">
                <label for="newPassword">Nuova password</label>
                <input 
                  type="password"
                  id="newPassword"
                  v-model="passwordForm.newPassword"
                  placeholder="Inserisci la nuova password"
                  required
                  :disabled="isPasswordLoading"
                >
              </div>
              
              <div class="form-group">
                <label for="confirmPassword">Conferma nuova password</label>
                <input 
                  type="password"
                  id="confirmPassword"
                  v-model="passwordForm.confirmPassword"
                  placeholder="Conferma la nuova password"
                  required
                  :disabled="isPasswordLoading"
                >
              </div>
              
              <!-- Messaggio di validazione -->
              <div v-if="hasPasswordValidationError" class="validation-error">
                {{ passwordValidationMessage }}
              </div>
              
              <button type="submit" class="auth-button" :disabled="isPasswordLoading || !isPasswordFormValid || hasPasswordValidationError">
                {{ isPasswordLoading ? 'Cambiando...' : 'Cambia Password' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Pulsante logout -->
        <button @click="handleLogout" class="logout-button" :disabled="isLoading">
          {{ isLoading ? 'Disconnessione...' : 'Logout' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useSessionStore } from '@/stores/session'
import * as Auth from '@/utils/auth.js'

const router = useRouter()
const sessionStore = useSessionStore()

// Form data
const loginForm = ref({
  username: '',
  password: ''
})

const registerForm = ref({
  nome: '',
  cognome: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  citta: ''
})

const passwordForm = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// UI state
const isLoading = ref(false)
const isRegisterLoading = ref(false)
const isPasswordLoading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const passwordMessage = ref('')
const passwordMessageType = ref('error')
const showPasswordChange = ref(false)
const showRegister = ref(false)

// Computed properties
const isPasswordFormValid = computed(() => {
  return passwordForm.value.oldPassword && 
         passwordForm.value.newPassword && 
         passwordForm.value.newPassword.length >= 5 &&
         passwordForm.value.confirmPassword &&
         passwordForm.value.newPassword === passwordForm.value.confirmPassword &&
         passwordForm.value.newPassword !== passwordForm.value.oldPassword
})

// Computed properties per la validazione del form password
const passwordValidationMessage = computed(() => {
  if (!passwordForm.value.newPassword && !passwordForm.value.confirmPassword) {
    return ''
  }
  
  // Controllo lunghezza minima password
  if (passwordForm.value.newPassword && passwordForm.value.newPassword.length < 5) {
    return 'La password deve avere almeno 5 caratteri'
  }
  
  if (passwordForm.value.newPassword && passwordForm.value.confirmPassword) {
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
      return 'Le password non corrispondono'
    }
    
    if (passwordForm.value.newPassword === passwordForm.value.oldPassword) {
      return 'La nuova password deve essere diversa da quella attuale'
    }
  }
  
  return ''
})

const hasPasswordValidationError = computed(() => {
  return passwordValidationMessage.value !== ''
})

// Computed properties per la validazione del form registrazione
const registerValidationMessage = computed(() => {
  if (!registerForm.value.password && !registerForm.value.confirmPassword) {
    return ''
  }
  
  // Controllo lunghezza minima password
  if (registerForm.value.password && registerForm.value.password.length < 5) {
    return 'La password deve avere almeno 5 caratteri'
  }
  
  if (registerForm.value.password && registerForm.value.confirmPassword) {
    if (registerForm.value.password !== registerForm.value.confirmPassword) {
      return 'Le password non corrispondono'
    }
  }
  
  return ''
})

const hasRegisterValidationError = computed(() => {
  return registerValidationMessage.value !== ''
})

const isRegisterFormValid = computed(() => {
  return registerForm.value.nome && 
         registerForm.value.cognome && 
         registerForm.value.username && 
         registerForm.value.email && 
         registerForm.value.password && 
         registerForm.value.password.length >= 5 &&
         registerForm.value.confirmPassword &&
         registerForm.value.citta &&
         registerForm.value.password === registerForm.value.confirmPassword
})

// Methods
const handleLogin = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    const response = await Auth.login(loginForm.value.username, loginForm.value.password)
    
    if (response.success && response.user) {
      sessionStore.setUser(response.user)
      router.push('/')
    } else {
      errorMessage.value = 'Credenziali non valide'
    }  } catch (error) {
    console.error('Errore durante il login:', error)
    
    // Gestione semplificata degli errori
    if (error.message && (error.message.includes('401') || error.message.includes('Unauthorized'))) {
      errorMessage.value = 'Credenziali non valide'
    } else {
      errorMessage.value = 'Errore server o database non disponibile'
    }
  } finally {
    isLoading.value = false
  }
}

const handleRegister = async () => {
  if (isRegisterLoading.value || !isRegisterFormValid.value) return
  
  isRegisterLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    const response = await Auth.register(
      registerForm.value.nome,
      registerForm.value.cognome,
      registerForm.value.username,
      registerForm.value.email,
      registerForm.value.password,
      registerForm.value.citta
    )
    
    if (response.success) {
      successMessage.value = 'Registrazione completata con successo! Puoi ora effettuare il login.'
      
      // Reset form
      registerForm.value = {
        nome: '',
        cognome: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        citta: ''
      }
      
      // Passa al form di login dopo 2 secondi
      setTimeout(() => {
        showRegister.value = false
        successMessage.value = ''
      }, 2000)
    }  } catch (error) {
    console.error('Errore durante la registrazione:', error)
    
    // Gestione semplificata degli errori
    let errorMsg = 'Errore server o database non disponibile'
    
    if (error.message && error.message.includes('Username già esistente')) {
      errorMsg = 'Username già in uso. Scegli un username diverso.'
    } else if (error.message && error.message.includes('Email già esistente')) {
      errorMsg = 'Email già registrata. Usa un\'altra email o effettua il login.'
    } else if (error.message && error.message.includes('Username e email già esistenti')) {
      errorMsg = 'Username e email già registrati. Effettua il login o usa dati diversi.'
    }
    
    errorMessage.value = errorMsg
  } finally {
    isRegisterLoading.value = false
  }
}

const handleLogout = async () => {
  if (isLoading.value) return
  
  isLoading.value = true
  
  try {
    await Auth.logout()
    sessionStore.clearSession()
    router.push('/')
  } catch (error) {
    console.error('Errore durante il logout:', error)
    // Anche in caso di errore, pulisci la sessione locale
    sessionStore.clearSession()
    router.push('/')
  } finally {
    isLoading.value = false
  }
}

const togglePasswordChange = () => {
  showPasswordChange.value = !showPasswordChange.value
  if (!showPasswordChange.value) {
    // Reset form when hiding
    passwordForm.value = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
    passwordMessage.value = ''
  }
}

const handlePasswordChange = async () => {
  if (isPasswordLoading.value || !isPasswordFormValid.value) return
  
  isPasswordLoading.value = true
  passwordMessage.value = ''
  
  try {
    await Auth.changePassword(passwordForm.value.oldPassword, passwordForm.value.newPassword)
    passwordMessage.value = 'Password cambiata con successo!'
    passwordMessageType.value = 'success'
    
    // Reset form
    passwordForm.value = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
    
    // Hide form after success
    setTimeout(() => {
      showPasswordChange.value = false
      passwordMessage.value = ''
    }, 2000)
      } catch (error) {
    console.error('Errore durante il cambio password:', error)
    
    let errorMsg = 'Errore server o database non disponibile'
    
    // Solo gestione specifica per credenziali errate
    if (error.message && (error.message.includes('401') || error.message.includes('Unauthorized'))) {
      errorMsg = 'Password attuale non corretta'
    }
    
    passwordMessage.value = errorMsg
    passwordMessageType.value = 'error'
  } finally {
    isPasswordLoading.value = false
  }
}

const formatDate = (dateString) => {
  if (!dateString) return 'Data non disponibile'
  const date = new Date(dateString)
  return date.toLocaleDateString('it-IT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

// Lifecycle
onMounted(() => {
  // Carica dati utente dal localStorage se disponibili
  sessionStore.loadFromStorage()
})
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
  margin-bottom: 1.2rem;
}

.auth-form .form-group {
  margin-bottom: 1.2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.form-group input:focus {
  border-color: #074079;
  outline: none;
  box-shadow: 0 0 0 2px rgba(7, 64, 121, 0.2);
}

.form-group input:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}

.remember-me,
.accept-terms {
  margin-bottom: 0.5rem;
}

.remember-me input,
.accept-terms input {
  margin-right: 0.5rem;
  vertical-align: middle;
}

.remember-me label,
.accept-terms label {
  margin-bottom: 0;
  font-weight: normal;
}

.auth-button {
  width: 100%;
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

.auth-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  background-color: #ffebee;
  color: #d32f2f;
  padding: 0.8rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #ffcdd2;
}

.success-message {
  background-color: #e8f5e8;
  color: #2e7d32;
  padding: 0.8rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #c8e6c9;
}

/* Auth Toggle Styles */
.auth-toggle {
  margin-bottom: 2rem;
  text-align: center;
}

.toggle-button {
  width: 48%;
  padding: 0.6rem;
  border: 2px solid #074079;
  background-color: white;
  color: #074079;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s;
}

.toggle-button:first-child {
  border-radius: 4px 0 0 4px;
  margin-right: 1%;
}

.toggle-button:last-child {
  border-radius: 0 4px 4px 0;
  margin-left: 1%;
}

.toggle-button.active {
  background-color: #074079;
  color: white;
}

.toggle-button:hover:not(.active) {
  background-color: #f0f7ff;
}

/* Stile per il messaggio di validazione del form registrazione */
.validation-error {
  color: #d32f2f;
  font-size: 0.9rem;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #ffebee;
  border-radius: 4px;
  border: 1px solid #ffcdd2;
}

/* User Profile Styles */
.user-profile {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.user-info {
  text-align: left;
}

.user-info h3 {
  color: #074079;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.user-details {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.user-details p {
  margin-bottom: 0.5rem;
  color: #333;
}

.user-details strong {
  color: #074079;
}

/* Password Change Section */
.password-section {
  margin: 1.5rem 0;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.change-password-link {
  color: #074079;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 1rem;
  font-weight: bold;
}

.change-password-link:hover {
  color: #052d5a;
}

.password-change-form {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
}

.password-message {
  padding: 0.8rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.password-message.error {
  background-color: #ffebee;
  color: #d32f2f;
  border: 1px solid #ffcdd2;
}

.password-message.success {
  background-color: #e8f5e8;
  color: #2e7d32;
  border: 1px solid #c8e6c9;
}

.logout-button {
  width: 100%;
  padding: 0.8rem;
  background-color: #d32f2f;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;
}

.logout-button:hover:not(:disabled) {
  background-color: #b71c1c;
}

.logout-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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
  
  .user-profile {
    padding: 1rem;
  }
}
</style>