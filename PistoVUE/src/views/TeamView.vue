<!-- Pagina team --> 
<template>
  <div class="team-view">
    <h2 class="team-title">Il Nostro Team</h2>
    <p class="team-intro">Conosciamo i membri del team che rendono possibile Pistoccheddus e portano avanti la tradizione della pasticceria sarda.</p>
    
    <div class="team-members">
      <MemberCard
        v-for="member in members"
        :key="member.id"
        :photo="member.photo"
        :name="member.name"
        :description="member.description"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MemberCard from '@/components/MemberCard.vue'

// Dati dei membri del team
const members = ref([
  {
    id: 1,
    name: 'Mario Rossi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in velit nec magna hendrerit pretium eget non erat.',
    photo: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    id: 2,
    name: 'Anna Bianchi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vel nisi ut magna fermentum tincidunt.',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  },
  {
    id: 3,
    name: 'Giuseppe Verdi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas, nunc in scelerisque vehicula, orci sem feugiat urna.',
    photo: 'https://randomuser.me/api/portraits/lego/3.jpg'
  },
  {
    id: 4,
    name: 'Laura Neri',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet est ac odio vestibulum, at finibus tortor scelerisque.',
    photo: 'https://randomuser.me/api/portraits/lego/4.jpg'
  }
])
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>