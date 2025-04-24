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
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  border: 1px solid #333;
  padding: 10px;
}

.app-nav {
  position: sticky;
  top: 0;
  z-index: 10;
  border: 1px solid #333;
}

.app-content {
  display: flex;
  flex: 1;
}

.sidebar-left {
  width: 25%;
  border: 1px solid #333;
  padding: 10px;
}

.main-content {
  width: 50%;
  border: 1px solid #333;
  padding: 10px;
}

.sidebar-right {
  width: 25%;
  border: 1px solid #333;
  padding: 10px;
}

.app-footer {
  border: 1px solid #333;
  padding: 10px;
  margin-top: auto;
}

/* Responsive layout for mobile */
@media (max-width: 768px) {
  .app-content {
    flex-direction: column;
  }
  
  .sidebar-left,
  .main-content,
  .sidebar-right {
    width: 100%;
  }
  
  .app-nav {
    position: relative;
  }
}
</style>

