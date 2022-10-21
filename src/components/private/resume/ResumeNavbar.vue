<script>
</script>

<template>
  <div>
    <div class="grid  pt-7 md:pt-8 ">
      <div class="col-4 font-semibold text-center col-offset-2 ">

        <router-link to="/resume/my-purchases" class="no-underline">My Purchases</router-link>

      </div>
      <div class=" col-4 font-semibold text-center hover hover:bg-blue-50">
        <router-link to="/resume/my-trips" class="no-underline">My Trips</router-link>
      </div>

      <!-- col-11 ml-2 -->

    </div>
    <div class="grid">
      <div class="col-8 col-offset-2">
        <hr class=" line">
      </div>
    </div>

    <!-- este estilo de grid tendra el componente que se abrira por las rutas  -->
    <div class="grid">

      <div class="col-12 pl-4 md:col-offset-2 md:col-8">

        <router-view></router-view>
      </div>
    </div>
  </div>
  
</template>
<RouterView />

<style>

main {
  font-family: Poppins;
}

hr.line {
  border-top: 1px solid gray;
}

router-link {
  text-underline: red;
}

</style>