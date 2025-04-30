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

<style>
/* Stilizzazioni specifiche del componente principale app */
.app-container {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.main-content {
  background-color: rgba(255, 255, 255, 0.93);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0.5rem;
}

.sidebar-left, .sidebar-right {
  background-color: rgba(250, 250, 250, 0.85);
  border-radius: 5px;
  margin: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
}
</style>

