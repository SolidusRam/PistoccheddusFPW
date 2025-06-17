// Query per recuperare tutti i prodotti
const getAllProductsQuery = 'SELECT * FROM prodotti ORDER BY id ASC';

// Query per inserire un nuovo prodotto
const insertProductQuery = `
    INSERT INTO prodotti (titolo, descrizione, prezzo, immagine, data_scadenza, origine_ricetta) 
    VALUES ($1, $2, $3, $4, $5::DATE, $6) 
    RETURNING *
`;

module.exports = {
    getAllProductsQuery,
    insertProductQuery
};