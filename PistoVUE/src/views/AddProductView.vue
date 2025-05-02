<template>
  <div class="add-product-view">
    <h2>Aggiungi un Nuovo Dolce</h2>
    <form @submit.prevent="handleSubmit" class="add-product-form">
      <div class="form-group">
        <label for="title">Nome Dolce:</label>
        <input type="text" id="title" v-model="product.title" required>
      </div>
      <div class="form-group">
        <label for="description">Descrizione:</label>
        <textarea id="description" v-model="product.description" rows="4" required></textarea>
      </div>
      <div class="form-group">
        <label for="price">Prezzo (€):</label>
        <input type="number" id="price" v-model.number="product.price" step="0.01" min="0" required>
      </div>
      <!-- Campo immagine omesso come richiesto -->
      <button type="submit" class="submit-button">Aggiungi Prodotto</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const product = ref({
  title: '',
  description: '',
  price: null
})

const handleSubmit = () => {
  // Per ora, logghiamo i dati del prodotto (simulazione)
  console.log('Dati del prodotto da aggiungere:', product.value)
  alert(`Prodotto "${product.value.title}" (simulato) aggiunto! Controlla la console per i dettagli.`)

  // Resetta il form dopo l'invio (opzionale)
  product.value = {
    title: '',
    description: '',
    price: null
  }
}
</script>

<style scoped>
.add-product-view {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #074079; /* Blu scuro istituzionale */
}

.add-product-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* Spazio tra i gruppi del form */
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input[type="text"]:focus,
.form-group input[type="number"]:focus,
.form-group textarea:focus {
  border-color: #007bff; /* Blu al focus */
  outline: none;
}

.form-group textarea {
  resize: vertical; /* Permette solo il ridimensionamento verticale */
}

.submit-button {
  padding: 0.9rem 1.5rem;
  background-color: #007bff; /* Blu primario */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: center; /* Centra il bottone */
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #0056b3; /* Blu più scuro all'hover */
  transform: translateY(-2px);
}

.submit-button:active {
  transform: translateY(0);
}

/* Responsive adjustments if needed */
@media (max-width: 768px) {
  .add-product-view {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>