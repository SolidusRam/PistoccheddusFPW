<template>
  <div class="product-card">
    <div class="product-image-container">
      <img :src="imageUrl" :alt="title" class="product-image">
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
      <p class="product-price">{{ formattedPrice }}</p>
      <p class="product-origin" v-if="origine_ricetta">Origine: {{ origine_ricetta }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
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
    },
    origine_ricetta: {
      type: String,
      required: false
    }
  },
  computed: {
    formattedPrice() {
      // Il prezzo dal database arriva in centesimi, dividiamo per 100
      return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(this.price / 100)
    },
    imageUrl() {
      // Se l'immagine è placeholder.jpg o non esiste, usiamo un'immagine di fallback
      if (this.imageSrc === 'placeholder.jpg' || !this.imageSrc) {
        return 'https://via.placeholder.com/300x200/074079/ffffff?text=Dolce+Sardo'
      }
      // Usa import dinamico per le immagini con Vite
      return new URL(`../assets/${this.imageSrc}`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card::after {
  content: "";
  display: table;
  clear: both;
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

.product-origin {
  font-size: 0.85rem;
  color: #666;
  font-style: italic;
  margin-top: 0.5rem;
}

/* Responsive: Desktop (768px and above) */
@media (min-width: 768px) {
  .product-image-container {
    width: 40%;
    float: left;
  }

  .product-image {
     max-height: none;
     height: 200px;
  }

  .product-info {
    width: 60%;
    float: right;
    padding: 1.5rem;
    /* Centra verticalmente il contenuto */
    display: table-cell;
    vertical-align: middle;
    height: 200px;
  }
}
</style>