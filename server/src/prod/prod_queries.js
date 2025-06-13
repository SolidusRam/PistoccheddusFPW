// Query per recuperare tutti i prodotti
const getAllProductsQuery = 'SELECT * FROM prodotti ORDER BY id ASC';

// Query per inserire un nuovo prodotto
const insertProductQuery = 'INSERT INTO prodotti (origine_ricetta) VALUES ($1) RETURNING *';

module.exports = {
    getAllProductsQuery,
    insertProductQuery
};