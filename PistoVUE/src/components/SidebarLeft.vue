<template>
  <div class="sidebar-left-container">

    <!-- Filtri Prodotti - Visibili solo nella pagina prodotti -->
    <section v-if="$route.path === '/prodotti'" class="product-filters">
      <h3>Filtri Prodotti</h3>
      
      <!-- Categorie -->
      <div class="filter-group">
        <h4>Categorie</h4>
        <select v-model="filtersStore.categoryFilter">
          <option value="tutti">Tutti i dolci</option>
          <option value="tradizionali">Tradizionali</option>
          <option value="festivi">Festivi</option>
          <option value="moderni">Moderni</option>
        </select>
      </div>

      <!-- Fascia di prezzo -->
      <div class="filter-group">
        <h4>Fascia di Prezzo</h4>
        <select v-model="filtersStore.priceRangeFilter">
          <option value="tutti">Tutti i prezzi</option>
          <option value="economici">Economici (< 15€)</option>
          <option value="medi">Medi (15-30€)</option>
          <option value="premium">Premium (> 30€)</option>
        </select>
      </div>

      <!-- Ingredienti -->
      <div class="filter-group">
        <h4>Ingredienti</h4>
        <div class="ingredients-list">
          <label>
            <input type="checkbox" v-model="filtersStore.ingredientsFilter" value="mandorle">
            Mandorle
          </label>
          <label>
            <input type="checkbox" v-model="filtersStore.ingredientsFilter" value="miele">
            Miele
          </label>
          <label>
            <input type="checkbox" v-model="filtersStore.ingredientsFilter" value="senzaGlutine">
            Senza Glutine
          </label>
        </div>
      </div>

      <!-- Ordinamento -->
      <div class="filter-group">
        <h4>Ordina per</h4>
        <select v-model="filtersStore.sortBy" @change="filtersStore.savePreferences()">
          <option value="default">Predefinito</option>
          <option value="price">Prezzo</option>
          <option value="popularity">Popolarità</option>
          <option value="newest">Più recenti</option>
        </select>
      </div>

      <!-- Visualizzazione -->
      <div class="filter-group">
        <h4>Visualizzazione</h4>
        <div class="view-toggles">
          <button 
            :class="{ active: filtersStore.viewMode === 'grid' }"
            @click="changeViewMode('grid')"
          >
            Griglia
          </button>
          <button 
            :class="{ active: filtersStore.viewMode === 'list' }"
            @click="changeViewMode('list')"
          >
            Lista
          </button>
        </div>
      </div>

      <!-- Reset Filtri -->
      <button class="reset-filters" @click="filtersStore.resetFilters">
        Resetta Filtri
      </button>
    </section>

    <!-- Sezione Informativa - visibile in tutte le pagine -->
    <section class="info-section">
      <h3>Lo sapevi che...</h3>
      <div class="fun-fact" v-if="currentFact">
        {{ currentFact }}
        <div class="time-progress">
          <div class="time-progress-bar"></div>
        </div>
      </div>
    </section>

    <!-- Eventi e Promozioni -->
    <section class="events-section">
      <h3>Eventi e Promozioni</h3>
      <div class="event-list">
        <div v-for="event in upcomingEvents" :key="event.id" class="event-item">
          <strong>{{ event.date }}</strong>
          <p>{{ event.description }}</p>
        </div>
      </div>
    </section>

    <!-- Prodotti Popolari - visibile solo nella home e prodotti -->
    <section v-if="['/', '/prodotti'].includes($route.path)" class="popular-products">
      <h3>I Più Popolari</h3>
      <ul class="popular-list">
        <li v-for="product in popularProducts" :key="product.id">
          {{ product.name }} - {{ product.views }} visualizzazioni
        </li>
      </ul>
    </section>

    <!-- Navigazione Rapida -->
    <section class="quick-nav">
      <h3>Navigazione Rapida</h3>
      <ul>
        <li><a href="#" @click.prevent="scrollToTop">Torna all'inizio</a></li>
        <li><a href="#main-content" @click.prevent="scrollTo('main-content')">Contenuto principale</a></li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount } from 'vue'
import { useFiltersStore } from '@/stores/filters'
import { useRoute } from 'vue-router'

const route = useRoute()
const filtersStore = useFiltersStore()

