<template>
  <div class="product-card">
    <div class="product-image-container">
      <img :src="imageSrc" :alt="title" class="product-image">
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
      <p class="product-price">{{ formattedPrice }}</p>
      <!-- Aggiungere qui altri campi se necessario -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  }
  // Aggiungere qui altre props se necessario
})

// Formatta il prezzo come valuta
const formattedPrice = computed(() => {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(props.price)
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column; /* Mobile first: immagine sopra */
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.product-image-container {
  width: 100%;
  overflow: hidden; /* Nasconde parti dell'immagine che escono */
}

.product-image {
  width: 100%;
  height: auto; /* Mantiene le proporzioni */
  display: block;
  object-fit: cover; /* Copre l'area senza distorcere */
  max-height: 200px; /* Limita altezza immagine su mobile */
}

.product-info {
  padding: 1rem;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #074079;
}

.product-description {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
}

/* Responsive: Desktop (768px and above) */
@media (min-width: 768px) {
  .product-card {
    flex-direction: row; /* Immagine affiancata al testo */
  }

  .product-image-container {
    width: 40%; /* Larghezza immagine su desktop */
    flex-shrink: 0; /* Impedisce all'immagine di restringersi */
  }

  .product-image {
     max-height: none; /* Rimuove limite altezza su desktop */
     height: 100%; /* Fa sì che l'immagine riempia l'altezza del contenitore */
  }

  .product-info {
    width: 60%; /* Larghezza testo su desktop */
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra verticalmente il contenuto se necessario */
  }
}
</style>