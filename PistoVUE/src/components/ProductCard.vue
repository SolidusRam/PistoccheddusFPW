<template>
  <div class="product-card clearfix">
    <div class="product-image-container">
      <img :src="imageUrl" :alt="title" class="product-image">
    </div>    <div class="product-info">
      <h3 class="product-title">{{ title }}</h3>
      <p class="product-description">{{ description }}</p>
      <div class="product-footer clearfix">
        <p class="product-price">{{ formattedPrice }}</p>
        <p class="product-origin" v-if="origine_ricetta">Origine: {{ origine_ricetta }}</p>
      </div>
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
      const price = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(this.price / 100)
      return `${price}/kg`
    },
    imageUrl() {
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.product-footer {
  margin-top: 0.5rem;
}

.product-price {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  float: left;
}

.product-origin {
  font-size: 1rem;
  color:  #F0C832;
  margin: 0;
  float: right;
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
  }
}
</style>