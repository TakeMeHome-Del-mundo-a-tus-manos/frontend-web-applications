<template>
    <div class="main-content-cp">
        <div>
            <h2>Current Process</h2>
        </div>

        <div class="card-pd row card-cp" v-for="process in processes">
            <div>
                <Knob v-model="process.currentProcess" 
                :size="200" 
                :min="0" 
                :max="100" 
                readonly 
                valueTemplate="{value}%"
                valueColor="#264986"
                range-color="#89aae2"
                />
                <div class="row">
                    <p><b>Order ID:</b></p>
                    <p class="accent-info"><b>{{process.orderCode}}</b></p>
                </div>
                <Button label="Search" class="confirm" v-on:click="goMap(process.id)"></Button>
 
            </div>

            <div class="product">
                <div class="card-image">    
                    <img alt="user header"
                    :src="process.productImage">
                </div>
                    <div class="card-title">
                    <h3>{{process.productName}}</h3>
                </div>
            </div>

        </div>
    </div>

</template>

<script>

import { MyOrdersApiService } from "../../../services/my-orders/myOrders-api-service";

export default {
    name: "CurrentProcess",
    data() {
        return {
            myOrdersApiService: new MyOrdersApiService(),
           value: 50,
           processes: null,
        }
    },
    mounted() {
        this.myOrdersApiService.getCurrentProcesses().then((response) => {
            this.processes = response.data;
        });
    },
    methods: {
        goMap(id) {
            this.$router.push({ name: 'current-process-map', params: { orderCode: id } });
        }
    }

}
</script>

<style>

.column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.main-content-cp {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
}

.main-content-cp .card-pd{
    width: 50vw;
    display: flex;
    justify-content: space-between;

}

.main-content-cp .row {
    justify-content: space-between;
}

.main-content-cp .row .accent-info {
    justify-content: left;
    margin-left: 5px;
}

.main-content-cp .row p {
    justify-content: right;
    margin-right: 5px;
} 

.main-content-cp .card-title h3{
    text-align: center;
    text-transform: uppercase;
}

.main-content-cp .product{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 1vw 0 5vw;; 
}

.main-content-cp .card-cp{
    margin: 2vh 0;
}

</style>