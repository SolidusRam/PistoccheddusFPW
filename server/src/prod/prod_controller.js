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
        const { titolo, descrizione, prezzo, immagine, data_scadenza, origine_ricetta } = req.body;
        
        // Validazione campi obbligatori
        if (!titolo || !descrizione || !prezzo || !data_scadenza || !origine_ricetta) {
            return res.status(400).json({ 
                error: 'Tutti i campi sono obbligatori: titolo, descrizione, prezzo, data_scadenza, origine_ricetta' 
            });
        }
        
        // Conversione prezzo in centesimi se necessario
        const prezzoInCentesimi = Math.round(parseFloat(prezzo) * 100);
        
        // Conversione data in formato DATE (senza ora)
        const dataScadenzaFormatted = new Date(data_scadenza).toISOString().split('T')[0];
        
        const result = await pool.query(queries.insertProductQuery, [
            titolo,
            descrizione,
            prezzoInCentesimi,
            immagine || 'placeholder.jpg',
            dataScadenzaFormatted,
            origine_ricetta
        ]);
        
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