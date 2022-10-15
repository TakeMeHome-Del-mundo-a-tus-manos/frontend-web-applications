<script>
import { OrderApiService } from "@/services/order/order-api-service";

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
      this.ordersInProgress = orders.filter(
        (order) => order.status === "In progress"
      );
      console.log(this.ordersInProgress);
    });
  },
};
</script>

<template>

  <div class="ml-6 md:ml-6 mb-5">
    <label class="text-3xl ml-3 md:text-4xl font-bold"
      >Travel In Progress</label
    >
  </div>
  <div class="progress-container ml-2 mr-4">
	<div class="scroll">

    <div class="card-container">
      <Card>
        <template #content>
          <div class="grid">
            <div class="col-5">
				<div class="inner-card-content">
					<img src="https://www.impacto.com.pe/storage/products/1643042678.jpg" alt="" class="img-card">
				</div>
			</div>
            <div class="col-7">
				 <div class="inner-card-text">

					 <h3>Benq Mobiuz Ex2510s</h3>
					 <label>1 month ago</label>
					 <label>To: Dua Lipa</label>
					 <!-- img of the store -->
					 <div class="store-card-content">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" class="img-card">
				</div>
					</div>
			</div>
          </div>
        </template>
      </Card>
    </div>
	<div class="card-container">
      <Card>
        <template #content>
          <div class="grid">
            <div class="col-5">
				<div class="inner-card-content">
					<img src="https://www.impacto.com.pe/storage/products/1643042678.jpg" alt="" class="img-card">
				</div>
			</div>
            <div class="col-7">
				 <div class="inner-card-text">

					 <h3>Benq Mobiuz Ex2510s</h3>
					 <label>1 month ago</label>
					 <label>To: Dua Lipa</label>
					 <!-- img of the store -->
					 <div class="store-card-content">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" class="img-card">
				</div>
					</div>
			</div>
          </div>
        </template>
      </Card>
    </div>

	<div class="card-container">
      <Card>
        <template #content>
          <div class="grid">
            <div class="col-5">
				<div class="inner-card-content">
					<img src="https://www.impacto.com.pe/storage/products/1643042678.jpg" alt="" class="img-card">
				</div>
			</div>
            <div class="col-7">
				 <div class="inner-card-text">

					 <h3>Benq Mobiuz Ex2510s</h3>
					 <label>1 month ago</label>
					 <label>To: Dua Lipa</label>
					 <!-- img of the store -->
					 <div class="store-card-content">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" class="img-card">
				</div>
					</div>
			</div>
          </div>
        </template>
      </Card>
    </div>

	<div class="card-container">
      <Card>
        <template #content>
          <div class="grid">
            <div class="col-5">
				<div class="inner-card-content">
					<img src="https://www.impacto.com.pe/storage/products/1643042678.jpg" alt="" class="img-card">
				</div>
			</div>
            <div class="col-7">
				 <div class="inner-card-text">

					 <h3>Benq Mobiuz Ex2510s</h3>
					 <label>1 month ago</label>
					 <label>To: Dua Lipa</label>
					 <!-- img of the store -->
					 <div class="store-card-content">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="" class="img-card">
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
.card {
  background: #ffffff;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  margin-bottom: 2rem;
}

.progress-container {
  display: flex;

  height: 45vh;
  overflow-y: scroll; 
  overflow-x:hidden;
  padding-bottom: 0;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1589A2;
}

 


.scroll{
  height: 44vh;
}

.card-container {
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 1rem 1rem;
}

.inner-card-content {
 
  width: 80%;
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

.img-card{
	max-width:100%; 
    max-height:100%;
    height: auto;
}

.inner-card-text{
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
}

@media (max-width: 768px) {
	.progress-container {
  display: flex;

  height: 80vh;
  overflow-y: scroll; 
  overflow-x:hidden;
  padding-bottom: 0;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
  height: 2px;
}
}
	
 


</style>
