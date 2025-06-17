# Modulo 1: HTML + CSS (aggiornato al 23/04/25)

Realizzare un’applicazione web formata da 5 pagine web. Nello spNB: Dovete consegnare anche un dump del databNB: Dovete consegnare anche un dump del database popolato (funzione backup). Per agevolare la correzione dei progetti vi chiediamo di verificare che l'importazione del vostro dump vada a buon fine utilizzando l'interfaccia utente di pgAdmin. 
Ultime modifiche: giovedì, 29 maggio 2025, 15:

---

# FAQ: Tecnologie Utilizzabili

| Categoria | ✅ **CONSENTITO** | ❌ **NON CONSENTITO** |
|-----------|-------------------|----------------------|
| **HTML** | Tutti i tag di HTML5 visti a lezione | Ulteriori tag di versioni precedenti a HTML5 e che sono del tutto superflui per il progetto |
| **CSS** | - Tutto quello visto a lezione<br>- Eventuali `calc()` SOLO per la disposizione di elementi dentro il layout visto a lezione e NON in sostituzione del layout a 12 colonne<br>- Altre proprietà basilari perlopiù stilistiche che non abbiamo potuto vedere a lezione per motivi di tempo | - Librerie esterne<br>- Framework (es: Bootstrap)<br>- `display:flex`<br>- `display:grid`<br>- Qualunque cosa sostituisca il layout a 12 colonne<br>- Qualunque cosa sostituisca le media query come viste a lezione |
| **Vue/JS** | - Tutto quello visto a lezione<br>- Vue.js e librerie come Router e Pinia<br>- Tutti i componenti che volete fatti da voi e che non abbiano robe non viste | - Librerie non viste a lezione<br>- Componenti di librerie esterne<br>- Plugin non richiesti |
| **Server** | - Node ed Express | - QUALUNQUE TECNOLOGIA DIVERSA DA NODE ED EXPRESS<br>- STRUTTURA DEL SERVER DIVERSA DA QUELLA VISTA A LEZIONE |
| **Database** | Database relazionale SQL il cui backup sia perfettamente compatibile con PostgreSQL e pgAdmin | Database non relazionali o comunque non compatibili con le tecnologie viste a lezione |
| **Controlli** | Tutto ciò che può essere fatto con JavaScript vanilla senza l'installazione di ulteriori librerie | Librerie esterne che facciano i controlli con funzioni apposite e che implichino che non le stiate implementando voi |

---

## 📋 Roadmap di Sviluppo popolato (funzione backup). Per agevolare la correzione dei progetti vi chiediamo di verificare che l'importazione del vostro dump vada a buon fine utilizzando l'interfaccia utente di pgAdmin. 
Ultime modifiche: giovedì, 29 maggio 2025, 15:

---

# Modulo 3: SESSIONI + STATO (aggiornato al 05/06/25)

I dati inseriti all'interno del form nella pagina di login devono essere inviati al server e utilizzati per impostare una sessione. 

Se l'autenticazione va a buon fine (ovvero username e password uguali a quelli salvati nella tabella "utenti" presente nel database) l'utente viene rimandato nella homepage. 

Se l'autenticazione non va a buon fine l'utente rimane nella pagina di login e viene mostrato un messaggio di errore che indica se l'utente non è registrato (username non presente nel database) o se la password è errata (username presente nel database). 

Se l'utente ha effettuato l'accesso (e quindi la sessione è stata correttamente impostata), nella pagina di login non dovrà più essere visibile il form di accesso e/o quello di registrazione ma una sezione che mostra un messaggio di benvenuto, i dati dell'utente presenti nel database e un pulsante per eseguire il logout e invalidare la sessione.  

La password non dovrà essere mostrata ma dovrà esserci un pulsante/paragrafo cliccabile "Cambio password" che mostri una sezione (normalmente nascosta) che contiene un form dove inserire la vecchia password, la nuova password due volte e un pulsante per inviare la richiesta al server.  

I dati salvati nello store lato client devono essere persistenti per tutta la durata della sessione e non devono quindi essere persi effettuando il refresh della pagina. 

NB: i prodotti sono visibili solo se l'autenticazione va a buon fine. In caso di autenticazione non effettuata la pagina dei prodotti non deve essere accessibile e l'utente deve essere rimandato automaticamente alla pagina di login. 

NB2: anche la pagina di inserimento di un nuovo prodotto deve essere visibile solo se l'autenticazione va a buon fine. 

Ultime modifiche: giovedì, 5 giugno 2025, 14:29

---

# Modulo 4: CONTROLLI (aggiornato al 05/06/25)

