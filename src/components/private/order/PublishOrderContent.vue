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
        name: "",
        orderURL: "",
        category: "",
        price: "",
        dimensions: "",
        orderOrigin:"",
        orderDestination:"",
    },
      
  };
  },
  methods: {
        validate() {
            if (this.name == "" || this.orderURL == ""||this.category == "" || this.price == ""||this.dimensions == "" ) {
                alert("Please fill in all the fields");
            } else {
                this.link="/make-order";
                //Convertir a JSON
                this.order.name = this.name;
                this.order.orderURL = this.orderURL;
                this.order.category = this.category.name;
                this.order.price = this.price;
                this.order.dimensions = this.dimensions
                this.order.orderOrigin = sessionStorage.getItem("orderOrigin");
                this.order.orderDestination = sessionStorage.getItem("orderDestination");
                
                
                console.log(this.order)
                //sessionStorage.setItem("user", JSON.stringify(user));
                this.OrderApiService.create(this.order);
                console.log(order);
                //sessionStorage.clear();
                alert("Success!")
            }
        },
        },
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