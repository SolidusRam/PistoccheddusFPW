<!-- Prodotti -->
<template>
  <div class="products-view">
    <h2>I Nostri Dolci</h2>
    <div class="products-list">
      <div v-if="error" class="error">{{ error }}</div>
      <ProductCard
        v-else
        v-for="product in products"
        :key="product.id"
        :title="product.titolo"
        :description="product.descrizione"
        :price="product.prezzo"
        :imageSrc="product.immagine"
        :origine_ricetta="product.origine_ricetta"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'ProductsView',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
      error: null
    }
  },
  async mounted() {
    await this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      try {
        this.error = null
        
        const response = await fetch('/api/prodotti')
        
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`)
        }
        
        this.products = await response.json()
      } catch (error) {
        console.error('Errore nel caricamento dei prodotti:', error)
        this.error = 'Errore nel caricamento dei prodotti. Riprova più tardi.'
      }
    }
  }
}
</script>

<style scoped>
.products-view {
  padding: 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #074079;
  font-size: 1.8rem;
}

.error {
  text-align: center;
  font-size: 1.1rem;
  color: #d32f2f;
  padding: 2rem;
  background-color: #ffebee;
  border-radius: 4px;
  margin: 1rem 0;
}

/* Media query per eventuali aggiustamenti specifici della vista */
@media (min-width: 768px) {
  .products-view {
    padding: 2rem;
  }
}
</style>