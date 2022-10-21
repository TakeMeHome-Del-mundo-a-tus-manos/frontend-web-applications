<script>
import {OrderApiService} from "@/services/order/order-api-service";

export default {

  data() {
    return {
      bookedOrders: [],
      orderService: null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
        },
        {
          breakpoint: '600px',
          numVisible: 2,
          numScroll: 2
        },
        {
          breakpoint: '480px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    };
  },
  created() {
    this.orderService = new OrderApiService();
    this.orderService.getAll().then((response) => {
      const orders = response.data;
      this.bookedOrders = orders.filter(order => order.booked === true);
    });
  }
}

</script>

<template>
  <div class="content-section implementation">
    <div class="ml-6 mb-5">
        <label class="text-4xl font-bold">Reserved Orders</label>
    </div>
    <div class="card">
      <pv-carousel :value="bookedOrders" :numVisible="2" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content ">
              <div class="grid flex align-content-between align-items-center">
                <div>
                  <img :src="slotProps.data.iconImage" class="person-icon"/>
                </div>
                <div class="ml-4">
                  <div class="font-bold">{{ slotProps.data.name }}</div>
                  <div class="text-sm text-left">Requested {{ slotProps.data.orderDate }} ago</div>
                </div>
              </div>

              <div class="grid flex align-content-between mt-1">
                <div class="col-6 align-items-center">
                  <img :src="slotProps.data.productImage" class="person-product"/>
                  <img :src="slotProps.data.storeImage" class="person-store">
                </div>
                <div class="col-6 text-left">
                  <div class="font-bold">{{ slotProps.data.orderName }}</div>
                  <div class="text-sm mt-2">
                    <div class="mt-1">Delivery {{ slotProps.data.orderDestination }}</div>
                    <div class="mt-1">Bring From {{ slotProps.data.orderOrigin }}</div>
                    <div class="mt-1">Before {{ slotProps.data.orderMaxDate }}</div>
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
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .person-product {
    width: 140px;
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

  /*
    .container {
      width: 200px;
      height: 120px;
    }

      Resize images
    .container img {
      width: 100%;
      height: auto;
    }
  */


}


</style>