Utilizzando il linguaggio Javascript, realizzare la validazione dei dati inseriti dall'utente lato client. 

Tutti i form presenti nell'applicazione web (registrazione, login, cambio password e inserimento nuovi prodotti) devono contenere appositi controlli per verificare che gli input dell'utente rispettino delle regole.  

Nel form di registrazione, inserire tutti i controlli relativi a tutti i campi presenti nella tabella 'utenti' del database (username, password, nome, cognome, e-mail, città, più due a scelta). Gestire il caso in cui durante la registrazione di un nuovo utente lo username (che sarà la chiave primaria nella tabella del db) esista già, in questo caso deve essere mostrato all'utente un messaggio di errore. 

Il form del cambio password invece, dovrà verificare che la nuova password scelta (ricordatevi che deve essere inserita due volte) combaci perfettamente. Inoltre, non deve essere possibile inserire una nuova password uguale alla vecchia; quindi, mostrare un messaggio nel form in caso si verifichi questa situazione. 

I dati di tutti i form vengono controllati prima di essere inviati al server e l'invio avviene solo se la validazione lato client è andata a buon fine. Prevedere quindi, per ogni campo di input testuale un numero massimo di caratteri, e per ogni input numerico un valore minimo e un valore massimo. I dati vengono inviati al server solo se rispettano i limiti impostati. 

Qualora l'utente inserisca un valore non corretto deve essere mostrato un messaggio di errore e i dati NON devono poter essere inviati al server, per esempio disabilitando il pulsante di invio. 

Per tutti i campi di testo deve essere visibile all'utente quanti sono i caratteri a disposizione rimanenti rispetto alla dimensione massima consentita per il campo corrente. 

Per tutti i campi numerici deve essere visibile all'utente quali sono i valori soglia evidenziandoli in rosso.

Ultime modifiche: lunedì, 17 giugno 2025, 16:00

1. Una homepage in cui viene presentata l’attività.
2. Una pagina che contiene l’elenco dei prodotti. Per ogni prodotto devono essere indicati almeno i seguenti campi: titolo, descrizione, prezzo, immagine. Inoltre, in base al tema del progetto dovranno esserci inseriti almeno altri due campi come ad esempio: data di scadenza, quantità, altre informazioni, etc.
3. Una pagina che consente l’inserimento (per ora finto) di un nuovo prodotto e contiene un form con campi testuali e numerici e un bottone di invio. I campi devono essere quindi gli stessi della pagina precedente.
4. Una pagina che presenta i membri dell’attività. Per ogni membro devono essere indicati almeno i seguenti campi: foto, nome e breve descrizione. In questa pagina i membri sono i membri del vostro gruppo (non siete costretti a mettere le vostre foto, va bene qualsiasi immagine presa dalla rete).
5. Una pagina che consente di effettuare il login e la registrazione nel sistema (funzionalità per ora finta).

Le pagine devono essere suddivise secondo le sezioni semantiche dell’HTML5. Si tenga inoltre presente che in Vue l’interfaccia utente viene suddivisa in componenti riutilizzabili e modulari.

Tutte le pagine devono contenere:

- Un header contenente un logo (immagine) e un titolo (nome dell’attività)
- Un footer con il nome del gruppo, i suoi componenti e un indirizzo e‑mail
- Un menu di navigazione, che consente di spostarsi tra le varie pagine dell’applicazione (in ogni pagina deve essere evidenziata la pagina corrente)
- Delle sezioni che corrispondono alle 3 porzioni della pagina: contenuto secondario (che può essere uguale per tutte le pagine), contenuto principale, pubblicità (si vedano le specifiche relative al layout di seguito).

Tutte le pagine devono avere una struttura HTML corretta e rispettare le regole di SEO.

Tutte le informazioni e gli elementi riportati nelle varie pagine devono essere personalizzati in base al tema scelto dal vostro gruppo.

Creare lo stile aggiungendo le regole CSS per i vari elementi delle pagine.

Tutte le pagine devono avere un layout a 3 colonne e devono essere responsive, gestite tramite media‑query, con 1 breakpoint che consenta di adattare il layout delle pagine passando da una visualizzazione “desktop” a una visualizzazione “smartphone”.

Nella visualizzazione “desktop” il logo deve essere sempre affiancato al titolo, l’immagine dei prodotti deve essere affiancata ai dati (nome, descrizione, ecc.) e la foto dei membri dell’attività deve essere affiancata ai loro altri dati. Nella visualizzazione “smartphone” le immagini vanno sempre sopra i campi di testo (logo sopra titolo, immagine sopra informazioni del prodotto, e foto sopra informazioni dei membri dell’attività).

