<template>
    <div class="grid">
    
        <div class="col-6">
          <h2>My Purchase History</h2>
          <div class="Boxes" v-for="product in recent_orders.slice(0,2)" :key="product.id"> 
            <div class="box1 p-4 shadow-1 border-round w-full lg:col-6">
              <img class="home-img" id="PhotoIphone" alt="PhotoIphone" :src="product.productImage">
              <center>
                <aside class="Subtitle1">{{product.productName}}</aside>
                <aside class="time1">{{product.requestDate.slice(0, 10)}}</aside>
                <img class="Apple2 home-img" alt="Apple2" :src="product.productStore">
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
      popular_stores:[],
      recent_orders:[]
    }
  },
  created(){ 

    this.purchaseUserApiService = new UserApiService()
    
    this.purchaseUserApiService.getRecentOrders(localStorage.getItem("id")).then((response) => {
      this.recent_orders = response.data;
     
    });
  },
  methods: {

  }

}
</script>

<style>
.home-img{
  width: 50px;
}
</style>
