<template>
  <div class="member-card">
    <div class="member-photo-container">
      <img :src="photo" :alt="name" class="member-photo">
    </div>
    <div class="member-info">
      <h3 class="member-name">{{ name }}</h3>
      <p class="member-description">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.member-card {
  margin-bottom: 2rem;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.member-card::after {
  content: "";
  display: table;
  clear: both;
}

.member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.member-photo-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.member-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.member-card:hover .member-photo {
  transform: scale(1.05);
}

.member-info {
  padding: 1.5rem;
}

.member-name {
  font-size: 1.4rem;
  color: #074079;
  margin-bottom: 0.5rem;
  font-family: 'NotableLocal', sans-serif;
}

.member-description {
  color: #333;
  line-height: 1.5;
}

/* Layout desktop: foto a fianco delle info */
@media (min-width: 768px) {
  .member-card {
    min-height: 220px;
  }

  .member-photo-container {
    width: 200px;
    height: 220px;
    float: left;
  }

  .member-photo {
    height: 100%;
  }

  .member-info {
    margin-left: 200px;
    padding: 1.5rem;
    /* Centra verticalmente il contenuto */
    display: table-cell;
    vertical-align: middle;
    height: 220px;
  }
}
</style>