Nella visualizzazione “desktop” il menu di navigazione deve diventare una barra orizzontale con le voci tutte affiancate, presente in tutte le pagine, subito sotto l’header (scorrendo la pagina verso il basso, il menu deve essere sempre visibile). Nella visualizzazione “smartphone” il menu di navigazione diventa un menu verticale, con le voci una sopra l’altra, sempre subito sotto l’header (scorrendo la pagina verso il basso, il menu scompare in base alla posizione nella pagina). In entrambi i casi deve essere sempre evidenziata la voce relativa alla pagina corrente.

Nella visualizzazione “desktop” devono essere presenti tre colonne affiancate:

- Una colonna a sinistra che occupa il 25% della pagina e contiene informazioni secondarie della realtà descritta (decidete voi cosa)
- Una centrale con il contenuto principale della pagina che occupa il 50% della larghezza totale
- Una a destra che occupa il 25% della pagina con delle pubblicità (finite) a vostra scelta.

Nella visualizzazione “smartphone” le tre colonne vengono messe una sopra l’altra, nel seguente ordine: colonna di sinistra, colonna centrale e colonna di destra.

In entrambe le modalità il footer deve essere sempre ancorato alla parte inferiore della pagina.

## Esempio di layout

**Visualizzazione Desktop**

```
+-------------------------------------------------------+
| logo                      TITOLO                      |
+-------------------------------------------------------+
| menu di navigazione                                   |
+----------------+----------------------+---------------+
| info           | contenuto principale | pubblicità    |
|  secondarie    | pagina               |               |
+----------------+----------------------+---------------+
| footer                                                |
+-------------------------------------------------------+
```

**Visualizzazione Mobile**

```
+------------------------------+
| logo                         |
+------------------------------+
| TITOLO                       |
+------------------------------+
| ...                          |
+------------------------------+
| voci menu di navigazione     |
+------------------------------+
| info secondarie              |
+------------------------------+
| contenuto principale pagina  |
+------------------------------+
| pubblicità                   |
+------------------------------+
| footer                       |
+------------------------------+
```

L'applicazione web deve essere completamente responsive, quindi non solo il layout ma tutti gli elementi presenti nelle varie sezioni delle pagine devono adattarsi alla visualizzazione (non devono esserci elementi sovrapposti o disallineati).

È, ovviamente, possibile definire le regole CSS necessarie per creare la visualizzazione di tutti gli elementi presenti nelle pagine web (font, colori, posizioni, ecc).

Realizzare il layout utilizzando le tecniche viste in laboratorio e rispettando tutte le regole di buona programmazione viste a lezione. Nelle pagine dell'applicazione deve essere chiara la distinzione tra struttura e layout delle pagine.

**NON** è possibile utilizzare Bootstrap, layout e temi del W3C o altri framework simili. Tutte le regole CSS che scrivete devono essere create da voi.

**NB:** Avere nel progetto regole CSS non utilizzate o utilizzate in maniera non corretta verrà valutato negativamente.

---

# Modulo 2: Database (aggiornato al 29/05/25)


Realizzare un database denominato col nome del vostro gruppo (tutto minuscolo, senza spazi o simboli). 

Il database deve contenere almeno 2 tabelle: 

    Tabella "utenti", che contiene le informazioni degli utenti registrati (username, password, nome, cognome, e-mail, città, ecc); Alla consegna dovrà contenere i dati dei componenti del gruppo già inseriti per agevolare la correzione del progetto. L’username dovrà contenere il cognome dello studente mentre la password le ultime 5 cifre della sua matricola. Gli altri dati possono essere inventati. 

    Tabella “prodotti” o “attività”, che contiene tutte le informazioni relative agli elementi presentati nella relativa pagina dell’applicazione web. Alla consegna dovrà contenere almeno 5 prodotti/attività già inseriti per agevolare la correzione del progetto. 

Implementare la comunicazione tra server e database per gestire l’autenticazione degli utenti come visto a lezione. 

Le informazioni relative agli elementi mostrati nella pagina dei prodotti devono essere recuperate dal database.  

Gestire inoltre l’inserimento di un nuovo utente e di un nuovo prodotto (e quindi la loro memorizzazione nel database). 

Creare le tabelle rispettando le regole di buona progettazione viste a lezione. 

NB: non salvate le immagini dei prodotti in binario (BLOB o simili) nelle tabelle, ma salvate, nel campo foto, il path relativo alle immagini dei prodotti presenti in una cartella sul server. Non è necessario gestire il caricamento dell’immagine per il nuovo prodotto inserito. Nell’applicazione web sarà presente una fotografia standard (es: placeholder.jpg) che verrà associata a tutti i nuovi prodotti inseriti (per i quali non è quindi presente una foto).  

