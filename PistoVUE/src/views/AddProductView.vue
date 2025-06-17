<template>
  <div id="newproduct_model">
    <h1 id="newproduct_title">Nuovo Prodotto</h1>
    <form action="product" method="POST">
      <label for="titolo">Titolo</label>
      <input type="text" name="titolo" id="titolo" v-model="titolo" @input="checkTitoloLength()" />
      <p id="caratteriRimanentiTitolo">Caratteri: {{ titolo.length }}/20</p>
      <br />
      <br />
      
      <label for="descrizione">Descrizione</label>
      <textarea name="descrizione" id="descrizione" v-model="descrizione" @input="checkDescrizioneLength()"></textarea>
      <p id="caratteriRimanentiDescrizione">Caratteri: {{ descrizione.length }}/250</p>
      <br />
      <br />
      
      <label for="prezzo">Prezzo (€)</label>
      <input id="prezzo" :style="prezzoStyle" type="number" name="prezzo" min="0.01" max="999.99" step="0.01" v-model="prezzo" />
      <p v-if="checkPrezzo()">Il prezzo deve essere compreso tra 0.01€ e 999.99€</p>
      <br />
      <br />
      
      <label for="data_scadenza">Data di Scadenza</label>
      <input type="date" name="data_scadenza" id="data_scadenza" :style="dataStyle" v-model="data_scadenza" />
      <p v-if="checkData()">La data di scadenza deve essere futura</p>
      <br />
      <br />
      
      <label for="origine_ricetta">Origine Ricetta</label>
      <input type="text" name="origine_ricetta" id="origine_ricetta" v-model="origine_ricetta" @input="checkOrigineLength()" placeholder="es. Campidano, Tonara, Ogliastra" />
      <p id="caratteriRimanentiOrigine">Caratteri: {{ origine_ricetta.length }}/100</p>
      <br />
      <br />
      
      <input 
        :disabled="checkFormValidation()" 
        type="submit" 
        id="buttonSubmit" 
        value="Aggiungi Prodotto" 
        @click.stop.prevent="addProduct()" 
      />
    </form>
  </div>
</template>

<script>
import { useSessionStore } from '@/stores/session';
import * as Api from '@/utils/apis';

export default {
    data() {
        return {
            titolo: '',
            descrizione: '',
            prezzo: null,
            immagine: 'placeholder.jpg',
            data_scadenza: '',
            origine_ricetta: '',
            sessionStore: useSessionStore(),
            maxCharTitolo: 20,
            maxCharDescrizione: 250,
            maxCharOrigine: 100,
            prezzoStyle: {
                color: 'black'
            },
            dataStyle: {
                color: 'black'
            }
        }
    },
    methods: {
        async addProduct() {
            const data = await Api.addProduct(
                this.titolo,
                this.descrizione,
                this.prezzo,
                this.immagine,
                this.data_scadenza,
                this.origine_ricetta,
                this.sessionStore.getUser()
            );
            if (data) {
                alert('Prodotto aggiunto');
                this.$router.push('/prodotti');
            } else {
                console.log(data);
                alert('Errore nell\'aggiunta del prodotto');
            }
        },
        
        resetForm() {
            this.titolo = '';
            this.descrizione = '';
            this.prezzo = null;
            this.immagine = 'placeholder.jpg';
            this.data_scadenza = '';
            this.origine_ricetta = '';
            this.prezzoStyle.color = 'black';
            this.dataStyle.color = 'black';
        },
        
        checkTitoloLength() {
            if(this.titolo.length > this.maxCharTitolo) {
                this.titolo = this.titolo.substring(0, this.maxCharTitolo);
            }
        },
        
        checkDescrizioneLength() {
            if(this.descrizione.length > this.maxCharDescrizione) {
                this.descrizione = this.descrizione.substring(0, this.maxCharDescrizione);
            }
        },
        
        checkOrigineLength() {
            if(this.origine_ricetta.length > this.maxCharOrigine) {
                this.origine_ricetta = this.origine_ricetta.substring(0, this.maxCharOrigine);
            }
        },
        
        checkPrezzo() {
            const prezzo = parseFloat(this.prezzo);
            if(!this.prezzo || isNaN(prezzo) || prezzo < 0.01 || prezzo > 999.99) {
                this.prezzoStyle.color = 'red';
                return true;
            } else {
                this.prezzoStyle.color = 'black';
                return false;
            }
        },
        
        checkData() {
            if(!this.data_scadenza) {
                this.dataStyle.color = 'red';
                return true;
            }
            const scadenza = new Date(this.data_scadenza);
            const oggi = new Date();
            // Confronta solo le date, non l'ora
            scadenza.setHours(0, 0, 0, 0);
            oggi.setHours(0, 0, 0, 0);
            if(scadenza <= oggi) {
                this.dataStyle.color = 'red';
                return true;
            } else {
                this.dataStyle.color = 'black';
                return false;
            }
        },
        
        checkFormValidation() {
            return !this.titolo.trim() || 
                   !this.descrizione.trim() || 
                   !this.origine_ricetta.trim() ||
                   this.checkPrezzo() || 
                   this.checkData();
        }
    },
    
    watch: {
        prezzo: {
            handler() {
                this.checkPrezzo();
            }
        },
        data_scadenza: {
            handler() {
                this.checkData();
            }
        }
    }
}
</script>

<style scoped>
#newproduct_model {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

#newproduct_title {
  text-align: center;
  margin-bottom: 2rem;
  color: #074079;
}

#caratteriRimanentiTitolo,
#caratteriRimanentiDescrizione,
#caratteriRimanentiOrigine {
  font-size: 0.9em;
  color: #666;
  margin: 0.2rem 0;
}

input[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

input[type="submit"] {
  padding: 0.9rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: block;
  margin: 1rem auto 0;
}

input[type="submit"]:hover:not(:disabled) {
  background-color: #0056b3;
  transform: translateY(-2px);
}

input[type="submit"]:active {
  transform: translateY(0);
}

input[type="text"],
input[type="number"],
textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  width: 100%;
  box-sizing: border-box;
}

input[type="text"]:focus,
input[type="number"]:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
}

p {
  color: red;
  font-size: 0.9em;
  margin: 0.2rem 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  #newproduct_model {
    margin: 1rem;
    padding: 1.5rem;
  }
}
</style>