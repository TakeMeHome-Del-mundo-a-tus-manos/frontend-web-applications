<script>
import {OrderApiService} from "@/services/order/order-api-service";
import {UserApiServiceJSON} from "@/services/user-api-service-json";

export default {

  data() {
    return {
      bookedOrders: [],
      orderService: null,
      userService: null,
      myHash: null,
      myHashProduct: null,
      users: [],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '1245px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '915px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    };
  },
  created() {
    this.orderService = new OrderApiService();
    this.userService = new UserApiServiceJSON();
    this.users = new Array(); 
    this.myHash = new Map();
    this.myHashProduct = new Map();


    //Booked orders have de id 2

    this.orderService.getByOrderStatusIdAndUserId(3, localStorage.getItem("id")).then((response) => {
      this.bookedOrders = response.data;
      console.log(this.bookedOrders);

      //hash from booked orders, key is client id and value is client
      for (let i = 0; i < this.bookedOrders.length; i++) {
        this.myHash.set(this.bookedOrders[i].clientId, this.bookedOrders[i].client);
      }
      
      for (let i = 0; i < this.bookedOrders.length; i++) {
        this.orderService.getProductByOrderId(this.bookedOrders[i].id).then((response) => {
          this.myHashProduct.set(this.bookedOrders[i].id, response.data);
        });
      }

    });
  }
}
</script>

<template>
  <div class="content-section implementation">
    <div class="card">
      <pv-carousel :value="bookedOrders" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content ">
              <div class="grid flex align-content-between align-items-center">
                <div>
                  <img :src="myHash.get(slotProps.data.clientId).photoUrl" class="person-icon"/>
                </div>
                <div class="ml-4">
                  <div class="font-bold">{{ myHash.get(slotProps.data.clientId).fullName}}</div>
                  <div class="text-sm text-left">Requested {{slotProps.data.requestDate.slice(0, 10)}}</div>
                </div>
              </div>

              <div class="grid flex align-content-between mt-2">
                <div class="col-6 flex align-items-center justify-content-center align-content-center flex-column">
                  <div class="product-image-container">

                    <img :src="myHashProduct.get(slotProps.data.id).productUrl" class="person-product"/>
                    <img :src="myHashProduct.get(slotProps.data.id).store" class="person-store">
                  </div>
                </div>
                <div class="col-6 text-left">
                  <div class="font-bold">{{ myHashProduct.get(slotProps.data.id).name  }}</div>
                  <div class="text-sm mt-2">
                    <div class="mt-1">Delivery {{ slotProps.data.orderDestination }}</div>
                    <div class="mt-1">Bring From {{ slotProps.data.originCountry }}</div>
                    <div class="mt-1">Before {{ slotProps.data.deadlineDate.slice(0, 10) }}</div>
                  </div>
                </div>
              </div>
              <div class="align-items-center">
                <i class="pi pi-comments text-primary" style="font-size: 2rem"></i>
              </div>

            </div>

          </div>
        </template>
      </pv-carousel>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.product-item {
  .product-item-content {
    border: 1px solid var(--surface-border);
    border-radius: 5px;
    margin: 0.3rem;
    text-align: center;
    padding: 2rem 0;
    box-shadow: 2px 0 1px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .person-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .product-image-container{
    width: 130px;
    height: 150px;
    margin-left: 1rem;
  }
  .person-product {
    max-width: 85%;
    max-height: 85%;
  }

  .person-store {
    width: 50px;
    height: 20px;
  }

  .message-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='44' height='44' fill='none' viewBox='0 0 44 44'%3e%3cpath fill='%23264986' d='M22.049 0C9.627 0 0 9.079 0 21.342c0 6.414 2.636 11.957 6.926 15.786.74.666.588 1.052.714 5.166a1.767 1.767 0 0 0 2.473 1.558c4.694-2.067 4.754-2.23 5.55-2.013C29.26 45.58 44 36.879 44 21.342 44 9.079 34.472 0 22.049 0Zm13.239 16.424-6.476 10.252a3.315 3.315 0 0 1-4.782.881l-5.153-3.856a1.33 1.33 0 0 0-1.596 0l-6.952 5.273c-.928.704-2.144-.408-1.518-1.39l6.476-10.253a3.313 3.313 0 0 1 4.782-.88l5.15 3.855a1.33 1.33 0 0 0 1.597 0l6.956-5.268c.926-.708 2.141.403 1.516 1.386Z'/%3e%3c/svg%3e");
    width: 44px;
    height: 44px;

    &--Vector {
      background-position: 0 0;
    }
  }

}


::v-deep(.p-carousel-next){
 background: #1589A2 !important;
}

::v-deep(.p-carousel-prev){
 background: #1589A2 !important;
}



</style>