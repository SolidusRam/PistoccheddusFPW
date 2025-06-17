import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSessionStore = defineStore('session', () => {
    const user = ref(null);
    const isAuthenticated = ref(false);
    const showAuthRedirect = ref(false); // Nuovo stato per l'evidenziazione
    
    function setUser(userData) {
        user.value = userData;
        isAuthenticated.value = !!userData;
        
        // Salva nello storage locale per persistenza
        if (userData) {
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('isAuthenticated', 'true');
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
        }
    }

    function getUser() {
        return user.value;
    }

    function clearSession() {
        user.value = null;
        isAuthenticated.value = false;
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
    }

    function loadFromStorage() {
        const storedUser = localStorage.getItem('user');
        const storedAuth = localStorage.getItem('isAuthenticated');
        
        if (storedUser && storedAuth === 'true') {
            try {
                user.value = JSON.parse(storedUser);
                isAuthenticated.value = true;
            } catch (error) {
                console.error('Errore nel caricare i dati utente dallo storage:', error);
                clearSession();
            }
        }
    }

    function isLogged() {
        return isAuthenticated.value;
    }

    // Nuova funzione per gestire l'evidenziazione
    function triggerAuthRedirect() {
        showAuthRedirect.value = true;
        // Auto-reset dopo 2 secondi
        setTimeout(() => {
            showAuthRedirect.value = false;
        }, 2000);
    }

    return { 
        user, 
        isAuthenticated,
        showAuthRedirect,
        setUser, 
        getUser, 
        clearSession,
        loadFromStorage,
        isLogged,
        triggerAuthRedirect
    }
})