NB: Dovete consegnare anche un dump del database popolato (funzione backup). Per agevolare la correzione dei progetti vi chiediamo di verificare che l’importazione del vostro dump vada a buon fine utilizzando l’interfaccia utente di pgAdmin. 
Ultime modifiche: giovedì, 29 maggio 2025, 15:

## 📋 Roadmap di Sviluppo

### 🚀 Fase 1: Setup e Struttura di Base

1. ✅ **Inizializzazione Progetto:** Creare il progetto Vue con Vite
2. ✅ **Componenti Principali:** Creare i file `.vue` per i componenti principali:
   - ✅ `Header.vue`: Per logo e titolo
   - ✅ `NavBar.vue`: Per il menu di navigazione
   - ✅ `Footer.vue`: Per i dettagli del team
   - ✅ `SidebarLeft.vue`: Per contenuti secondari
   - ✅ `SidebarRight.vue`: Per pubblicità
3. ✅ **Layout App.vue:** Impostare la struttura base in `App.vue` con:
   - ✅ Importazione dei componenti principali
   - ✅ Integrazione di `<RouterView>`
   - ✅ Layout semantico HTML5
4. ✅ **CSS Base Layout:** Definire in `<style scoped>` di `App.vue`:
   - ✅ Layout a 3 colonne per desktop (Flexbox/Grid)
   - ✅ Layout a colonna singola per mobile (media query)
   - ✅ Stili base per tutti gli elementi strutturali
5. ✅ **Routing Iniziale:** Configurare Vue Router con le 5 pagine richieste:
   - ✅ `HomeView.vue`: Presentazione dell'attività
   - ✅ `ProductsView.vue`: Elenco prodotti
   - ✅ `AddProductView.vue`: Form inserimento prodotti
   - ✅ `TeamView.vue`: Membri del team
   - ✅ `AuthView.vue`: Login e registrazione

### 🔧 Fase 2: Sviluppo Componenti Core e Navigazione

1. ✅ **Header:** 
   - ✅ Implementare logo e titolo in `Header.vue`
   - ✅ CSS responsive (affiancato su desktop, sovrapposto su mobile)
2. ✅ **Footer:** 
   - ✅ Aggiungere nomi, email e copyright in `Footer.vue`
   - ✅ CSS per ancorare in basso della pagina
3. ✅ **NavBar:** 
   - ✅ Implementare `<RouterLink>` alle varie pagine
   - ✅ Stile responsive (orizzontale su desktop, verticale su mobile)
   - ✅ Funzionalità sticky su desktop, normal flow su mobile
4. ✅ **Sidebars:** 
   - ✅ Popolare le sidebar con contenuti pertinenti all'attività
5. ✅ **Navigazione Attiva:** 
   - ✅ Logica CSS per evidenziare link pagina corrente

### 🧩 Fase 3: Sviluppo Viste e Componenti Specifici

1. ⬜ **HomeView:** 
   - ⬜ Contenuto di presentazione dell'attività
2. ✅ **ProductsView & ProductCard:**
   - ✅ Componente `ProductCard.vue` con tutti i campi richiesti
   - ✅ Stile responsive (immagine a fianco su desktop, sopra su mobile)
   - ✅ Dati statici di esempio in `ProductsView.vue`
3. ✅ **TeamView & MemberCard:**
   - ✅ Componente `MemberCard.vue` con foto, nome e descrizione
   - ✅ Stile responsive (foto a fianco su desktop, sopra su mobile)
   - ✅ Dati dei membri del team in `TeamView.vue`
4. ✅ **AddProductView:** 
   - ✅ Form HTML semantico con tutti i campi necessari
   - ✅ Bottone di invio e validazione base
5. ✅ **AuthView:** 
   - ✅ Form per login e registrazione
   - ✅ Toggle tra le due modalità

### 🎨 Fase 4: Styling Finale e Responsive

1. ⬜ **Stili Globali:** 
   - ⬜ Colori, font e variabili in `src/assets/main.css`
2. ⬜ **Rifinitura Stili:** 
   - ⬜ Perfezionamento estetico di tutti i componenti
   - ⬜ Animazioni e transizioni essenziali
3. ⬜ **Test Responsive:** 
   - ✅ Verifica su diverse larghezze di schermo
   - ⬜ Correzione sovrapposizioni o disallineamenti
4. ⬜ **Validazione Semantica:** 
   - ⬜ Controllo tag HTML5 semanticamente corretti

### 🧹 Fase 5: Pulizia e Revisione Modulo 1

