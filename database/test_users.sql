-- Inserimento utenti di test per il login
-- Basato sui dati del README.md

INSERT INTO utenti (username, password, nome, cognome, email, citta, data_registrazione) VALUES
    ('melis', '66431', 'Leonardo', 'Melis', 'leonardomelis@mail.com', 'Cagliari', NOW()),
    ('parasuco', '66469', 'Matteo', 'Parasuco', 'matteoparasuco@mail.com', 'Cagliari', NOW()),
    ('pisanu', '66181', 'Sharon', 'Pisanu', 'sharonpisanu@mail.com', 'Cagliari', NOW());

-- Verifica inserimento
SELECT * FROM utenti;
