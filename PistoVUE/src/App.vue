<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue' 
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue' 
import SidebarLeft from './components/SidebarLeft.vue'
import SidebarRight from './components/SidebarRight.vue'
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <Header />
    </header>
    
    <nav class="app-nav">
      <NavBar />
    </nav>
    
    <div class="app-content">
      <aside class="sidebar-left">
        <SidebarLeft />
      </aside>
      
      <main class="main-content">
        <RouterView />
      </main>
      
      <aside class="sidebar-right">
        <SidebarRight />
      </aside>
    </div>
    
    <footer class="app-footer">
      <Footer />
    </footer>
  </div>
</template>


<!-- Bordi di debug-->
<style scoped>

</style>

