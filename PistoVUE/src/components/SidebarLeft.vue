<template>
  <div class="sidebar-left-container desktop-sticky">

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

    <!-- Eventi e Promozioni - visibili solo nelle pagine che non sono i prodotti -->
    <section v-if="$route.path !== '/prodotti'" class="events-section">
      <h3>Eventi e Promozioni</h3>
      <div class="event-list">
        <div v-for="event in upcomingEvents" :key="event.id" class="event-item">
          <strong>{{ event.date }}</strong>
          <p>{{ event.description }}</p>
        </div>
      </div>
    </section>

    <!-- Navigazione Rapida -->
    <section class="quick-nav">
      <h3>Navigazione Rapida</h3>
      <ul>
        <li class = "torna-all-inizio"><a href="#">Torna all'inizio</a></li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Dati dimostrativi per la sezione "Lo sapevi che..." Array
const facts = [
  "I dolci sardi hanno una storia millenaria che risale all'epoca nuragica",
  "Le mandorle sono uno degli ingredienti più utilizzati nella pasticceria sarda",
  "Molti dolci sardi vengono preparati in occasione di festività specifiche",
  "La ricetta del torrone sardo è rimasta invariata per centinaia di anni",
  "Il miele di corbezzolo è uno degli ingredienti più pregiati della pasticceria sarda",
  "Il pane carasau, sebbene non sia un dolce, è spesso servito con dolci come il miele e il formaggio",
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


</script>

<style scoped>


.sidebar-left-container {
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

section {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
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

.torna-all-inizio a {
  color: #074079;
  text-decoration: none;
  font-weight: 600;
}

.torna-all-inizio a:hover {
  color: #052a52;
  text-decoration: underline;
}
.filter-group {
  margin-bottom: 1rem;
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
  transition: width 0.1s linear;
  border-radius: 2px;
}

.event-list {
  margin-bottom: 0.75rem;
}

.event-list .event-item {
  margin-bottom: 0.75rem;
}

.event-item {
  border-left: 3px solid #074079;
  padding-left: 0.75rem;
}

.event-item strong {
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

.quick-nav ul {
    padding-left: 5%;
}

@media (min-width: 768px) {
  /* Le proprietà sticky sono ora gestite dalla classe desktop-sticky */
}
</style>