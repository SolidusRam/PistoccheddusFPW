import { useSessionStore } from '@/stores/session'

export const requireAuth = (to, from, next) => {
  const sessionStore = useSessionStore()
  
  // Load from storage if not already loaded
  if (!sessionStore.user) {
    sessionStore.loadFromStorage()
  }
  
  if (sessionStore.isLogged()) {
    next() // User is authenticated, allow access
  } else {
    next('/login') // Redirect to login page
  }
}

export const redirectIfAuthenticated = (to, from, next) => {
  const sessionStore = useSessionStore()
  
  // Load from storage if not already loaded
  if (!sessionStore.isAuthenticated) {
    sessionStore.loadFromStorage()
  }
  
  if (sessionStore.isAuthenticated) {
    next('/') // User is already authenticated, redirect to home
  } else {
    next() // User is not authenticated, allow access to login
  }
}
