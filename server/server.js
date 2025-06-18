const express = require('express');
const session = require('express-session');
const prod_routes = require('./src/prod/prod_routes');
const user_routes = require('./src/users/user_routes');
const session_routes = require('./src/sessions/session_routes');


const app = express();
const port = 3000;

app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 300000, secure: false }
}));

app.get('/', (req, res) => {
  res.send('Pagina Principale - Benvenuto su PistoVUE!');
});

app.use('/', prod_routes);
app.use('/', user_routes);
app.use('/', session_routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    console.log('Routes disponibili:');
    console.log('- GET / (homepage)');
    console.log('- GET /prodotti (lista prodotti)');
    console.log('- POST /prodotti (crea nuovo prodotto)');
    console.log('- GET /utenti (lista utenti)');
    console.log('- POST /utenti (crea nuovo utente)');
    console.log('- POST /register (registrazione utente)');
    console.log('- POST /login (login utente)');
    console.log('- POST /logout (logout utente)');
    console.log('- GET /session (sessione corrente)');
    console.log('- POST /change-password (cambio password)');
});
