const pool = require('../../db');
const queries = require('./prod_queries');


const getAllProds = async (req, res) => {
    try {
        const result = await pool.query(queries.getAllProductsQuery);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Errore nel recuperare i prodotti:', error);
        res.status(500).json({ error: 'Errore nel recuperare i prodotti' });
    }
};

const insertProduct = async (req, res) => {
    try {
        const { origine_ricetta } = req.body;
        
        if (!origine_ricetta) {
            return res.status(400).json({ error: 'Origine ricetta è obbligatoria' });
        }
        
        const result = await pool.query(queries.insertProductQuery, [origine_ricetta]);
        res.status(201).json({
            message: 'Prodotto creato con successo',
            product: result.rows[0]
        });
    } catch (error) {
        console.error('Errore nell\'inserire il prodotto:', error);
        res.status(500).json({ error: 'Errore nell\'inserire il prodotto' });
    }
};

module.exports = {
    getAllProds,
    insertProduct,
};