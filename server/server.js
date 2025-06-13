const express = require('express');
const prod_routes = require('./src/prod/prod_routes');
const user_routes = require('./src/users/user_routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pagina Principale - Benvenuto su PistoVUE!');
});

app.use('/', prod_routes);
app.use('/', user_routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Routes disponibili:');
    console.log('- GET / (homepage)');
    console.log('- GET /prodotti (lista prodotti)');
    console.log('- POST /prodotti (crea nuovo prodotto)');
    console.log('- GET /utenti (lista utenti)');
    console.log('- POST /utenti (crea nuovo utente)');
});
