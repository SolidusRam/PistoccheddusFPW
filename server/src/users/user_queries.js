// Query per recuperare tutti gli utenti
const getAllUsersQuery = 'SELECT * FROM utenti ORDER BY username ASC';

// Query per inserire un nuovo utente
// NOW() viene utilizzato per impostare la data di registrazione corrente
const insertUserQuery = 'INSERT INTO utenti (username, data_registrazione) VALUES ($1, NOW()) RETURNING *';

// Query per registrare un nuovo utente completo
const registerUserQuery = `
    INSERT INTO utenti (nome, cognome, username, email, password, citta, data_registrazione) 
    VALUES ($1, $2, $3, $4, $5, $6, NOW()) 
    RETURNING nome, cognome, username, email, citta, data_registrazione
`;

// Query per verificare se username o email esistono già
const checkUserExistsQuery = 'SELECT username FROM utenti WHERE username = $1 OR email = $2';

module.exports = {
    getAllUsersQuery,
    insertUserQuery,
    registerUserQuery,
    checkUserExistsQuery
};
