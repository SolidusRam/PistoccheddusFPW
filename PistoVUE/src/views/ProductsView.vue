<!-- Prodotti -->
<template>
  <div class="products-view">
    <h2>I Nostri Dolci</h2>
    <div class="products-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :description="product.description"
        :price="product.price"
        :imageSrc="product.imageSrc"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
// Importa le immagini direttamente
import pardulaImage from '@/assets/pardula.jpeg'
import seadasImage from '@/assets/seadas.jpeg'

const products = ref([
  {
    id: 1,
    title: 'Pardula',
    description: 'Dolce tradizionale sardo a base di ricotta o formaggio fresco, racchiuso in una sottile sfoglia croccante e aromatizzato al limone o arancia.',
    price: 18.50, // Prezzo al kg o per confezione
    imageSrc: pardulaImage // Usa la variabile importata
  },
  {
    id: 2,
    title: 'Seadas',
    description: 'Raviolo dolce fritto ripieno di formaggio pecorino fresco filante, servito caldo e cosparso di miele sardo.',
    price: 22.00, // Prezzo al kg o per confezione
    imageSrc: seadasImage // Usa la variabile importata
  }
  // Aggiungere altri prodotti qui
])
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

/* Media query per eventuali aggiustamenti specifici della vista */
@media (min-width: 768px) {
  .products-view {
    padding: 2rem;
  }
}
</style>