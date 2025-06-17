--
-- PostgreSQL database dump
--

-- Dumped from database version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.9 (Ubuntu 16.9-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: prodotti; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prodotti (
    id integer NOT NULL,
    titolo character varying(20) NOT NULL,
    descrizione character varying(250),
    prezzo integer NOT NULL,
    immagine character varying(200),
    data_scadenza timestamp without time zone NOT NULL,
    origine_ricetta character varying(100)
);


ALTER TABLE public.prodotti OWNER TO postgres;

--
-- Name: prodotti_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prodotti_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.prodotti_id_seq OWNER TO postgres;

--
-- Name: prodotti_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prodotti_id_seq OWNED BY public.prodotti.id;


--
-- Name: utenti; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.utenti (
    id integer NOT NULL,
    username character varying(20) NOT NULL,
    password character varying(20) NOT NULL,
    nome character varying(50) NOT NULL,
    cognome character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    citta character varying(20),
    data_registrazione timestamp without time zone
);


ALTER TABLE public.utenti OWNER TO postgres;

--
-- Name: utenti_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.utenti_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.utenti_id_seq OWNER TO postgres;

--
-- Name: utenti_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.utenti_id_seq OWNED BY public.utenti.id;


--
-- Name: prodotti id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prodotti ALTER COLUMN id SET DEFAULT nextval('public.prodotti_id_seq'::regclass);


--
-- Name: utenti id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utenti ALTER COLUMN id SET DEFAULT nextval('public.utenti_id_seq'::regclass);


--
-- Data for Name: prodotti; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prodotti (id, titolo, descrizione, prezzo, immagine, data_scadenza, origine_ricetta) FROM stdin;
1	Pistoccheddus	I pistoccheddus sono piccoli biscotti tradizionali sardi, croccanti e leggeri, spesso realizzati con semola di grano duro, zucchero e strutto. Possono essere semplici o aromatizzati con scorza di limone o anice.	100	placeholder.jpg	2030-01-01 00:00:00	Campidano
2	Torrone	Il torrone sardo è un dolce a base di miele, albumi e mandorle o noci, noto per la sua consistenza morbida e il sapore intenso. Viene preparato senza zucchero aggiunto, a differenza di altri torroni italiani.	100	placeholder.jpg	2030-01-01 00:00:00	Tonara
3	Papassini	Biscotti tipici della tradizione autunnale sarda, i papassini contengono uvetta, noci, mandorle e sono aromatizzati con scorza d’arancia e spezie. Spesso decorati con glassa di zucchero colorata.	100	placeholder.jpg	2030-01-01 00:00:00	Fonni
4	Seadas	Le seadas sono dolci fritti ripieni di formaggio fresco (pecorino) e serviti caldi con miele sopra. Un contrasto unico tra dolce e salato, con una pasta sottile e croccante.	100	placeholder.jpg	2030-01-01 00:00:00	Ogliastra
5	Pardula	Le pardule sono piccole tortine con ripieno di ricotta o di formaggio. A seconda della zona si possono trovare in una versione dolce o salata, all'aroma di arancia o limone e, più rara, una versione con l'uvetta. 	100	placeholder.jpg	2030-01-01 00:00:00	Marmilla
\.


--
-- Data for Name: utenti; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.utenti (id, username, password, nome, cognome, email, citta, data_registrazione) FROM stdin;
1	melis	66431	Leonardo	Melis	leonardomelis@mail	Cagliari	2025-05-31 00:00:00
2	parasuco	66469	Matteo	Parasuco	matteoparasuco@mail	Cagliari	2025-05-31 00:00:00
3	pisanu	66181	Sharon	Pisanu	sharonpisau@mail	Cagliari	2025-05-31 00:00:00
4	derosas	66474	Igor	Derosas	igorderosas@mail	Cagliari	2025-05-31 00:00:00
\.


--
-- Name: prodotti_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prodotti_id_seq', 5, true);


--
-- Name: utenti_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.utenti_id_seq', 5, true);


--
-- Name: prodotti prodotti_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prodotti
    ADD CONSTRAINT prodotti_pkey PRIMARY KEY (id);


--
-- Name: utenti unique_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utenti
    ADD CONSTRAINT unique_email UNIQUE (email);


--
-- Name: utenti unique_username; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utenti
    ADD CONSTRAINT unique_username UNIQUE (username);


--
-- Name: utenti utenti_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.utenti
    ADD CONSTRAINT utenti_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

