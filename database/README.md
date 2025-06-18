# Database PostgreSQL - Pistoccheddus

## 📋 Setup Database

### Requisiti
- PostgreSQL 12+ installato
- pgAdmin4 per interfaccia grafica

### 🚀 Installazione Rapida

1. **Crea il database:**
   ```sql
   CREATE DATABASE pistoccheddus;
   ```

2. **Importa il backup:**
   ```bash
   # Da riga di comando
   psql -U postgres -d pistoccheddus -f backup.sql
   
   # Oppure da pgAdmin: 
   # Tasto destro su database > Restore > Seleziona backup.sql > Restore 
   NB. selezionare come tipo di file "SQL"
   ```

3. **Verifica installazione:**
   ```sql
   -- Controlla tabelle create
   \dt
   
   -- Verifica dati inseriti
   SELECT COUNT(*) FROM utenti;    -- Dovrebbe restituire 4
   SELECT COUNT(*) FROM prodotti;  -- Dovrebbe restituire 5
   ```

## 📊 Struttura Database Implementata

### Tabella `utenti`
- `username` (varchar(20), PRIMARY KEY) - **Cognome studente**
- `password` (varchar(20)) - **Ultime 5 cifre matricola**
- `nome` (varchar(50))
- `cognome` (varchar(50))
- `email` (varchar(50), UNIQUE)
- `citta` (varchar(20))
- `data_registrazione` (timestamp)

### Tabella `prodotti`
- `id` (integer, SERIAL PRIMARY KEY)
- `titolo` (varchar(20)) - **Nome del dolce**
- `descrizione` (varchar(250)) - **Descrizione dettagliata**
- `prezzo` (integer) - **Prezzo in centesimi**
- `immagine` (varchar(200)) - **Path immagine (placeholder.jpg)**
- `data_scadenza` (timestamp) - **Data di scadenza**
- `origine_ricetta` (varchar(100)) - **Zona di origine**

## 🔑 Credenziali Team (per testing)

| Username | Password | Nome | Cognome | Email |
|----------|----------|------|---------|-------|
| `melis` | `66431` | Leonardo | Melis | leonardomelis@mail |
| `parasuco` | `66469` | Matteo | Parasuco | matteoparasuco@mail |
| `pisanu` | `66181` | Sharon | Pisanu | sharonpisau@mail |
| `derosas` | `66474` | Igor | Derosas | igorderosas@mail |

## 🍰 Prodotti Inseriti

1. **Pistoccheddus** - Biscotti tradizionali del Campidano
2. **Torrone** - Dolce di Tonara con miele e mandorle  
3. **Papassini** - Biscotti autunnali di Fonni con uvetta
4. **Seadas** - Dolci fritti dell'Ogliastra con formaggio e miele
5. **Pardula** - Tortine della Marmilla con ricotta

## ⚠️ Note Implementazione

- **Prezzo**: Memorizzato in centesimi (100 = 1€)
- **Immagini**: Tutte impostate a `placeholder.jpg`
- **Date**: Impostate al 2030 per test
- **Email**: Format `nome+cognome@mail` (non valide, solo per test)

## 🔧 Query di Test Rapide

```sql
-- Login test
SELECT * FROM utenti WHERE username = 'melis' AND password = '66431';

-- Visualizza tutti i prodotti
SELECT titolo, prezzo/100.0 as prezzo_euro, origine_ricetta FROM prodotti;

-- Inserisci nuovo utente
INSERT INTO utenti (username, password, nome, cognome, email, citta) 
VALUES ('test', '12345', 'Test', 'User', 'test@mail', 'Cagliari');
```

## 📁 File nella Cartella

- `backup.sql` - Dump completo del database con dati
- `README.md` - Questa guida
- `queries.sql` - Query di esempio per test API
- `schema.png` - Screenshot struttura database (da aggiungere)
