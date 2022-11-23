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
        <span class="flex align-items-center justify-content-between w-6">
            <label class="data-product" style="width:199px; height:24px"> Product Name </label>
            <div class="p-input-icon-left flex">
                <i class="pi pi-shopping-cart" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="text" class="p-inputtext-url" placeholder="Product" v-model="name"
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>
    
    <!--Product Category-->
    <div class="flex mt-5">
        
        <span class="flex align-items-center justify-content-between w-6"> 
            <label class="data-product" style="width:199px; height:24px"> Category </label>
            <div class="p-input-icon-left flex">
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
        <span class="flex align-items-center justify-content-between w-6">
            <label class="data-product" style="width:199px; height:24px"> Price </label>
            <div class="p-input-icon-left flex">
                <i class="pi pi-dollar" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="number" class="p-inputtext-url" placeholder="0.00 USD" v-model="price"
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div>

    <div class="flex mt-5">
        
        <span class="flex align-items-center justify-content-between w-6"> 
            <label class="data-product" style="width:199px; height:24px"> Currency </label>
            <div class="p-input-icon-left flex">
            <pv-dropdown class="drop-down" v-model="currency" :options="Currency" optionLabel="name" placeholder="Currency" style="border-radius:45px; width:341px; height:58px; text-align:center">
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

    <!-- <div class="flex mt-5">
        <span class="inline-flex">
            <label class="data-product" style="width:199px; height:24px"> Deadline date </label>
            <div class="p-input-icon-left input-span flex">
                <i class="pi pi-calendar" style=" top:50.37%; bottom:46.78%; left:15%; right:50%"></i>
                <InputText type="number" class="p-inputtext-url" placeholder="38x39 cm" v-model="deadlineDate"
                style="border-radius:45px; width:341px; height:58px; text-align:center"/>
            </div>
        </span>
    </div> -->
    <div class="flex mt-5">
        <span class="flex align-items-center justify-content-between w-6">
            <label class="data-product" style="width:199px; height:24px"> Deadline date </label>
            <div class="p-input-icon-left input-span flex">
                <pv-calendar inputId="icon" v-model="deadlineDate" :showIcon="true" placeholder="Pick a date" />
            </div>
        </span>
    </div>
    <!-- <div class="field col-12 md:col-4">
                <label for="datetemplate">Date Template</label>
                <pv-calendar inputId="datetemplate" v-model="date12">
                    <template #date="slotProps">
                        <strong v-if="slotProps.date.day > 10 && slotProps.date.day < 15" class="special-day">{{slotProps.date.day}}</strong>
                        <template v-else>{{slotProps.date.day}}</template>
                    </template>
                </pv-calendar>
            </div> -->
    

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
        deadlineDate: "",
        link:"",
        currency:"",

      selectedCategory: null,
      Category: [
        {name: 'Public Utilities'},
        {name: 'Finance'},
        {name: 'Miscellaneous'},
        {name: 'Capital Goods'},
        {name: 'Health Care'},
        {name: 'Transportation'},
        {name: 'Energy'},
        {name: 'Technology'},
        {name: 'Basic Industries'},
        {name: 'Consumer Services'},
        {name: 'Consumer Non-Durables'},
        {name: 'Consumer Durables'}
      ],
      Currency: [
        {name: 'PEN'},
        {name: 'USD'},
        {name: 'EUR'},
        {name: 'GBP'},
        {name: 'JPY'},
        {name: 'CAD'},
        {name: 'AUD'},
        {name: 'CHF'},
        {name: 'CNY'},
        {name: 'SEK'},
        {name: 'NZD'},
        {name: 'MXN'},
        {name: 'SGD'},
        {name: 'HKD'},
        {name: 'NOK'},
        {name: 'KRW'},
        {name: 'TRY'},
        {name: 'RUB'},
        {name: 'INR'},
        {name: 'BRL'},
        {name: 'ZAR'},
        {name: 'TWD'}
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
          this.order.deadlineDate = this.deadlineDate.toISOString()
          this.order.currentProcess = 0 // hacerlo dinamico
          this.order.orderStatusId = 1  // hacerlo dinamico

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
              this.product.currency = this.currency.name
              this.product.orderId = response.data.id
              console.log(this.product)
              this.OrderApiService.createOrderProduct(this.product);

              alert("La orden se guardó exitosamente")

              }
          )
        },
        },
}

    function GeneratorOrderCode(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

</script>

<style scoped>
.make-order{
    display: flex;
    margin-bottom: 5vw;
    overflow: hidden
}
.pv-dropdown {
    width: 14rem;
}

.pv-dropdown .p-dropdown-trigger {
    width: 100%;
}

.p-calendar-w-btn {
    border-radius: 45px;
}

.p-calendar-w-btn .p-inputtext {
  text-align: center;
}

@media screen and (min-width: 768px){
  .md\:col-4 {
    flex: 0 0 auto;
    padding: 0.5rem;
    width: 100%;
}}
</style>