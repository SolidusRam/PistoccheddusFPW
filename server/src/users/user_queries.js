// Query per recuperare tutti gli utenti
const getAllUsersQuery = 'SELECT * FROM utenti ORDER BY id ASC';

// Query per inserire un nuovo utente
const insertUserQuery = 'INSERT INTO utenti (data_registrazione) VALUES (NOW()) RETURNING *';

module.exports = {
    getAllUsersQuery,
    insertUserQuery
};
