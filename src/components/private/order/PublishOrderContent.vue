<template class="make-order">
    <div class="flex mt-5">
        <label class="text-4xl font-bold">Make An Order</label>
        <i class="order-box ml-6" style="font-size: 2.5rem"></i>
    
    </div>

    <div class="flex mt-5">
        <div class="inline-flex">
          
            
               
            </div>    
                <InputText type="email" class="p-inputtext-url" placeholder="Product URL" v-model="orderURL"
            style="border-radius:45px; width:516px; height:56px; text-align:center"/>
            
        
        
    </div>
    
    <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Product Name </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-shopping-cart" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="text" class="p-inputtext-url" placeholder="Product" v-model="name"
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>
    
    <!--Product Category-->
    <div class="flex mt-5">
        
        <span class="inline-flex"> 
            <label class="data-product" style="width:199px; height:24px"> Category </label>
            <div class="p-input-icon-left input-span flex">
            <pv-dropdown class="drop-down" v-model="category" :options="Category" optionLabel="name" placeholder="Category" style="border-radius:45px; width:341px; height:58px; text-align:center">
                <template #value="slotProps">
                <div class="country-item" v-if="slotProps.value">
                    <span>{{ slotProps.value.name }}</span>
                </div>
                <span v-else>
                {{ slotProps.placeholder }}
                </span>
                </template>

                <template #option="slotProps">
                    <div class="country-item">
                    <span>{{ slotProps.option.name }}</span>
                    </div>
                </template>
            </pv-dropdown>
            </div>
      </span>
    </div>
    <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Price </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-dollar" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="number" class="p-inputtext-url" placeholder="0.00 USD" v-model="price"
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>

    <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Dimensions </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-gift" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="number" class="p-inputtext-url" placeholder="38x39 cm" v-model="dimensions"
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>
    

  <!--Continue Button-->
  <RouterLink :to="link">
    <div class=" flex mt-6 trip login">
      <Button label="Publish" class="w-18rem h-3rem text-white text-lg font-bold justify-content-center" v-on:click="validate()">
        PUBLISH
      </Button>
    </div>
  </RouterLink>

</template>
<script>
import { OrderApiService } from "../../../services/order/order-api-service";
export default {

  data() {
    this.OrderApiService = new OrderApiService();
    return {
        
        id:"",
        orderURL: "",
        name: "",
        category: "",
        price: "",
        dimensions: "",
        link:"",

      selectedCategory: null,
      Category: [
        {name: 'Public Utilities'},
        {name: 'Finance'},
        {name: 'Miscellaneous'},
        {name: 'Capital Goods'},
        {name: 'Health Care'},
        {name: 'Consumer Services'},
        {name: 'Consumer Non-Durables'}
      ],
     order:{
        orderCode: "", // Random numero
        originCountry: "", // si
        userId: 0 , // si
        clientId: 0, // si
        orderDestination: "", // si
        requestDate: "", // como obtener date current javascript
        deadlineDate: "",  // como obtener date current javascript
        currentProcess: 0, //
        orderStatusId: 0 //
      },
      product: {
        name: "",  //si
        productUrl: "", //si
        price: 0, //si
        store: "",
        currency: "",
        orderId: 0 //si
      }
  };
  },
  methods: {
        validate() {

          // 1. Cración de la orden
          this.order.orderCode = GeneratorOrderCode(5);
          this.order.originCountry = sessionStorage.getItem("orderOriginCode");
          this.order.orderDestination = sessionStorage.getItem("orderDestinationCode");
          this.order.userId =  localStorage.getItem("id")
          this.order.clientId = localStorage.getItem("id")
          this.order.requestDate = new Date().toISOString()
          this.order.deadlineDate = new Date().toISOString()
          this.order.currentProcess = 2 // hacerlo dinamico
          this.order.orderStatusId = 4  // hacerlo dinamico

          console.log(this.order)

          this.OrderApiService.createOrder(this.order).then(response => {
               console.log("Responde from backend");
               console.log(response)
              console.log("id de orden")
              console.log(response.data.id)

            // 2. Creación de un producto a la orden
              this.product.name = this.name
              this.product.productUrl = this.orderURL
              this.product.price = this.price
              this.product.store = "TakeMeHome"
              this.product.currency = "USD"
              this.product.orderId = response.data.id
              this.OrderApiService.createOrderProduct(this.product)

              alert("La orden se guardó exitosamente")

              }
          )
        },
        },
}

    function GeneratorOrderCode(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

</script>

<style>
.make-order{
    display: flex;
    margin-bottom: 5vw;
    overflow: hidden
}
.pv-dropdown {
    width: 14rem;
}


</style>