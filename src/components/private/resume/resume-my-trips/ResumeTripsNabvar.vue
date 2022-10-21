<script>
</script>

<template>

 <div class="grid">

 <div class="col-1 pt-5 ml-3 md:ml-0 md:pt-8 flex align-items-start">
    <div class="vl ml-4"></div>
 </div> 

  <div class="col-8 ml-3 md:col-2 md:ml-0">

    <div class="grid pt-5 md:pt-8 ">
      <div class=" font-semibold text-center hover:bg-blue-50">
        <router-link to="/resume/my-trips" class="no-underline">Travel in progress</router-link>
      </div>
    </div>
    <div class="grid pt-4">      
      <div class=" font-semibold text-center hover hover:bg-blue-50 ">
        <router-link to="/resume/reserved-orders" class="no-underline">Reserved orders</router-link>
      </div>
    </div>
    <div class="grid pt-4">      
      <div class=" font-semibold text-center hover hover:bg-blue-50 ">
        <router-link to="/resume/delivery-history" class="no-underline">Delivery history</router-link>
      </div>
    </div>
 
  </div>
  
  <!-- este estilo de grid tendra el componente que se abrira por las rutas -->
  <!-- el reponsive va de menor a mayor -->
     
      <div class="col-0  md:col-9 pt-4">
        <router-view></router-view>
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

.vl {
  border-left: 3px solid #1589A2;
  height: 110px;
}

@media screen and (max-width: 1024px) {
 .inner-content {
    flex: 0 0 auto;
    
    width: 75%;
 }
}
  
 

</style>