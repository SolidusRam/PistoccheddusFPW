  <script setup>
    import { RouterView } from 'vue-router'
    import AppHeader from './components/Header.vue' // Assumendo che il componente si chiami Header.vue
    import NavBar from './components/NavBar.vue'
    import AppFooter from './components/Footer.vue' // Assumendo che il componente si chiami Footer.vue
    import SidebarLeft from './components/SidebarLeft.vue'
    import SidebarRight from './components/SidebarRight.vue'
  </script>
<template>


  <div id="app-container">
    <NavBar />

    <RouterView />

    <AppFooter />
  </div>
</template>

