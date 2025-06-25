import { useSessionStore } from '@/stores/session'

export const requireAuth = (to, from, next) => {
  const sessionStore = useSessionStore()
  
  if (!sessionStore.user) {
    sessionStore.loadFromStorage()
  }
  
  if (sessionStore.isLogged()) {
    next() // Utente autenticato, consente l'accesso
  } else {
    // Attiva il trigger per il redirect di autenticazione
    sessionStore.triggerAuthRedirect()
    next('/login')
  }
}

export const redirectIfAuthenticated = (to, from, next) => {
  const sessionStore = useSessionStore()
  
  if (!sessionStore.isAuthenticated) {
    sessionStore.loadFromStorage()
  }
  
  if (sessionStore.isAuthenticated) {
    next('/') // User is already authenticated, redirect to home
  } else {
    next() // User is not authenticated, allow access to login
  }
}
