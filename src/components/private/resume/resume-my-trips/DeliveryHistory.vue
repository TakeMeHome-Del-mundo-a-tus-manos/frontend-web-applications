<script>
import { OrderApiService } from "@/services/order/order-api-service";

export default {
  data() {
    return {
      deliveredOrders: [],
      first: 0,
      totalRecords: 120,
      totalRecords2: 12,
    };
  },

  orderService: null,

  created() {
    this.orderService = new OrderApiService();
  },

  mounted() { 
    this.orderService.getCompletedOrdersByTouristId(localStorage.getItem("id")).then((response) => {
      this.deliveredOrders = response.data;
      this.totalRecords2 = this.deliveredOrders.length;
    });
  },
};
</script>

<template>
  <div class="ml-5 md:ml-6 mb-4">
    <label class="text-3xl md:text-4xl font-bold">Travel In Progress</label>
  </div>
  <div class="grid">
    <div class="paginator-container col-5 md:col-12 md:ml-0">
      <Paginator
        v-model:first="first"
        :rows="1"
        :totalRecords="totalRecords2"
        template=" PrevPageLink CurrentPageReport NextPageLink "
        class="paginator"
      >
      </Paginator>

      <div
        v-for="order in deliveredOrders.slice(first, first + 1)"
        :key="order.id"
        class="card-container"
      >
        <Card class="card">
          <template #content>
            <div class="grid">
              <div class="col-5 custom-grid">
                <div class="inner-card-content">
                  <img :src="order.productImage" alt="" class="img-card" />
                </div>
              </div>
              <div class="col-7">
                <div class="inner-card-text">
                  <h3 class="text-center">{{ order.productName }}</h3>
                  <label>{{ order.requestDate.slice(0,10)}}</label>
                  <label class="mt-2">To: {{ order.orderDestination }}</label>
                  <div class="store-card-content">
                    <img :src="order.productStore" alt="" class="img-card" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.paginator-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.custom-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: auto;
}

.paginator {
  background-color: rgba(238, 238, 238, 0.489);
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  color-scheme: dark;
}

// ::v-deep(.p-paginator.p-component.paginator){
//   width: 100%;
// }

::v-deep(.p-paginator-icon.pi){
  color: #264986;
}
 
  
.card {
  background: #fdfdfd;
}

.card-container {
  display: flex;
  flex-direction: column;
  width: 98%;
  margin: 0.5rem 1rem;
}

.inner-card-content {
  width: 60%;
  margin: auto;
}

.p-card .p-card-body {
  padding: 0 !important;
}

.store-card-content {
  display: flex;
  flex-direction: column;
  width: 15%;
  margin: 1rem;
}

.inner-content {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.img-card {
  max-width: 100%;
  max-height: 100%;
  height: auto;
}

.inner-card-text {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .card-container {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0.2rem 0.3rem;
  }

  .store-card-content {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 1rem;
  }

  .inner-card-content {
    width: 90%;
    margin: auto;
  }

  ::v-deep(.p-paginator.p-component.paginator) {
  width: 90% !important;
  padding: 0.5rem 0;
}

::v-deep(.paginator-container){
  width: 99% !important;
}

}
</style>
