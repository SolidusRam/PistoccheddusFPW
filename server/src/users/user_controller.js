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
        const result = await pool.query(queries.insertUserQuery);
        res.status(201).json({
            message: 'Utente creato con successo',
            user: result.rows[0]
        });
    } catch (error) {
        console.error('Errore nell\'inserire l\'utente:', error);
        res.status(500).json({ error: 'Errore nell\'inserire l\'utente' });
    }
};

module.exports = {
    getAllUsers,
    insertUser,
};
