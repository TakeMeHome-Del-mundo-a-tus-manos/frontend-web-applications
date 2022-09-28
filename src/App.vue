<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

</script>



<template>
  <header>
    <Navbar class="navbar"/>
  </header>

  <RouterView />

    

</template>

<style scoped>
  main{
    margin: 100px;
  }
</style>
