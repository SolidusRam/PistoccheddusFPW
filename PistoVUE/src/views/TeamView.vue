<!-- Pagina team --> 
<template>
  <div class="team-view">
    <h2 class="team-title">Il Nostro Team</h2>
    <p class="team-intro">Conosciamo i membri del team che rendono possibile Pistoccheddus e portano avanti la tradizione della pasticceria sarda.</p>
    
    <div class="team-members">
      <div v-if="error" class="error">{{ error }}</div>
      <MemberCard
        v-else
        v-for="member in members"
        :key="member.id"
        :name="`${member.nome} ${member.cognome}`"
        :description="`Membro del team da ${member.citta}. Registrato il ${formatDate(member.data_registrazione)}`"
        :photo="getDefaultPhoto(member.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MemberCard from '@/components/MemberCard.vue'
import { getAllUsers } from '@/utils/apis.js'

// Dati dei membri del team dal database
const members = ref([])
const error = ref(null)

// Funzione per caricare i membri del team
const fetchMembers = async () => {
  try {
    error.value = null
    members.value = await getAllUsers()
  } catch (err) {
    console.error('Errore nel caricamento dei membri del team:', err)
    error.value = 'Errore nel caricamento dei membri del team. Riprova più tardi.'
  }
}

// Funzione per formattare la data
const formatDate = (dateString) => {
  if (!dateString) return 'Data non disponibile'
  const date = new Date(dateString)
  return date.toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Funzione per ottenere foto di default
const getDefaultPhoto = (id) => {
  const photos = [
    'https://randomuser.me/api/portraits/men/83.jpg',
    'https://randomuser.me/api/portraits/women/44.jpg',
    'https://randomuser.me/api/portraits/men/80.jpg',
    'https://randomuser.me/api/portraits/women/65.jpg',
    'https://randomuser.me/api/portraits/men/32.jpg'
  ]
  return photos[(id - 1) % photos.length] || photos[0]
}

onMounted(() => {
  fetchMembers()
})
</script>

<style scoped>
.team-view {
  padding: 1rem;
}

.team-title {
  color: #074079;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: 'NotableLocal', sans-serif;
}

.team-intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  color: #555;
  line-height: 1.6;
}

.team-members {
  max-width: 800px;
  margin: 0 auto;
}

.team-members > * {
  margin-bottom: 1.5rem;
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
</style>