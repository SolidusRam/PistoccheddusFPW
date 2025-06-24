# 📋 REPORT ANALISI CSS - Progetto Pistoccheddus

**Data Analisi**: 24 giugno 2025  
**Progetto**: PistoccheddusFPW  
**Framework**: Vue.js + CSS Vanilla  

---

## 🚨 **VIOLAZIONI CRITICHE**

### 1. **Layout System Conflicts**
- **File**: `/PistoVUE/src/assets/main.css`
- **Linee**: 103, 115
- **Problema**: Uso di `align-self: flex-start` in un layout basato su float
- **Violazione**: `align-self` è una proprietà Flexbox, incompatibile con layout float-based
- **Codice Problematico**:
  ```css
  .sidebar-left.col-3, .sidebar-right.col-3 { 
    align-self: flex-start; /* ❌ VIOLAZIONE */
  }
  ```

### 2. **Animazioni Complesse Non Consentite**
- **File**: `/PistoVUE/src/components/NavBar.vue`
- **Linea**: 109
- **Problema**: Animazione `@keyframes pulseRed` troppo complessa
- **Violazione**: Keyframes multipli con shadow animati e background dinamici
- **Codice Problematico**:
  ```css
  @keyframes pulseRed {
    0% { box-shadow: 0 0 15px rgba(220, 53, 69, 0.7); }
    50% { box-shadow: 0 0 30px rgba(220, 53, 69, 1); }
    100% { box-shadow: 0 0 15px rgba(220, 53, 69, 0.7); }
  }
  ```

### 3. **Proprietà CSS Non Standard/Complesse**
- **Files**: Multipli
- **Problema**: Uso eccessivo di `backdrop-filter`
- **Violazione**: Proprietà non basilare e con problemi di compatibilità
- **Occorrenze**:
  - `main.css`: linee 136, 142, 172
  - `Header.vue`: linea 51
  - `NavBar.vue`: linea 43

---

## ⚠️ **PROBLEMI SIGNIFICATIVI**

### 4. **Codice CSS Ripetuto Massivamente**

#### 4.1 Pattern Clearfix (8+ ripetizioni)
```css
/* Ripetuto in ogni componente */
.elemento::after {
  content: "";
  display: table;
  clear: both;
}
```
**Files interessati**: `ProductCard.vue`, `Header.vue`, `Footer.vue`, `NavBar.vue`, `MemberCard.vue`, `main.css`

#### 4.2 Media Query Duplicate (15+ occorrenze)
```css
/* Stesso breakpoint ripetuto ovunque */
@media (min-width: 768px) { ... }
```

#### 4.3 Proprietà Sticky Replicate
```css
/* Ripetuto per sidebar */
position: sticky;
top: 70px;
max-height: calc(100vh - 70px);
overflow-y: auto;
```

### 5. **Selettori CSS Troppo Complessi**
- **File**: `Footer.vue`
- **Linea**: 180
- **Problema**: `.team-member:not(:last-child)::after`
- **Complessità**: Pseudo-selettori combinati non necessari

### 6. **Animazioni con Performance Issues**
- **File**: `SidebarRight.vue`
- **Problema**: Animazione che modifica `box-shadow` (non ottimale)
- **File**: `SidebarLeft.vue`
- **Problema**: Animazione JavaScript complessa per progress bar

---

## 📱 **PROBLEMI DI RESPONSIVE DESIGN**

### 7. **Layout Override Complesso**
- **File**: `main.css`
- **Linee**: 94-120
- **Problema**: Sidebar specifiche che sovrascrivono le classi generiche
- **Codice Problematico**:
  ```css
  .sidebar-left.col-3 { width: 23.5%; } /* Rompe sistema 12 colonne */
  .main-content.col-6 { width: 47%; }   /* Rompe sistema 12 colonne */
  ```

### 8. **Inconsistenza Responsive**
- **Problema**: Logica responsive frammentata tra componenti
- **Manca**: Sistema responsive centralizzato

---

## 🔧 **SEMPLIFICAZIONI POSSIBILI**

