const express = require('express');
const prod_routes = require('./src/prod/prod_routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pagina Principale - Benvenuto su PistoVUE!');
});

app.use('/', prod_routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Routes disponibili:');
    console.log('- GET / (homepage)');
    console.log('- GET /prodotti (prodotti)');
});
