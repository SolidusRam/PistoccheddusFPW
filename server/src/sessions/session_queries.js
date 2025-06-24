const login = "SELECT * FROM utenti WHERE username = $1 AND password = $2";
const checkUsername = "SELECT username FROM utenti WHERE username = $1";
//RETURNING username serve per restituire il nome utente dopo l'aggiornamento della password
const updatePassword = "UPDATE utenti SET password = $2 WHERE username = $1 AND password = $3 RETURNING username";

module.exports = { 
    login, 
    checkUsername,
    updatePassword 
};