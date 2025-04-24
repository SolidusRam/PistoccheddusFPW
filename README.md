# Modulo 1: HTML + CSS (aggiornato al 23/04/25)

Realizzare un’applicazione web formata da 5 pagine web. Nello specifico:

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