1. ⬜ **Rimozione CSS Inutilizzato:** 
   - ⬜ Analisi e pulizia delle regole CSS non utilizzate
2. ⬜ **Controllo Requisiti:** 
   - ⬜ Verifica di tutti i punti del Modulo 1 soddisfatti
3. ⬜ **Completamento Template:** 
   - ⬜ Ripristino contenuti mancanti in NavBar, AuthView, ProductCard, Sidebars
4. ⬜ **Pulizia Codice:** 
   - ⬜ Rimozione commenti di debug e console.log

---

## 🎯 MODULO 3: SESSIONI E STATO - COMPLETATO ✅

Il **Modulo 3** è stato **completamente implementato** con tutte le funzionalità richieste:

### 🔑 Funzionalità Implementate:
- **✅ Gestione Sessioni:** Express-session configurato con middleware
- **✅ Login Completo:** Autenticazione con controllo username/password e messaggi specifici  
- **✅ Registrazione:** Form completo con validazione backend e frontend
- **✅ Logout:** Invalidazione sessione e redirect
- **✅ Profilo Utente:** Visualizzazione dati utente senza password
- **✅ Cambio Password:** Form con validazione completa (vecchia ≠ nuova)
- **✅ Protezione Route:** ProductsView e AddProductView accessibili solo se autenticati
- **✅ Store Persistente:** Dati utente salvati in localStorage, persistenti dopo refresh
- **✅ Route Guards:** Redirect automatico a login se non autenticato

### 🏗️ Architettura Implementata:
- **Frontend:** Store Pinia + Route Guards + Utility modulari (auth.js, routeGuards.js)
- **Backend:** Modulo `sessions/` con pattern MVC (routes → controller → queries)
- **Database:** Query ottimizzate per login, registrazione e cambio password

---

## 🔐 MODULO 2: DATABASE E BACKEND - COMPLETATO ✅

### 🗂️ Fase 6: Database PostgreSQL - Creazione

1. ✅ **Setup Database:**
   - ✅ Installare PostgreSQL e pgAdmin
   - ✅ Creare database `pistoccheddus` (nome gruppo minuscolo)
   - ✅ Creare le 2 tabelle obbligatorie

2. ✅ **Tabella `utenti` (IMPLEMENTATA):**
   ```sql
   CREATE TABLE utenti (
       id SERIAL PRIMARY KEY,
       username VARCHAR(20) UNIQUE NOT NULL,
       password VARCHAR(20) NOT NULL,
       nome VARCHAR(50) NOT NULL,
       cognome VARCHAR(50) NOT NULL,
       email VARCHAR(50) UNIQUE NOT NULL,
       citta VARCHAR(20),
       data_registrazione TIMESTAMP
   );
   ```

3. ✅ **Tabella `prodotti` (IMPLEMENTATA):**
   ```sql
   CREATE TABLE prodotti (
       id SERIAL PRIMARY KEY,
       titolo VARCHAR(20) NOT NULL,
       descrizione VARCHAR(250),
       prezzo INTEGER NOT NULL,  -- Centesimi
       immagine VARCHAR(200),
       data_scadenza TIMESTAMP NOT NULL,
       origine_ricetta VARCHAR(100)
   );
   ```

4. ⬜ **File Backup:**
   - ⬜ Creare file `backup.sql` con pgAdmin (Custom format)
   - ⬜ Verificare che il dump contenga dati di esempio per team e prodotti
5. ⬜ **Screenshot Struttura Database:**



### 📊 Fase 7: Database - Popolamento Dati

1. ✅ **Dati Team (COMPLETATO):**
   - ✅ Inseriti 4 membri del gruppo nella tabella `utenti`
   - ✅ Username = cognome dello studente (melis, parasuco, pisanu, derosas)
   - ✅ Password = ultime 5 cifre matricola (66431, 66469, 66181, 66474)
   - ✅ Inventati: nome, email, città

2. ✅ **Dati Prodotti (COMPLETATO):**
   - ✅ Inseriti 5 dolci sardi nella tabella `prodotti`
   - ✅ Prodotti: Pistoccheddus, Torrone, Papassini, Seadas, Pardula
   - ✅ Campo `immagine`: tutti impostati a `placeholder.jpg`
   - ✅ Aggiunti campi extra: origine_ricetta, data_scadenza

### 🖥️ Fase 8: Server Base e Connessione

1. ✅ **Server Node.js Semplice (COMPLETATO):**
   - ✅ Creata cartella `server/` nel progetto
   - ✅ `npm init` e installati: `express`, `pg`, `nodemon`
   - ✅ File `server.js` con connessione PostgreSQL funzionante
   - ✅ File `db.js` per configurazione database PostgreSQL

