const getAllProds = async () => {
    const response = await fetch('/api/prodotti');
    return await response.json();
}

const getAllUsers = async () => {
    const response = await fetch('/api/utenti');
    return await response.json();
}

const addProduct = async (titolo, descrizione, prezzo, immagine, data_scadenza, origine_ricetta, utente_id) => {
    const response = await fetch('/api/prodotti', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titolo, descrizione, prezzo, immagine, data_scadenza, origine_ricetta, utente_id }),
    });
    return await response.json();
}

export {getAllProds, getAllUsers, addProduct}