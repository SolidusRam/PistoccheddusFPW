-- ==============================================
-- Query di Esempio per Database Pistoccheddus
-- ==============================================

-- 1. VISUALIZZAZIONE DATI

-- Mostra tutti gli utenti del team
SELECT id, username, nome, cognome, email, citta, data_registrazione
FROM utenti 
ORDER BY cognome;

-- Mostra tutti i prodotti con prezzi in euro
SELECT 
    id, 
    titolo, 
    descrizione, 
    prezzo/100.0 as prezzo_euro, 
    origine_ricetta, 
    immagine,
    data_scadenza
FROM prodotti 
ORDER BY titolo;

-- 2. SIMULAZIONE LOGIN API

-- Test login con credenziali team
SELECT 
    id,
    nome,
    cognome,
    email,
    'success' as status
FROM utenti 
WHERE username = 'melis' AND password = '66431';

-- Test login fallito
SELECT 
    CASE 
        WHEN COUNT(*) > 0 THEN 'success'
        ELSE 'error'
    END as login_status
FROM utenti 
WHERE username = 'test' AND password = 'wrong';

-- 3. SIMULAZIONE API PRODOTTI

-- GET /prodotti - formato JSON-like per API
SELECT 
    json_build_object(
        'id', id,
        'titolo', titolo,
        'descrizione', descrizione,
        'prezzo', prezzo/100.0,
        'immagine', immagine,
        'origine', origine_ricetta
    ) as prodotto_json
FROM prodotti
ORDER BY titolo;

-- GET /prodotti con filtro prezzo
SELECT titolo, prezzo/100.0 as prezzo_euro, origine_ricetta
FROM prodotti 
WHERE prezzo <= 10000  -- Prodotti sotto 100€
ORDER BY prezzo;

-- 4. INSERIMENTI TEST (simulazione form)

-- POST /register - nuovo utente
INSERT INTO utenti (username, password, nome, cognome, email, citta, data_registrazione) 
VALUES ('nuovo_user', 'pass123', 'Mario', 'Rossi', 'mario.rossi@test.com', 'Sassari', NOW());

-- POST /prodotti - nuovo prodotto  
INSERT INTO prodotti (titolo, descrizione, prezzo, immagine, data_scadenza, origine_ricetta)
VALUES (
    'Candelaus', 
    'Dolci natalizi sardi a forma di piccole candele, preparati con mandorle e miele',
    1200,  -- 12€ in centesimi
    'placeholder.jpg',
    '2030-12-25 00:00:00',
    'Nuoro'
);

-- 5. QUERY ANALITICHE

-- Conteggio prodotti per regione
SELECT origine_ricetta as regione, COUNT(*) as numero_prodotti
FROM prodotti 
GROUP BY origine_ricetta 
ORDER BY numero_prodotti DESC;

-- Prezzo medio prodotti
SELECT 
    AVG(prezzo/100.0) as prezzo_medio_euro,
    MIN(prezzo/100.0) as prezzo_minimo,
    MAX(prezzo/100.0) as prezzo_massimo
FROM prodotti;

-- Prodotti ordinati per prezzo
SELECT 
    titolo,
    prezzo/100.0 as prezzo_euro,
    origine_ricetta,
    CASE 
        WHEN prezzo < 1000 THEN 'Economico'
        WHEN prezzo < 2000 THEN 'Medio'
        ELSE 'Premium'
    END as fascia_prezzo
FROM prodotti 
ORDER BY prezzo;

-- 6. AGGIORNAMENTI

-- Aggiorna prezzo prodotto
UPDATE prodotti 
SET prezzo = 1500  -- 15€
WHERE titolo = 'Seadas';

-- Aggiorna email utente
UPDATE utenti 
SET email = 'leonardo.melis@email.com'
WHERE username = 'melis';

-- 7. QUERY PER TESTING FRONTEND

-- Simula response login completa
SELECT 
    u.id,
    u.username,
    u.nome,
    u.cognome,
    u.email,
    u.citta,
    CASE 
        WHEN u.username IS NOT NULL THEN json_build_object(
            'status', 'success',
            'user', json_build_object(
                'id', u.id,
                'nome', u.nome,
                'cognome', u.cognome,
                'email', u.email
            )
        )
        ELSE json_build_object('status', 'error', 'message', 'Credenziali non valide')
    END as api_response
FROM utenti u
WHERE u.username = 'parasuco' AND u.password = '66469';

-- Lista prodotti per frontend Vue
SELECT 
    id,
    titolo as title,
    descrizione as description,
    prezzo/100.0 as price,
    immagine as imageSrc,
    origine_ricetta as origin
FROM prodotti
ORDER BY id;

-- 8. CONTROLLI DI VALIDITÀ

-- Verifica unicità username
SELECT username, COUNT(*) 
FROM utenti 
GROUP BY username 
HAVING COUNT(*) > 1;

-- Verifica unicità email
SELECT email, COUNT(*) 
FROM utenti 
GROUP BY email 
HAVING COUNT(*) > 1;

-- Prodotti senza immagine (diversi da placeholder)
SELECT titolo, immagine
FROM prodotti 
WHERE immagine IS NULL OR immagine = '';

-- 9. CLEANUP / RESET (per sviluppo)

-- Rimuovi utenti di test (mantieni solo team)
-- DELETE FROM utenti WHERE username NOT IN ('melis', 'parasuco', 'pisanu', 'derosas');

-- Reset sequence se necessario
-- SELECT setval('utenti_id_seq', (SELECT MAX(id) FROM utenti));
-- SELECT setval('prodotti_id_seq', (SELECT MAX(id) FROM prodotti));