2. ✅ **Struttura API Organizzata (IMPLEMENTATA):**
   - ✅ Cartelle `src/prod/` e `src/users/` seguendo pattern MVC
   - ✅ Separazione logica: routes → controller → queries
   - ✅ Test connessione database funzionante

### 🔐 Fase 9: Autenticazione Base

1. ✅ **API Login/Registrazione (IMPLEMENTATE):**
   - ✅ `POST /login` - controllo username/password con messaggi specifici
   - ✅ `POST /register` - inserimento nuovo utente con validazione
   - ✅ `POST /logout` - invalidazione sessione
   - ✅ `GET /session` - controllo stato sessione corrente
   - ✅ `POST /change-password` - cambio password con validazione

2. ✅ **Frontend Connesso (COMPLETATO):**
   - ✅ `AuthView.vue` collegata alle API reali
   - ✅ Gestione completa login/registrazione/logout
   - ✅ Messaggi errore specifici (utente non esistente vs password errata)

### 📦 Fase 10: Gestione Prodotti

1. ✅ **API Prodotti (IMPLEMENTATA):**
   - ✅ `GET /prodotti` - recupera lista completa dal database
   - ✅ `POST /prodotti` - inserisce nuovo prodotto con validazione
   - ✅ Struttura organizzata: prod_routes → prod_controller → prod_queries

2. ✅ **API Utenti (IMPLEMENTATA):**
   - ✅ `GET /utenti` - recupera lista completa utenti dal database
   - ✅ `POST /utenti` - inserisce nuovo utente con timestamp automatico
   - ✅ Struttura organizzata: user_routes → user_controller → user_queries

3. ✅ **Frontend Aggiornato (COMPLETATO):**
   - ✅ `ProductsView.vue` carica prodotti da API invece di dati statici
   - ✅ `TeamView.vue` carica dati membri del team da database
   - ✅ `AddProductView.vue` invia dati al server con validazione
   - ✅ Immagine `placeholder.jpg` per prodotti senza foto

### 🔧 Fase 11: Dump e Finalizzazione

1. ✅ **Database Dump (COMPLETATO):**
   - ✅ Creato backup.sql con pgAdmin (Custom format)
   - ✅ Database con dati team e prodotti già popolato
   - ✅ File `database/backup.sql` pronto per consegna

2. ✅ **Test Finale API (COMPLETATO):**
   - ✅ Server funzionante su http://localhost:3000
   - ✅ Connessione database PostgreSQL operativa
   - ✅ API GET/POST prodotti, utenti e sessioni testate
   - ✅ Frontend collegato alle API reali

---

## 🚀 STATO ATTUALE PROGETTO (Aggiornato al 17/06/2025)

### ✅ COMPLETATO:
- **Frontend Vue.js:** Layout completo, tutte le 5 pagine, componenti modulari
- **Database PostgreSQL:** Struttura completa, dati popolati, backup funzionante
- **Server Node.js:** API complete per prodotti, utenti e sessioni, struttura MVC organizzata
- **Integrazione Frontend-Backend:** ProductsView e TeamView collegati alle API reali
- **Gestione Sessioni:** Express-session implementato, login/logout funzionanti
- **Autenticazione Completa:** Store Pinia persistente, route guards implementati
- **Registrazione Utenti:** Form completo con validazione backend
- **Cambio Password:** Funzionalità implementata con validazione

### 🔄 IN SVILUPPO:
- **Validazione Frontend:** Contatori caratteri e controlli real-time
- **UX Migliorata:** Feedback visivo avanzato per i form

### 📋 PROSSIMI STEP:
1. **Completare validazione frontend** - Contatori caratteri e controlli in tempo reale
2. **Migliorare UX validazione** - Feedback visivo avanzato (Modulo 4)
3. **Test finale e rifinitura** - Controllo generale e pulizia codice

---

## 🔐 MODULO 3: SESSIONI E STATO

### 🛠️ Fase 12: Gestione Sessioni

1. ✅ **Backend - Sessioni (COMPLETATO):**
   - ✅ Installato `express-session` per gestione sessioni
   - ✅ Configurato middleware sessioni nel server
   - ✅ API login impostano sessione su autenticazione riuscita

2. ✅ **Autenticazione Migliorata (IMPLEMENTATA):**
   - ✅ Messaggi errore specifici (utente non esistente vs password errata)
   - ✅ Redirect automatico a homepage dopo login successo
   - ✅ Endpoint `GET /session` per controllo stato sessione

### 📄 Fase 13: Pagina Profilo Utente

