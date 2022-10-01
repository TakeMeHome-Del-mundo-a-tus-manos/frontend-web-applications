<script>
</script>

<template>
  <div>
    <div class="grid pt-8">
      <div class="col-4 font-semibold text-center col-offset-2 ">
        <router-link to="/order-publish-complete" class="no-underline">Make an Order</router-link>
      </div>
      <div class=" col-4 font-semibold text-center hover hover:bg-blue-50">
        <router-link to="/make-trip" class="no-underline">Make Money Traveling</router-link>
      </div>
    </div>
    <div class="grid">
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