<script>
import { OrderApiService } from "@/services/order/order-api-service";

export default {
  data() {
    return {
      bookedOrders: [],
      orderService: null,
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
    this.orderService.getAll().then((response) => {
      const orders = response.data;
      this.bookedOrders = orders.filter((order) => order.booked === true);
    });
  },
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
        <div class="card-container">
          <Card>
            <template #title>
              <div class="grid">
                <div class="col-5 flex align-items-end align-content-end justify-content-end pt-4">
                  <img :src="slotProps.item.iconImage" alt="" class="person-icon" />
                </div>
                <div class="col-7 pt-4">
                  {{ slotProps.item.name }}

                  <br />
                  <div class="custom-subtitle">
                    Requested {{ slotProps.item.orderDate }} ago
                  </div>
                </div>
              </div>
            </template>
            <template #content>
              <div class="grid">
                <div class="col-5 flex align-items-end align-content-end justify-content-end">
                  <div class="product-image-container">
                    <img :src="slotProps.item.productImage" alt="" class="product-image" />
                  </div>
                </div>
                <div class="col-7">
                  <div class="product-name font-bold mt-3">
                    {{ slotProps.item.orderName }}
                  </div>
                  <div class="product-details flex flex-column align-items-start mt-2 text-sm">
                    <di class="order-detail">Delivery {{ slotProps.item.orderDestination }}</di>
                    <di class="order-detail">Bring From {{ slotProps.item.orderOrigin }}</di>
                    <di class="order-detail">Before {{ slotProps.item.orderMaxDate }}</di>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Galleria>
  </div>
</template>

<style lang="scss" scoped>
.product-name {
  width: 90%;
}

.product-image-container {
  width: 90%;
  display: flex;
  margin: 0 auto;
}

.product-image {
  width: 90%;
  display: flex;
  margin: auto;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.align-content {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}

.card-title {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.person-icon {
  margin-right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.card-container {
  display: flex;
  width: 345px;
  height: 300px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  align-content: center;
}

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

@media screen and (max-width: 768px) {
  ::v-deep(.p-galleria.p-component) {
    margin: 0 auto 0 1rem !important;
  }

  ::v-deep(.p-galleria .p-galleria-item-nav){
    width: 1.7rem !important;
  }
}
</style>
