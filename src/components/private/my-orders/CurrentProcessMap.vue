<template>
    <div class="main-content-cp cppp">
        <div>
            <h2>Current Process</h2>
        </div>
        <div class="card-pd row card-cp">
            <div class="card-cpp">
                <div class="product">
                    <div class="card-image">
                        <img alt="user header"
                            :src="process.productImage">
                    </div>
                    <div class="card-title">
                        <h4>{{process.productName}}</h4>
                    </div>
                    <div class="row">
                        <p><b>Order ID:</b></p>
                        <p class="accent-info"><b>{{process.orderCode}}</b></p>
                    </div>
                    <div class="message">
                        <span>
                            Your order will arrive soon. You can track your order in the map.
                        </span>
                    </div>
                </div>
            </div>

            <div class="map">
                <!-- <img src="https://bit.ly/3S3mT3K" alt=""> -->
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70063.72429167919!2d-77.11587384888088!3d-12.096384239073645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c96528ea4a55%3A0x85a66d70e40870dd!2sUPC%20-%20Campus%20San%20Miguel!5e0!3m2!1ses-419!2spe!4v1665873291564!5m2!1ses-419!2spe" 
                    height="350" 
                    style="border:0;" 
                    allowfullscreen="false" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </div>
</template>

<script>

import { MyOrdersApiService } from "../../../services/my-orders/myOrders-api-service";

export default {
    name: "CurrentProcessMap",
    data() {
        return {
            myOrdersApiService: new MyOrdersApiService(),
            process: {}
        }
    },
    created() {
        this.myOrdersApiService.getCurrentProcess(this.$route.params.orderCode).then((response) => {
            this.process = response.data;
        });
        console.log(this.process);

    },
    mounted() {
        console.log(this.process.productName);

    },
    methods: {

    }
}

</script>



<style scoped>

.main-content-cp {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
}

.main-content-cp .card-cp{
    margin: 2vh 10vw;
}
.row{
    display: flex;
    align-items: center;
}

.row p{
    justify-content: right;

}

.row p.accent-info{
    justify-content: left;
}

.cppp .card-cpp {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.cppp .card-pd {
    width: auto;
    display: flex;
    justify-content: space-evenly;
}
.card-image{
    justify-content: center;
}
.card-image img{
    width: 70%;
    justify-content: center;
}
.cppp h4 {
    text-transform: uppercase;
    padding: 2vh 1vh 0 1vh;
    margin: 0;
}

.card-cpp .row {
    margin-bottom: 1vh;
}

.cppp .product {
    padding: 0;
}

.cppp .product .row {
   justify-content: space-evenly;
}

.cppp .message span {
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #606060;
    padding: 0vh 2vh 1vh 2vh;

}

.map{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.map iframe{
    width: 90%;
    border-radius: 20px;
}

@media (max-width: 960px) {
    .cppp .card-pd {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .cppp .card-cpp {
        width: 100%;
    }
    .cppp .map {
        width: 100%;
    }
    .message{
        display: none;
    }
    .card-image img{
        align-self: center;
        width: 50%;
    }
}
</style>