<script setup>
import { RouterLink, RouterView } from 'vue-router'
/*
import Navbar from './components/Navbar.vue';
import Footer from './components/private/Footer.vue';
import FooterLog from './components/FooterLog.vue';
import NavbarHome from "./components/NavbarHome.vue";
import FooterLogin from './components/Footer-Login.vue';
*/
</script>

<template>
  <!-- <header id="app">
    <NavbarHome />
  </header> -->
  <RouterView />
  <!-- <footer>
    <FooterLog class="FooterLog"></FooterLog>
  </footer>-->


</template>

<style scoped>

/*
main {
  margin: 100px;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');

html,
header {
  height: 100%;
  width: 100%;

}

header,
body {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  width: 100%;

  justify-content: center;
  align-items: center;
}
*/
</style>
