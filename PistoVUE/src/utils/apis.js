const getAllProds = async () => {
    const response = await fetch('/api/prodotti');
    return await response.json();
}

const getAllUsers = async () => {
    const response = await fetch('/api/utenti');
    return await response.json();
}

export {getAllProds, getAllUsers}