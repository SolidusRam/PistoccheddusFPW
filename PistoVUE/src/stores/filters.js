import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFiltersStore = defineStore('filters', () => {
  // Filtri per i prodotti
  const categoryFilter = ref('tutti')
  const priceRangeFilter = ref('tutti')
  const ingredientsFilter = ref([])
  
  // Preferenze di visualizzazione
  const viewMode = ref('grid') // 'grid' o 'list'
  const sortBy = ref('default') // 'price', 'popularity', 'newest', 'default'
  
  // Funzioni per resettare i filtri
  function resetFilters() {
    categoryFilter.value = 'tutti'
    priceRangeFilter.value = 'tutti'
    ingredientsFilter.value = []
  }

  // Funzioni per salvare le preferenze nel localStorage
  function savePreferences() {
    localStorage.setItem('userPreferences', JSON.stringify({
      viewMode: viewMode.value,
      sortBy: sortBy.value
    }))
  }

  // Funzione per caricare le preferenze dal localStorage
  function loadPreferences() {
    const saved = localStorage.getItem('userPreferences')
    if (saved) {
      const prefs = JSON.parse(saved)
      viewMode.value = prefs.viewMode
      sortBy.value = prefs.sortBy
    }
  }

  return {
    categoryFilter,
    priceRangeFilter,
    ingredientsFilter,
    viewMode,
    sortBy,
    resetFilters,
    savePreferences,
    loadPreferences
  }
})