1. ✅ **AuthView Aggiornata (COMPLETATA):**
   - ✅ Mostra dati utente se sessione attiva (no form login)
   - ✅ Messaggio benvenuto con dati dal database
   - ✅ Pulsante logout per invalidare sessione
   - ✅ Password nascosta nei dati visualizzati

2. ✅ **Cambio Password (IMPLEMENTATO):**
   - ✅ Sezione nascosta con form cambio password
   - ✅ Campi: vecchia password, nuova password (2x)
   - ✅ Validazione: nuova password diversa da vecchia
   - ✅ API backend `POST /change-password` per aggiornamento password

### 🔒 Fase 14: Protezione Route

1. ✅ **Frontend - Route Guards (IMPLEMENTATI):**
   - ✅ Store Pinia per stato autenticazione persistente (`session.js`)
   - ✅ Guard su ProductsView: redirect a login se non autenticato
   - ✅ Guard su AddProductView: redirect a login se non autenticato
   - ✅ Persistenza sessione dopo refresh pagina
   - ✅ Utility `routeGuards.js` con funzioni `requireAuth` e `redirectIfAuthenticated`


---

## ✅ MODULO 4: VALIDAZIONE E CONTROLLI

### 📝 Fase 15: Validazione Form Frontend

1. 🔄 **Form Registrazione (PARZIALMENTE IMPLEMENTATO):**
   - ✅ Controlli tutti campi tabella utenti (username, password, nome, cognome, email, città)
   - ⬜ Contatore caratteri per ogni campo testuale
   - ⬜ Limiti min/max caratteri con soglie evidenziate
   - ✅ Controllo username già esistente (chiamata API)

2. 🔄 **Form Login (PARZIALMENTE IMPLEMENTATO):**
   - ✅ Validazione campi obbligatori
   - ✅ Disabilitazione pulsante invio se validazione fallisce
   - ✅ Messaggi errore chiari per ogni campo

3. ✅ **Form Cambio Password (COMPLETATO):**
   - ✅ Controllo match nuova password (inserita 2 volte)
   - ✅ Controllo nuova ≠ vecchia password
   - ✅ Criteri password sicura (lunghezza minima)
   - ✅ Messaggi errore specifici

4. 🔄 **Form Nuovo Prodotto (PARZIALMENTE IMPLEMENTATO):**
   - ✅ Validazione tutti campi prodotto
   - ✅ Limiti caratteri con contatori visibili (titolo: 20, descrizione: 250, origine: 100)
   - ✅ Validazione numerica per prezzo (min/max evidenziati in rosso)
   - ✅ Controllo campi obbligatori e validazione data scadenza

### 🎯 Fase 16: UX Avanzata Validazione

1. ⬜ **Feedback Visivo:**
   - ⬜ Bordi rossi per campi invalidi
   - ⬜ Icone check/error accanto ai campi
   - ⬜ Colori diversi per valori numerici fuori soglia
   - ⬜ Disabilitazione dinamica pulsanti invio

2. ⬜ **Controlli Real-time:**
   - ⬜ Validazione durante digitazione (debounced)
   - ⬜ Controllo username esistente on blur
   - ⬜ Aggiornamento contatori caratteri in tempo reale
   - ⬜ Indicatori forza password

---

# 📂 Struttura Progetto

## Frontend (Vue.js) - PistoVUE/
```
PistoVUE/
├── public/
├── src/
│   ├── assets/           # Immagini, CSS, font
│   ├── components/       # Header, Footer, NavBar, ProductCard, etc.
│   ├── views/           # HomeView, ProductsView, AuthView, etc.
│   ├── router/          # Configurazione routing con route guards
│   ├── stores/          # ✅ Pinia: session, filters, counter
│   │   ├── session.js   # ✅ Store gestione autenticazione persistente
│   │   ├── filters.js   # ✅ Store filtri prodotti
│   │   └── counter.js   # Store base di esempio
│   ├── utils/           # ✅ NUOVA CARTELLA - Utilities modulari
│   │   ├── apis.js      # ✅ Funzioni per chiamate API (getAllProds, getAllUsers, addProduct)
│   │   ├── auth.js      # ✅ Funzioni autenticazione (login, logout, register, changePassword)
│   │   └── routeGuards.js # ✅ Route guards (requireAuth, redirectIfAuthenticated)
│   ├── App.vue
│   └── main.js
└── package.json
```

