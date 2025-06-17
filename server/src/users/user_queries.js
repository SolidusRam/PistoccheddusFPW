// Query per recuperare tutti gli utenti
const getAllUsersQuery = 'SELECT * FROM utenti ORDER BY id ASC';

// Query per inserire un nuovo utente
const insertUserQuery = 'INSERT INTO utenti (data_registrazione) VALUES (NOW()) RETURNING *';

// Query per registrare un nuovo utente completo
const registerUserQuery = `
    INSERT INTO utenti (nome, cognome, username, email, password, citta, data_registrazione) 
    VALUES ($1, $2, $3, $4, $5, $6, NOW()) 
    RETURNING id, nome, cognome, username, email, citta, data_registrazione
`;

// Query per verificare se username o email esistono già
const checkUserExistsQuery = 'SELECT id FROM utenti WHERE username = $1 OR email = $2';

module.exports = {
    getAllUsersQuery,
    insertUserQuery,
    registerUserQuery,
    checkUserExistsQuery
};
