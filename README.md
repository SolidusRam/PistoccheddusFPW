# PistoccheddusFPW

Applicazione web per la vendita di dolci tradizionali sardi. Il progetto include frontend Vue.js, backend Node.js/Express e database PostgreSQL.

## Funzionalità

- **Frontend Vue.js:** 5 pagine responsive (Home, Prodotti, Inserimento, Team, Login/Registrazione)
- **Backend Node.js:** API per gestione prodotti, utenti e sessioni
- **Database PostgreSQL:** Memorizzazione dolci sardi e dati utenti
- **Autenticazione:** Sistema login/logout con sessioni persistenti
- **Validazione:** Controlli frontend e backend per tutti i form

## Installazione e Avvio
### Setup Database
1. Creare database PostgreSQL chiamato `pistoccheddus`
2. Importare il backup: `psql -d pistoccheddus < database/backup.sql`

**Credenziali Database di Default:**
- **Host:** localhost
- **Porta:** 5432
- **Database:** pistoccheddus
- **Username:** postgres
- **Password:** admin(di default)

### Avvio Backend
```bash
cd server
npm install
npm run dev
```
Il server sarà disponibile su `http://localhost:3000`

### Avvio Frontend
```bash
cd PistoVUE
npm install
npm run dev
```
L'applicazione sarà disponibile su `http://localhost:5173`

## API Endpoints

- `GET /prodotti` - Lista prodotti
- `POST /prodotti` - Aggiungi prodotto
- `GET /utenti` - Lista utenti
- `POST /register` - Registrazione
- `POST /login` - Login
- `POST /logout` - Logout
- `GET /session` - Stato sessione
- `POST /change-password` - Cambio password

## Credenziali di Accesso

### Utenti Test (dal database)
- **Username:** melis | **Password:** 66431
- **Username:** parasuco | **Password:** 66469  
- **Username:** pisanu | **Password:** 66181
- **Username:** derosas | **Password:** 66474

### Accesso Rapido
Usa qualsiasi delle credenziali sopra per testare login, profilo utente e funzionalità protette.


