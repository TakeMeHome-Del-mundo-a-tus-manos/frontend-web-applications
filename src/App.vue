<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

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
  <header>
    <Navbar class="navbar"/>
  </header>

  <RouterView />

    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Navbar class="navbar"/>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

</template>

<style scoped>
  main{
    margin: 100px;
  }
</style>
