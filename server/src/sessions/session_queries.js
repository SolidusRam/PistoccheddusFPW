const login = "SELECT * FROM utenti WHERE username = $1 AND password = $2";
const checkUsername = "SELECT id FROM utenti WHERE username = $1";
const updatePassword = "UPDATE utenti SET password = $2 WHERE username = $1 AND password = $3 RETURNING id";

module.exports = { 
    login, 
    checkUsername,
    updatePassword 
};