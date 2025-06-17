const login = async (username, password) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Errore durante il login');
    }
    
    return data;
}

const logout = async () => {
    const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Errore durante il logout');
    }
    
    return data;
}

const getCurrentSession = async () => {
    const response = await fetch('/api/session', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Errore nel recuperare la sessione');
    }
    
    return data;
}

const changePassword = async (oldPassword, newPassword) => {
    const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ oldPassword, newPassword })
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Errore durante il cambio password');
    }
    
    return data;
}

const register = async (nome, cognome, username, email, password, citta) => {
    const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, cognome, username, email, password, citta })
    });

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || 'Errore durante la registrazione');
    }
    
    return data;
}

export { 
    login,
    logout,
    getCurrentSession,
    changePassword,
    register
};