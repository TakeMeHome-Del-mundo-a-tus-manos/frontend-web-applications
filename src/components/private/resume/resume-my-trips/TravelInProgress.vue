
<script>

import {OrderApiService} from "@/services/order/order-api-service";

export default {

  data() {
    return {
      ordersInProgress: [],
      
    };
  },

  orderService: null,
  
  created() {
    this.orderService = new OrderApiService();
  },

   mounted() {
    this.orderService.getAll().then((response) => {
      const orders = response.data;
      this.ordersInProgress = orders.filter(order => order.status === 'In progress');
      console.log(this.ordersInProgress);
    });


  },
}

</script>


<template>
  <div class="ml-6 md:ml-6 mb-5">
        <label class="text-3xl ml-3 md:text-4xl font-bold">Travel In Progress</label>
    </div>
  <div class="card">
    <DataView :value="ordersInProgress" layout="list" :paginator="true" :rows="2" class="flex justify-content-center align-items-center align-content-center flex-column ">
      <template #list="slotProps">
        <div class="col-8 col-offset-2  md:col-12 md:col-offset-0 ">
          <div class="product-list-item ">
             <div class="col-6 flex justify-content-center">
               <img :src="slotProps.data.productImage" :alt="slotProps.data.orderName" />
             </div>
              <div class="product-list-detail col-6 text-xs md:text-base ">
                <div class="col-10 col-offset-2 flex justify-content-center">
                   <b>{{ slotProps.data.orderName }}</b>
                </div>
                <div class="col-10 col-offset-2 flex justify-content-center">
                    <b>{{ slotProps.data.orderDate }}  ago</b>
                </div>
                <div class="col-10 col-offset-2 flex justify-content-center">
                    To: <b>{{ slotProps.data.name }}</b>
                </div>
                <div class="col-10 col-offset-2 flex justify-content-center pl-6 ">
                  <img :src="slotProps.data.storeImage" style="width: 3rem" />
                </div>
              </div>   
          </div>
        </div>
      </template>
      
    </DataView>
  </div>
</template>


<style lang="scss" scoped>


.card {
    background: #ffffff;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    border-radius: 4px;
    margin-bottom: 2rem;
}

::v-deep(.product-list-item) {
	display: flex;
	align-items: center;
	padding: 1rem;
	width: 100%;

	img {
		width: 150px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
		margin-right: 2rem;
	}

	.product-list-detail {
		flex: 1 1 0;
     
	}

	.p-rating {
		margin: 0 0 .5rem 0;
	}

	.product-price {
		font-size: 0.5rem;
		font-weight: 600;
		margin-bottom: .5rem;
		align-self: flex-end;
	}

	.product-list-action {
		display: flex;
		flex-direction: column;
	}

	.p-button {
		margin-bottom: .5rem;
	}
 

}

</style>
