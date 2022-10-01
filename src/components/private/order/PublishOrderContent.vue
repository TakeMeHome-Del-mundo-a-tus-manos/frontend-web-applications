<template class="make-order">
    <div class="flex mt-5">
        <label class="text-4xl font-bold">Make An Order</label>
        <i class="order-box ml-6" style="font-size: 2.5rem"></i>
    
    </div>

    <div class="flex mt-5">
        <div class="inline-flex">
          
            
               
            </div>    
                <InputText type="email" class="p-inputtext-url" placeholder="Product URL" 
            style="border-radius:45px; width:516px; height:56px; text-align:center"/>
            
        
        
    </div>
    
    <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Product Name </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-shopping-cart" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="text" class="p-inputtext-url" placeholder="Product" 
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>
    <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Category </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-angle-down" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="email" class="p-inputtext-url" placeholder="Select Category" 
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>
    <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Price </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-dollar" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="number" class="p-inputtext-url" placeholder="0.00 USD" 
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>

    <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Dimensions </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-gift" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="number" class="p-inputtext-url" placeholder="38x39 cm" 
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>
    


  

  <!--Continue Button-->
  <RouterLink to="/order-publish">
    <div class=" flex mt-6 trip login">
      <Button label="Publish" class="w-18rem h-3rem text-white text-lg font-bold justify-content-center">
        PUBLISH
      </Button>
    </div>
  </RouterLink>

</template>

<style>
.make-order{
    display: flex
}


</style>