### 9. **Utility Classes Underutilized**
- **Problema**: Font families ripetute invece di usare utility esistenti
- **Files**: Molti componenti ridichiarano `font-family: 'Merriweather'`
- **Soluzione**: Usare `.font-merriweather` esistente

### 10. **Box Model Inconsistencies**
- **Problema**: Alcuni elementi usano `padding`, altri `margin` per lo stesso scopo
- **Problema**: Valori di spaziatura inconsistenti (1rem, 15px, 1.5rem, etc.)

### 11. **Selettori Inutilmente Specifici**
- **Esempi**:
  ```css
  .event-list .event-item { margin-bottom: 0.75rem; }
  /* Può essere semplificato in */
  .event-item { margin-bottom: 0.75rem; }
  ```

---

## 🔍 **ANALISI DETTAGLIATA DEI FILES**

### `main.css` (178 linee)
- ✅ **Positivo**: Sistema grid a 12 colonne ben implementato
- ❌ **Problemi**: 
  - `align-self: flex-start` incompatibile
  - `backdrop-filter` in 3 punti
  - Override percentuali che rompono grid system

### `SidebarLeft.vue` (245 linee CSS)
- ❌ **Problemi**:
  - Animazione JavaScript complessa per progress bar
  - `transform: translateZ(0)` e `will-change` non necessari
  - Selettore errato: `event-item strong` (manca il punto)

### `NavBar.vue` 
- ❌ **Problemi**:
  - Animazione `@keyframes pulseRed` troppo complessa
  - Pattern clearfix ripetuto
  - `backdrop-filter` non consentito

### `ProductCard.vue`
- ❌ **Problemi**:
  - Pattern clearfix ripetuto 2 volte
  - Layout float ridondante per responsive

### `Footer.vue`
- ❌ **Problemi**:
  - Selettore complesso `:not(:last-child)::after`
  - Pattern clearfix ripetuto
  - Layout responsive troppo complesso

---

## 📊 **STATISTICHE FINALI**

| Categoria | Occorrenze | Gravità |
|-----------|------------|---------|
| **Violazioni CSS Critiche** | 3 | 🚨 Alta |
| **Codice Ripetuto** | 35%+ | ⚠️ Media |
| **Selettori Complessi** | 12+ | ⚠️ Media |
| **Media Queries Duplicate** | 15+ | ⚠️ Media |
| **Proprietà Non Standard** | 8+ | ⚠️ Media |
| **Pattern Clearfix** | 8+ | 📋 Bassa |

---

## 🎯 **PIANO DI CORREZIONE RACCOMANDATO**

### **FASE 1 - Violazioni Critiche** (PRIORITÀ ALTA)
1. ✅ Rimuovere `align-self: flex-start` da main.css
2. ✅ Semplificare animazione `pulseRed` in NavBar.vue
3. ✅ Rimuovere o sostituire `backdrop-filter`

### **FASE 2 - Codice Ripetuto** (PRIORITÀ MEDIA)
1. ✅ Creare utility class per clearfix
2. ✅ Consolidare media queries
3. ✅ Centralizzare proprietà sticky

### **FASE 3 - Semplificazioni** (PRIORITÀ BASSA)
1. ✅ Semplificare selettori complessi
2. ✅ Standardizzare spacing values
3. ✅ Ottimizzare animazioni

---

## ✅ **CONFORMITÀ ALLE REGOLE**

### **CONSENTITO** ✅
- Layout a 12 colonne (ben implementato)
- Media queries per responsive
- Proprietà basilari viste a lezione
- `calc()` per layout (usato correttamente)

### **NON CONSENTITO** ❌
- `align-self` (proprietà Flexbox)
- `backdrop-filter` (non basilare)
- Animazioni keyframes complesse
- Selettori eccessivamente complessi

---

**CONCLUSIONE**: Il progetto ha una buona base con il sistema a 12 colonne, ma presenta violazioni critiche e molto codice ripetuto che necessita di refactoring per rispettare le regole del corso.