## Backend (Node.js) - server/
```
server/
├── server.js            # ✅ Server Express principale con middleware sessioni
├── package.json         # ✅ Dipendenze: express, pg, nodemon, express-session
├── db.js               # ✅ Configurazione connessione PostgreSQL
├── src/
│   ├── prod/           # ✅ Modulo Prodotti (Pattern MVC)
│   │   ├── prod_routes.js     # ✅ Route: GET/POST /prodotti
│   │   ├── prod_controller.js # ✅ Logica business + gestione errori
│   │   └── prod_queries.js    # ✅ Query SQL per prodotti
│   ├── users/          # ✅ Modulo Utenti (Pattern MVC)
│   │   ├── user_routes.js     # ✅ Route: GET/POST /utenti, /register
│   │   ├── user_controller.js # ✅ Logica business + validazione registrazione
│   │   └── user_queries.js    # ✅ Query SQL per utenti e registrazione
│   └── sessions/       # ✅ Modulo Sessioni (Pattern MVC) - NUOVO
│       ├── session_routes.js  # ✅ Route: POST /login, /logout, /change-password, GET /session
│       ├── session_controller.js # ✅ Logica autenticazione e cambio password
│       └── session_queries.js    # ✅ Query SQL per login e password
└── public/
    └── images/
        └── placeholder.jpg
```

### 📡 API Endpoints Implementati

**Server Base:**
- `GET /` - Homepage server con messaggio benvenuto

**Gestione Prodotti:**
- `GET /prodotti` - Recupera tutti i prodotti dal database
- `POST /prodotti` - Inserisce nuovo prodotto (richiede validazione completa)

**Gestione Utenti:**
- `GET /utenti` - Recupera tutti gli utenti dal database  
- `POST /utenti` - Inserisce nuovo utente (con `data_registrazione` automatica)
- `POST /register` - Registrazione completa con validazione (username, email, password, etc.)

**Gestione Sessioni:** ✅ NUOVO MODULO
- `POST /login` - Autenticazione con controllo username/password e messaggi specifici
- `POST /logout` - Invalidazione sessione corrente
- `GET /session` - Controllo stato sessione (utente loggato o no)
- `POST /change-password` - Cambio password con validazione sicurezza

**Esempio chiamate API:**
```bash
# Visualizza tutti i prodotti
GET http://localhost:3000/prodotti

# Visualizza tutti gli utenti
GET http://localhost:3000/utenti

# Crea nuovo prodotto
POST http://localhost:3000/prodotti
Content-Type: application/json
{
  "titolo": "Amaretti",
  "descrizione": "Dolci alle mandorle",
  "prezzo": 8.50,
  "data_scadenza": "2025-12-31",
  "origine_ricetta": "Sassari"
}

# Registra nuovo utente
POST http://localhost:3000/register
Content-Type: application/json
{
  "nome": "Mario",
  "cognome": "Rossi",
  "username": "mariorossi",
  "email": "mario@email.com",
  "password": "password123",
  "citta": "Cagliari"
}

# Login utente
POST http://localhost:3000/login
Content-Type: application/json
{
  "username": "mariorossi",
  "password": "password123"
}

# Logout utente
POST http://localhost:3000/logout

# Controllo sessione
GET http://localhost:3000/session

# Cambio password
POST http://localhost:3000/change-password
Content-Type: application/json
{
  "oldPassword": "password123",
  "newPassword": "newpassword456",
  "confirmPassword": "newpassword456"
}
```

## Database PostgreSQL - database/
```
database/
├── backup.sql           # ✅ Dump completo database con dati
├── README.md           # ✅ Guida setup e istruzioni  
├── queries.sql         # ✅ Query di esempio per test API
└── schema.png          # ⬜ Screenshot struttura pgAdmin (da aggiungere)
```

## Database Schema (IMPLEMENTATO)
```sql
-- Database: pistoccheddus ✅

-- Tabella utenti (4 membri team inseriti) ✅
CREATE TABLE utenti (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL,    -- melis, parasuco, pisanu, derosas
    password VARCHAR(20) NOT NULL,           -- 66431, 66469, 66181, 66474
    nome VARCHAR(50) NOT NULL,
    cognome VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    citta VARCHAR(20),
    data_registrazione TIMESTAMP
);

-- Tabella prodotti (5 dolci sardi inseriti) ✅
CREATE TABLE prodotti (
    id SERIAL PRIMARY KEY,
    titolo VARCHAR(20) NOT NULL,             -- Pistoccheddus, Torrone, etc.
    descrizione VARCHAR(250),
    prezzo INTEGER NOT NULL,                 -- In centesimi (100 = 1€)
    immagine VARCHAR(200),                   -- placeholder.jpg
    data_scadenza TIMESTAMP NOT NULL,
    origine_ricetta VARCHAR(100)            -- Campidano, Tonara, etc.
);
```