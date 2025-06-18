const pool = require('../../db');
const queries = require('./user_queries');

const getAllUsers = async (req, res) => {
    try {
        const result = await pool.query(queries.getAllUsersQuery);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Errore nel recuperare gli utenti:', error);
        res.status(500).json({ error: 'Errore nel recuperare gli utenti' });
    }
};

const insertUser = async (req, res) => {
    try {
        const { username } = req.body;
        
        if (!username) {
            return res.status(400).json({ error: 'Username è obbligatorio' });
        }
        
        // Verifica se l'username esiste già
        const existingUser = await pool.query('SELECT username FROM utenti WHERE username = $1', [username]);
        
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ 
                error: 'Username già esistente',
                errorType: 'username_exists'
            });
        }
        
        const result = await pool.query(queries.insertUserQuery, [username]);
        res.status(201).json({
            message: 'Utente creato con successo',
            user: result.rows[0]
        });
    } catch (error) {
        console.error('Errore nell\'inserire l\'utente:', error);
        res.status(500).json({ error: 'Errore nell\'inserire l\'utente' });
    }
};

const registerUser = async (req, res) => {
    try {
        const { nome, cognome, username, email, password, citta } = req.body;
        
        // Validazione campi obbligatori
        if (!nome || !cognome || !username || !email || !password || !citta) {
            return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
        }
        
        // Validazione lunghezza password
        if (password.length < 5) {
            return res.status(400).json({ error: 'La password deve avere almeno 5 caratteri' });
        }
        
        // Verifica se username o email esistono già
        const existingUser = await pool.query(queries.checkUserExistsQuery, [username, email]);
        
        if (existingUser.rows.length > 0) {
            // Controllo più specifico per determinare cosa esiste già
            const existingUsername = await pool.query('SELECT username FROM utenti WHERE username = $1', [username]);
            const existingEmail = await pool.query('SELECT username FROM utenti WHERE email = $1', [email]);
            
            if (existingUsername.rows.length > 0 && existingEmail.rows.length > 0) {
                return res.status(400).json({ 
                    error: 'Username e email già esistenti',
                    errorType: 'both_exist'
                });
            } else if (existingUsername.rows.length > 0) {
                return res.status(400).json({ 
                    error: 'Username già esistente',
                    errorType: 'username_exists'
                });
            } else if (existingEmail.rows.length > 0) {
                return res.status(400).json({ 
                    error: 'Email già esistente',
                    errorType: 'email_exists'
                });
            }
        }
        
        // Registra il nuovo utente
        const result = await pool.query(queries.registerUserQuery, [nome, cognome, username, email, password, citta]);
        
        res.status(201).json({
            success: true,
            message: 'Registrazione completata con successo',
            user: result.rows[0]
        });
        
    } catch (error) {
        console.error('Errore nella registrazione:', error);
        res.status(500).json({ error: 'Errore durante la registrazione' });
    }
};

module.exports = {
    getAllUsers,
    insertUser,
    registerUser,
};
