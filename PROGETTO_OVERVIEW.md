# 📋 OVERVIEW PROGETTO PISTOCCHEDDUS - APPLICAZIONE WEB DINAMICA

**Data:** 27 maggio 2025  
**Progetto:** PistoccheddusFPW - Pasticceria Sarda  
**Framework:** Vue.js 3 + Vite + Pinia  

## 🎯 OBIETTIVO DEL PROGETTO

Sviluppare un'applicazione web dinamica per una pasticceria sarda specializzata in dolci tradizionali, evolvendo da una base HTML/CSS statica verso un sistema completo con backend e database.

## 📚 TECNOLOGIE STUDIATE (Base Teorica)

### Backend Technologies:
- **Node.js + Express.js** - Server-side development
- **Database PostgreSQL/MySQL** - Gestione dati relazionali
- **SQL** - CRUD operations, JOIN, vincoli
- **Autenticazione** - JWT tokens vs Session-based
- **API REST** - Endpoint per comunicazione frontend-backend

### Frontend Technologies:
- **Vue.js 3** - SPA framework
- **Vue Router** - Client-side routing
- **Pinia** - State management
- **Composition API** - Reattività e lifecycle hooks
- **Fetch API** - HTTP requests
- **Component Communication** - Props, emit, eventi

### JavaScript Concepts:
- **ES6+ Features** - Arrow functions, destructuring, modules
- **Async Programming** - Promises, async/await
- **JSON** - Data exchange format
- **Error Handling** - try/catch blocks
- **Local/Session Storage** - Client-side persistence

## 🏗️ STRUTTURA ATTUALE DEL PROGETTO

### Pagine Principali:
1. **HomeView** - Presentazione attività
2. **ProductsView** - Catalogo dolci sardi
3. **AddProductView** - Form aggiunta prodotti
4. **TeamView** - Membri del team
5. **AuthView** - Login/Registrazione

### Componenti Chiave:
- **Header** - Logo e titolo
- **NavBar** - Menu navigazione responsive
- **Footer** - Contatti team e social links
- **ProductCard** - Card riutilizzabile per prodotti
- **MemberCard** - Card per membri del team
- **SidebarLeft** - Filtri e informazioni contestuali
- **SidebarRight** - Pubblicità e promozioni

### Store Pinia:
- **filters.js** - Gestione filtri prodotti e preferenze UI
- **counter.js** - Store demo di base

## 📦 GESTIONE DATI ATTUALE

### Dati Statici (Hardcoded):
- **Prodotti**: Pardula, Seadas con immagini locali
- **Team Members**: 4 membri con foto, nomi, email
- **Filtri**: Categorie, prezzi, ingredienti
- **Eventi**: Promozioni e novità

### Struttura Dati Prodotti:
```
{
  id: number,
  title: string,
  description: string,
  price: number,
  imageSrc: string/URL,
  category: string,
  ingredients: array
}
```

### Struttura Dati Team:
```
{
  id: number,
  name: string,
  description: string,
  photo: URL,
  email: string,
  role: string
}
```

## 🔮 ROADMAP EVOLUZIONE DINAMICA

### Fase 1 (Attuale): Frontend Statico
- ✅ Layout responsive completato
- ✅ Componenti Vue funzionanti
- ✅ Routing configurato
- ✅ Store Pinia base implementato

### Fase 2: Preparazione Dinamicità
- 🔄 **Migrazione dati in Store Pinia** - Centralizzare gestione dati
- 🔄 **API Service Layer** - Preparare struttura per chiamate HTTP
- 🔄 **Form Validation** - Validazione lato client
- 🔄 **Error Handling** - Gestione errori e loading states

### Fase 3: Backend Development
- ⏳ **Server Express.js** - API REST endpoints
- ⏳ **Database PostgreSQL** - Schema per Users, Products, Orders
- ⏳ **Autenticazione JWT** - Login/registrazione funzionanti
- ⏳ **File Upload** - Gestione immagini prodotti

### Fase 4: Integrazione Completa
- ⏳ **CRUD Operations** - Create/Read/Update/Delete prodotti
- ⏳ **User Management** - Registrazione, profili utente
- ⏳ **Filtri Dinamici** - Basati su dati reali dal database
- ⏳ **Search Functionality** - Ricerca prodotti

### Fase 5: Features Avanzate
- ⏳ **Shopping Cart** - Carrello acquisti
- ⏳ **Order Management** - Gestione ordini
- ⏳ **Admin Panel** - Pannello amministrazione
- ⏳ **Analytics** - Statistiche vendite

## 🎨 DESIGN SYSTEM

### Colori Principali:
- **Primary Blue**: #074079
- **Background**: Immagine sfondo fisso con overlay
- **Cards**: rgba(255, 255, 255, 0.9)
- **Text**: #333 per contenuti, #074079 per titoli

### Typography:
- **Headers**: 'NotableLocal' (custom font)
- **Body**: 'Merriweather' serif
- **Decorative**: 'Pacifico' cursive

### Layout:
- **Mobile**: Single column, stacked layout
- **Desktop**: 3-column grid (sidebar-left, main, sidebar-right)
- **Responsive**: Breakpoint 768px

## 🔧 ISSUES E MIGLIORAMENTI IDENTIFICATI

### Template Issues:
- **NavBar.vue**: Template vuoto, mancano i RouterLink
- **AuthView.vue**: Template vuoto, mancano i form
- **ProductCard.vue**: Template incompleto, mancano immagini
- **SidebarLeft.vue**: Template vuoto, mancano filtri
- **SidebarRight.vue**: Template vuoto, mancano ads

### Data Management:
- **Duplicazione Dati**: Team members sia in TeamView che Footer
- **Mancanza Centralizzazione**: Dati sparsi nei vari componenti
- **Form Non Funzionali**: AddProductView e AuthView non persistono dati

### Performance:
- **Image Optimization**: Immagini non ottimizzate
- **Loading States**: Mancano indicatori di caricamento
- **Error Boundaries**: Gestione errori limitata

## 📝 REQUISITI TECNICI UNIVERSITARI

### Must Have:
- [x] **Vue.js SPA** - Single Page Application
- [x] **Router** - Navigazione client-side
- [x] **Componenti Riutilizzabili** - ProductCard, MemberCard
- [x] **Responsive Design** - Mobile-first approach
- [x] **State Management** - Pinia stores

### Should Have:
- [ ] **Database Integration** - PostgreSQL/MySQL
- [ ] **API Backend** - Node.js/Express
- [ ] **Authentication** - JWT-based
- [ ] **CRUD Operations** - Full data management
- [ ] **Form Validation** - Client + server side

### Nice to Have:
- [ ] **File Upload** - Image management
- [ ] **Search/Filter** - Advanced product filtering
- [ ] **Admin Panel** - Content management
- [ ] **PWA Features** - Offline capability

## 🚀 PROSSIMI STEP SUGGERITI

1. **Completare Template Mancanti** - Ripristinare contenuti NavBar, AuthView, etc.
2. **Centralizzare Dati** - Creare stores dedicati (products.js, team.js)
3. **Implementare Form Validation** - AddProductView e AuthView
4. **Preparare API Layer** - Service per chiamate HTTP future
5. **Setup Backend Project** - Struttura Express.js separata
6. **Database Schema** - Progettazione tabelle e relazioni

*Questo documento serve come base di riferimento per lo sviluppo futuro del progetto e per fornire contesto nei prompt successivi.*
