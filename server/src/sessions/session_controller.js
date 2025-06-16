const pool = require('../../db');
const queries = require('./session_queries');

const login = (req, res) => {
    const { username, password } = req.body;

    // Prima verifica se l'username esiste
    pool.query(queries.checkUsername, [username], (error, results) => {
        if (error) throw error;
        
        if (results.rows.length === 0) {
            // Username non trovato
            return res.status(401).json({ 
                error: 'Username non registrato',
                errorType: 'username_not_found'
            });
        }

        // Username esiste, ora verifica la password
        pool.query(queries.login, [username, password], (error, results) => {
            if (error) throw error;
            
            if (results.rows.length > 0) {
                const user = results.rows[0];
                // Salva i dati dell'utente nella sessione (senza password)
                req.session.user = {
                    id: user.id,
                    username: user.username,
                    nome: user.nome,
                    cognome: user.cognome,
                    email: user.email,
                    citta: user.citta,
                    data_registrazione: user.data_registrazione
                };
                
                res.status(200).json({
                    success: true,
                    user: req.session.user
                });
            } else {
                // Password errata
                res.status(401).json({ 
                    error: 'Password errata',
                    errorType: 'wrong_password'
                });
            }
        });
    });
}

const logout = (req, res) => {
    if(req.session.user) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: 'Errore durante il logout' });
            }
            res.status(200).json({ message: 'Logout effettuato con successo' });
        });
    }
    else {
        res.status(400).json({ error: 'Nessun utente loggato' });
    }
}

const getCurrentSession = (req, res) => {
    if (req.session.user) {
        res.status(200).json({
            isAuthenticated: true,
            user: req.session.user
        });
    } else {
        res.status(200).json({
            isAuthenticated: false,
            user: null
        });
    }
}

const changePassword = (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ error: 'Utente non autenticato' });
    }

    const { oldPassword, newPassword } = req.body;
    const username = req.session.user.username;

    if (!oldPassword || !newPassword) {
        return res.status(400).json({ error: 'Vecchia password e nuova password sono obbligatorie' });
    }

    if (oldPassword === newPassword) {
        return res.status(400).json({ error: 'La nuova password deve essere diversa da quella attuale' });
    }

    pool.query(queries.updatePassword, [username, newPassword, oldPassword], (error, results) => {
        if (error) {
            console.error('Errore nell\'aggiornare la password:', error);
            return res.status(500).json({ error: 'Errore interno del server' });
        }
        
        if (results.rows.length > 0) {
            res.status(200).json({ message: 'Password aggiornata con successo' });
        } else {
            res.status(401).json({ error: 'Password attuale non corretta' });
        }
    });
}

module.exports = {
    login,
    logout,
    getCurrentSession,
    changePassword
};