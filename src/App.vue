<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import FooterLog from './components/FooterLog.vue';
import NavbarHome from "./components/NavbarHome.vue";


</script>


<!-- <template>
  <header>
    <Navbar class="navbar"/>
  </header>
  <main>
    <div class="flex align-items-center justify-content-center">
      <loginVue class=""/>
    </div>
  </main>
</template> -->

<template>
  <header id="app">
    <NavbarHome />
  </header>
  <RouterView />
  <footer>
    <FooterLog class="FooterLog"></FooterLog>
  </footer>
</template>

<style scoped>
  main{
    margin: 100px;
  }

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');
html,header{
  height: 100%;
  width:100%;

}

header, body{
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  width: 100%;

  justify-content: center;
  align-items: center;
  
}
  
</style>
