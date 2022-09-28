<script>
</script>

<template>
  <div>
    <div class="grid mt-3">
      <div class="col-8 col-offset-2 flex align-content-between justify-content-start ">
        <h2 class="text-4xl">Orders</h2>
        <i class="pi pi-box text-primary ml-3" style="font-size: 2rem"></i>
      </div>
    </div>
    <div class="grid">
      <div class="col-4 font-semibold text-center col-offset-2 hover hover:bg-blue-50 ">
        <router-link to="/order-available" class="no-underline">Available</router-link>
      </div>
      <div class=" col-4 font-semibold text-center hover hover:bg-blue-50">
        <router-link to="/order-booked" class="no-underline">Booked</router-link>
      </div>
    </div>
    <div class="grid mb-2">
      <div class="col-8 col-offset-2">
        <hr class=" line">
      </div>
    </div>
    <div class="grid">
      <div class="col-8 col-offset-2">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

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