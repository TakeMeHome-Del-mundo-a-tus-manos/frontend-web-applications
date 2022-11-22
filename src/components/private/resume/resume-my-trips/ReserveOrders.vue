<script>
import { OrderApiService } from "@/services/order/order-api-service";
import {UserApiServiceJSON} from "@/services/user-api-service-json";
export default {
  
  data() {
     
    return {
      myHashNames: null,
      myHashPictures: null,
      bookedOrders: [],
      users: [],
      orderService: null,
      userService: null,
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 3,
        },
        {
          breakpoint: "600px",
          numVisible: 2,
          numScroll: 2,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  
  created() {
    this.orderService = new OrderApiService();
    this.userService = new UserApiServiceJSON();
    this.users = new Array(); 
    this.myHashNames = new Map();
    this.myHashPictures = new Map();
  },
  mounted() { 

    //bookeOrders have the id 2
    this.orderService.getByOrderStatusIdAndUserId(3, localStorage.getItem("id")).then((response) => {
      this.bookedOrders = response.data;
      
      console.log(this.bookedOrders);

      // call api with methid getProductsByOrderId and get the product name and picture, then hash it, the key is the order id and the value is the product name and picture
      for (let i = 0; i < this.bookedOrders.length; i++) {
        this.orderService.getProductByOrderId(this.bookedOrders[i].id).then((response) => {
          this.myHashNames.set(this.bookedOrders[i].id, response.data.name);
          this.myHashPictures.set(this.bookedOrders[i].id, response.data.productUrl);

          console.log(this.myHashPictures);

        });
      }
 
    });
  }
};
</script>

<template>
  <div class="content-section implementation">
    <div class="ml-6 mb-5">
      <label class="text-4xl font-bold">Reserved Orders</label>
    </div>

    <Galleria :value="bookedOrders" :circular="true"
      containerStyle="max-width: 640px; margin: 0 auto; margin-left: 5rem;" :showItemNavigators="true"
      :showThumbnails="false">
      <template #item="slotProps">

        <div class="product-item">
            <div class="product-item-content ">
              <div class="grid flex align-content-between align-items-center">
                <div>
                  <img :src="slotProps.item.user.photoUrl" class="person-icon"/>
                </div>
                <div class="ml-4">
                  <div class="font-bold">{{ slotProps.item.user.fullName}}</div>
                  <div class="text-sm text-left">Requested {{slotProps.item.requestDate.slice(0, 10)}}</div>
                </div>
              </div>

              <div class="grid flex align-content-between mt-1">
                <div class="col-6 flex align-items-center justify-content-center align-content-center flex-column">
                  <div class="product-image-container">

                    <img :src="myHashPictures.get(slotProps.item.id)" class="person-product"/>
                  </div>
                </div>
                <div class="col-6 text-left">
                  <div class="font-bold">{{ myHashNames.get(slotProps.item.id) }}</div>
                  <div class="text-sm mt-2">
                    <div class="mt-1">Delivery {{ slotProps.item.orderDestination }}</div>
                    <div class="mt-1">Bring From {{ slotProps.item.originCountry }}</div>
                    <div class="mt-1">Data {{ slotProps.item.deadlineDate.slice(0, 10)  }}</div>
                  </div>
                </div>
              </div>
              <div class="align-items-center">
                <i class="pi pi-comments text-primary" style="font-size: 2rem"></i>
              </div>

            </div>

          </div>


      </template>
    </Galleria>
  </div>
</template>

<style lang="scss" scoped>
 
::v-deep(.p-card .p-card-title) {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}
::v-deep(.p-card .p-card-title .custom-subtitle) {
  font-size: 1rem;
  font-weight: 100;
  margin-bottom: 0.5rem;
  color: #7a7a7a;
}
::v-deep(.p-galleria-item-next.p-galleria-item-nav.p-link) {
  top: 40%;
}
::v-deep(.p-galleria-item-prev.p-galleria-item-nav.p-link) {
  top: 40%;
}
::v-deep(.p-galleria-item-next-icon.pi.pi-chevron-right) {
  color: #264986;
}
::v-deep(.p-galleria-item-prev-icon.pi.pi-chevron-left) {
  color: #264986;
}
.product-item {
  .product-item-content {
    border: 1px solid var(--surface-border);
    border-radius: 5px;
    margin: 0.3rem;
    text-align: center;
    padding: 2rem 0;
    box-shadow: 2px 0 1px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 350px;
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
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
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
@media screen and (max-width: 768px) {
  ::v-deep(.p-galleria.p-component) {
    margin: 0 auto 0 0.2rem !important;
  }
  ::v-deep(.p-galleria .p-galleria-item-nav){
    width: 1.7rem !important;
  }
  .product-item {
  .product-item-content {
    border: 1px solid var(--surface-border);
    border-radius: 5px;
    margin: 0.3rem;
    text-align: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 1.2rem;
    box-shadow: 2px 0 1px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .product-image-container{
    width: 110px;
    height: 130px;
    margin-left: 0;
  }
 }
}
</style>