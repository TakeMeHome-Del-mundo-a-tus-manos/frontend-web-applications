<template>

  <center>
    <div  id="img_home" class="home_account">
      <div class="card-1 p-4 shadow-0 border-round w-100 lg:w-20 Home inline-block">
        <!--DESCOMENTAR-->
        <!-- <img class="UserPhoto home-img" alt="UserPhoto" :src="this.photo_src">
        <aside class="text5">Hi, {{ this.name }}!.</aside>

        <div class="popular_stores p-4 shadow-0 border-round w-auto lg:w-40 Home ">
          <aside class="text3 font-medium line-height-3 ">Popular Stores</aside>
          <div class="box3 p-4 shadow-0 border-round w-auto lg:w-20" v-for="store in popular_stores.slice(0,2)" :key="store.id" >
            <a :href="store.link" target="_blank"><img class="Walmart home-img" alt="Walmart" :src="store.image_url"></a>
          </div>
          <div class="box4 p-4 shadow-0 border-round w-auto lg:w-20" v-for="store in popular_stores.slice(2,5)" :key="store.id" >
            <a :href="store.link" target="_blank"><img class="Walmart1 home-img" alt="Walmart" :src="store.image_url"></a>
          </div>
        </div> -->

      </div>

      <div class="card-2 p-4 shadow-0 border-round w-100 lg:w-20 Home inline-block">
        <div style="text-align: center;"><a href="/my-profile" ><aside class="text2 font-medium line-height-3">My account</aside></a></div>
        <Button label="Order Request" class="w-auto home-button" ></Button>
        <div class="box_blank p-4 shadow-0 border-round w-auto lg:w-20 Home"> </div>
        <div class="recent_orders p-4 shadow-0 border-round w-auto lg:w-20 Home">
          <aside class="text3 font-medium line-height-3">Recent Orders</aside>
          <div class="Boxes" v-for="product in recent_orders.slice(0,2)" :key="product.id">
            <div class="box1 p-4 shadow-1 border-round w-full lg:w-20">
              <img id="Iphone" alt="product image" :src="product.productUrl">
              <center>
                <aside class="Subtitle1">{{product.name}}</aside>
                <aside class="time1">{{product.order.deadlineDate}}</aside>
                <img class="Apple2 home-img" alt="Apple2" :src="product.store">
              </center>
            </div>
          </div>
        </div>

      </div>
    </div>
  </center>

  <center>

  </center>

</template>


<style scoped>

.Home{
  font-family: Poppins;
}
.home_account{
  margin-top:-30px;
  margin-bottom:50px;
  height:900px;
  width:1000px;
}
.popular_stores{
  margin-top:80px;
  height:500px;
  width:800px;

}
.recent_orders{
  float:top;

}
.home-button{
  background-image: linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%);
  left: 300px;
  top: -30px;
}
.inline-block{
  display: inline-block;
}
.Home input{
  width: 100%;
}
.UserPhoto {
  float:left;
  height: 120px;
  width:120px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #999
}
#img_home img{
  width: 120px;
  box-shadow: 0px 0px 1px #999;
  transition:all 300ms;
}
.home-img:hover{
  transform: scale(1.2,1.2);
}
.text2 {
  margin-top:20px;
  font-weight: bold;
  text-decoration: underline black;
  font-size:15px;
}

.text3 {
  color:#08445C;
  font-weight: bold;
  font-size:25px;
  border-left:3px solid #2794E3;
  left:50%;
}
   .text5{
  font-size:40px;
  right:200px;
  font-weight: bold;
}
   .time1{
  font-size:12px;
  text-decoration: underline black;
}
.Boxes {
  width: 400px;
  height: 150px;
}

.box_blank{
  width: 500px;
  height: 62px;
}
.Subtitle1{
  font-weight: bold;
  margin: 10px auto;

}
#Iphone{
  top:-10px;
  width: 100px;
  height: 100px;
  float:left;
}
.Apple2{
  height: 30px;
  width: 150px;
  box-shadow: 0px 0px 0px #999;
}
.box1{
  width: 130px;
  height: 150px;
  margin-top:75px;

}
.box3{
  float:left;
  margin-top:50px;
  width: 20px;
  height: 140px;
  box-shadow: 0px 0px 0px #999;


}
.box4{
  float:right;
  margin-bottom:380px;
  margin-top:-330px;
  margin-left:100px;
  width: 20px;
  height: 140px;
  box-shadow: 0px 0px 0px #999;
}

.card-1{
  margin-top:10px;
  width: 430px;
  height:120px;
}
.card-2{
  margin-top:0px;
  float: right;
  width: 500px;
  height:400px;
}
.Walmart1{
  height: 100px;
  float:left;
}
.Walmart{
  height: 100px;
  float:left;
}

.home_account{
  margin-top:20px;
}

</style>


<script>
import { UserApiService } from "../../services/user-api-service";

export default {
  name: 'home',
  components: {

  },
  data: function () {
    return {
      homeUserApiService: null,
      name: "",
      photo_src:"",
      popular_stores:[],
      recent_orders:[]
    }
  },
  created(){
    this.name = localStorage.getItem("nombre");
    this.photo_src = localStorage.getItem("photo_url");

    this.homeUserApiService = new UserApiService()
    //DESCOMENTAR
    // this.homeUserApiService.getPopularStores().then((response) => {
    //   this.popular_stores = response.data;
    //   console.log(this.popular_stores)
    // });

    this.homeUserApiService.getRecentOrders(localStorage.getItem("id")).then((response) => {
      this.recent_orders = response.data;
      console.log(this.recent_orders)
    });
  },
  methods: {

  }

}
</script>