const pool = require('../../db');


const getAllProds = (req, res) => {
    pool.query('SELECT * FROM prodotti ORDER BY id ASC', (error, results) => {
        if (error) {
            console.error('Errore query prodotti:', error);
            return res.status(500).json({ error: 'Errore database' });
        }
        res.status(200).json(results.rows);
    });
}

module.exports = {
    getAllProds,
}