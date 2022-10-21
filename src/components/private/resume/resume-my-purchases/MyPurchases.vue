<template>
    <div class="grid">
    
        <div class="col-6">
          <h2>My Purchase History</h2>
          <div class="Boxes" v-for="product in recent_orders.slice(0,2)" :key="product.id"> 
            <div class="box1 p-4 shadow-1 border-round w-full lg:col-6">
              <img class="home-img" id="PhotoIphone" alt="PhotoIphone" :src="product.product_url">
              <center>
                <aside class="Subtitle1">{{product.name}}</aside>
                <aside class="time1">{{product.time_before}}</aside>
                <img class="Apple2 home-img" alt="Apple2" :src="product.store_url">
              </center>
            </div>
          </div>
        </div>
    
    </div>
   
</template>

<script>
import { UserApiService } from "@/services/user-api-service";

export default {
  name: 'mypurchase',
  components: {

  },
  data: function () {
    return {
      name: "",
      photo_src:"",
      popular_stores:[],
      recent_orders:[]
    }
  },
  created(){
    this.name = localStorage.getItem("nombre");
    this.photo_src = localStorage.getItem("photo_url");

    this.purchaseUserApiService = new UserApiService()
    
    this.purchaseUserApiService.getRecentOrders(localStorage.getItem("id")).then((response) => {
      this.recent_orders = response.data;
      console.log(this.recent_orders)
    });
  },
  methods: {

  }

}
</script>