// Dati dimostrativi per la sezione "Lo sapevi che..."
const facts = [
  "I dolci sardi hanno una storia millenaria che risale all'epoca nuragica",
  "Le mandorle sono uno degli ingredienti più utilizzati nella pasticceria sarda",
  "Molti dolci sardi vengono preparati in occasione di festività specifiche",
  "La ricetta del torrone sardo è rimasta invariata per centinaia di anni"
]

const currentFact = ref(facts[0])
let factInterval

const FACT_INTERVAL = 10000 // 10 secondi
let animationFrameId
let startTime

onMounted(() => {
  let currentIndex = 0
  startTime = Date.now()
  
  // Funzione per animare la barra di progresso
  const animate = () => {
    const progressBar = document.querySelector('.time-progress-bar')
    if (progressBar) {
      const elapsedTime = Date.now() - startTime
      const progress = (elapsedTime / FACT_INTERVAL) * 100
      if (progress <= 100) {
        progressBar.style.width = `${progress}%`
        animationFrameId = requestAnimationFrame(animate)
      }
    }
  }

  // Avvia il timer per cambiare i fatti
  factInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % facts.length
    currentFact.value = facts[currentIndex]
    // Resetta il tempo e riavvia l'animazione
    startTime = Date.now()
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    const progressBar = document.querySelector('.time-progress-bar')
    if (progressBar) {
      progressBar.style.width = '0%'
    }
    animationFrameId = requestAnimationFrame(animate)
  }, FACT_INTERVAL)

  // Avvia la prima animazione
  animationFrameId = requestAnimationFrame(animate)

  // Carica le preferenze salvate
  filtersStore.loadPreferences()
})

onBeforeUnmount(() => {
  clearInterval(factInterval)
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})

// Eventi dimostrativi
const upcomingEvents = ref([
  {
    id: 1,
    date: '5 Maggio 2025',
    description: 'Degustazione di dolci tradizionali'
  },
  {
    id: 2,
    date: '12 Maggio 2025',
    description: 'Workshop: Prepara i tuoi Amaretti'
  }
])

// Prodotti popolari dimostrativi
const popularProducts = ref([
  { id: 1, name: 'Seadas', views: 1240 },
  { id: 2, name: 'Amaretti', views: 890 },
  { id: 3, name: 'Papassini', views: 750 }
])

// Funzioni di utilità
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollTo(elementClass) {
  const element = document.querySelector(`.${elementClass}`)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

function changeViewMode(mode) {
  filtersStore.viewMode = mode
  filtersStore.savePreferences()
}
</script>

<style scoped>
.sidebar-left-container {
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: rgba(255, 255, 255, 0.95);
}

section {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #074079;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
}

h4 {
  color: #333;
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.filter-group {
  margin-bottom: 1rem;
}

select, button {
  width: 100%;
  padding: 0.5rem;
  margin: 0.25rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
}

button {
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f0f0f0;
}

button.active {
  background-color: #074079;
  color: white;
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ingredients-list label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.reset-filters {
  background-color: #ff4444;
  color: white;
  border: none;
  margin-top: 1rem;
}

.reset-filters:hover {
  background-color: #cc0000;
}

.view-toggles {
  display: flex;
  gap: 0.5rem;
}

.view-toggles button {
  flex: 1;
}

.fun-fact {
  font-style: italic;
  color: #666;
  line-height: 1.4;
  position: relative;
  padding-bottom: 1.5rem;
}

.time-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.time-progress-bar {
  height: 100%;
  background-color: #074079;
  width: 0%;
  transition-property: width;
  transition-duration: 0.1s;
  transition-timing-function: linear;
  border-radius: 2px;
  transform: translateZ(0);
  will-change: width;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.event-item {
  border-left: 3px solid #074079;
  padding-left: 0.75rem;
}

event-item strong {
  color: #074079;
  display: block;
  margin-bottom: 0.25rem;
}

.popular-list {
  list-style: none;
  padding: 0;
}

.popular-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.popular-list li:last-child {
  border-bottom: none;
}

@media (min-width: 768px) {
  .sidebar-left-container {
    position: sticky;
    top: 60px;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
  }

  /* Scrollbar personalizzata per desktop */
  .sidebar-left-container::-webkit-scrollbar {
    width: 6px;
  }

  .sidebar-left-container::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .sidebar-left-container::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  .sidebar-left-container::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>