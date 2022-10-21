<template>
    <div class="text-900 text-3xl font-medium mb-3 text-center mt-3">Payment Details</div>

    <!-- Card de producto -->
    <div class="row main-row">
        <div>
            <div class="card-pd card-pdd">
                <div class="card-header">
                    <div class="card-image">
                        <img alt="product image" :src="orderData.productImage">
                    </div>
                    <div class="card-content">
                        <div class="card-title">
                            <h3>{{orderData.productName}}</h3>
                        </div>
                        <div class="card-store">
                            <div class="row">
                                <p>Sold by </p>
                                <img :src="orderData.productStore" alt="">

                            </div>
                            <div class="card-details">
                                <div class="row">
                                    <p><b>Order ID:</b></p>
                                    <p class="accent-info"><b>{{orderData.orderCode}}</b></p>
                                </div>
                                <div class="row">
                                    <p><b>Origin country:</b></p>
                                    <p class="accent-info"><b>{{orderData.originCountry}}</b></p>
                                    <img class="country-icon"
                                        src="https://cdn-icons-png.flaticon.com/512/323/323310.png" alt="">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <!-- Card de payment method -->
            <div class="card-pm card-pd">
                <div class="row row-cf">
                    <h4>Payment Method</h4>
                    <p>|</p>
                    <div class="row row-cf">
                        <img src="https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png" alt="">
                        <p>**** **** **** **** 1234</p>
                    </div>
                </div>
            </div>
            <!-- Change payment method -->
            <div class="sub">
                <RouterLink to="/"><u>Change Payment Method</u></RouterLink>
            </div>
        </div>

        <!-- Card de confirm -->
        <div class="card-pd card-cf">
            <div class="card-details">
                <div class="row">
                    <p><b>ORDER ID:</b></p>
                    <p class="accent-info"><b>{{orderData.orderCode}}</b></p>
                </div>
                <div class="row">
                    <p><b>TOTAL: </b></p>
                    <p class="accent-info"> <b>{{orderData.amount}}</b></p>

                </div>
                <div class="label-cf">
                    <Checkbox inputId="checkbox" v-model="checked" :binary="true" />
                    <label for="checkbox"> I declare that I have read and accepted the terms and conditions</label>
                </div>

            </div>
            <div class="column c-btn">
                <Button :disabled="!checked" label="Confirm" class="w-full confirm" v-on:click="goConfirm()"></Button>
                <Button label="Cancel" class="w-full cancel" v-on:click="goPay()"></Button>
            </div>
        </div>
    </div>


</template>

<script>

import { MyOrdersApiService } from "../../../services/my-orders/myOrders-api-service";

export default {
    name: "PaymentDetails",
    orderData: {},
    data() {
        return {
            myOrdersApiService: new MyOrdersApiService(),
            checked: false,
            orderData: {

            },
            notification: {

            }
        }
    },
    created() {
        /*this.emitter.on("orderCodeEmit", (data) => {
            this.orderData = data;
        });*/
    },
    mounted() {
        this.orderData = localStorage.getItem("orderData");
        this.orderData = JSON.parse(this.orderData);
        console.log(this.orderData)
    },
    methods: {
        goPay() {
            this.$router.push("/pay");
        },
        goConfirm() {

            this.myOrdersApiService.deleteOrder('booked', this.orderData.id).then((response) => {
                console.log(response);

                this.orderData.id = null;
                this.orderData.currentProcess = parseInt(Math.random() * 101);
                this.myOrdersApiService.addOrder('pending', this.orderData).then((response) => {
                    console.log(response);
                    //this.sendNotification();
                    this.$router.push("/payment-completed");

                });

            }).catch((error) => {
                console.log(error);
            });

        },
        sendNotification() {
            makeNotification();
            this.myOrdersApiService.sendNotification(this.notification).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
        },
        makeNotification() {
            this.notification = {
                "title": "Order Confirmed",
                "body": "Your order has been confirmed",
                "icon": "https://cdn-icons-png.flaticon.com/512/323/323310.png",
                "date": Date.now(),
            };
        }

    }

}
</script>

<style>
.column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.row {
    display: flex;
}

.main-row {
    display: flex;
    justify-content: space-evenly;
}

.card-pdd {
    display: flex;
    align-items: center;
}

.accent-info {
    color: #264986;
}

/*Card base*/
.card-pd {
    padding: 2em;
    width: 45vw;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 6px 10px rgba(0, 0, 0, .08), 0 0 6px rgba(0, 0, 0, .05);
    transition: .3s transform cubic-bezier(.155, 1.105, .295, 1.12), .3s box-shadow, .3s -webkit-transform cubic-bezier(.155, 1.105, .295, 1.12);
}

/* Card de producto */
.card-pdd {
    display: flex;
    align-items: center;
}

.card-header {
    display: flex;
    justify-content: space-between;
}

.card-image {
    display: inline-flex;
}

.card-image img {
    width: 15vw;
    height: auto;
}

.card-title {
    margin-top: 1vh;
}

.card-store p {
    text-align: center;
    margin: 0;
    margin-right: 1vw;
    width: auto;
}

.card-store img {
    max-width: 50px;
}

.card-content .row {
    margin-bottom: 1vh;
    margin-top: 1vh;
    display: flex;
    align-items: center;
}

.card-content {
    margin-left: 2vw;
}

.card-store .country-icon {
    width: 20px;
    height: 20px;
}

.card-pd h3 {
    text-align: left;
    margin: 0;
}

.card-details {
    margin-top: 0vh;
}

.card-pdd .card-details {
    margin-top: 3vh;
}

.card-details b {

    vertical-align: middle;
    margin-top: auto;
    margin-bottom: auto;
}

/* Card de payment method */
.card-pm {
    margin-top: 3vh;
    padding: 1em;
    align-items: center;
    align-content: center;
    padding-left: 4vw;
}

.card-pm img {
    max-width: 5vw;
    max-height: 3vh;
    margin-top: auto;
    margin-bottom: auto;
}

.card-pm .row p {
    text-align: center;
    justify-content: center;
}

/* CHange payment method*/
.sub {
    width: 45vw;
    margin-top: 3vh;
    padding-right: 1vw;
    color: #264986;
    text-align: end;
}

/* Card de confirm */
.card-cf {
    width: 15vw;
    padding-top: 2vh;
    height: 42.3%;
}

.label-cf {
    flex-direction: row;
    font-size: 12px;
    text-align: justify;
}

.card-cf Button {
    margin-top: 2vh;
}

.card-cf .cancel {
    margin-top: 2vh;
    background-color: white;
    color: #1589a2;
    border: 2px solid #1589a2;
}

.cancel:hover {
    background-color: #c8c8c8;
    color: white;
    /* border: 2px solid #1589a2; */
}

.confirm:hover {
    background-color: #1ba8c8;
    color: white;
    /* border: 2px solid #1589a2; */
}

.card-cf .row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.card-cf .p-checkbox {
    width: 15px;
    height: 15px;
}

.card-cf .p-checkbox .p-checkbox-box {
    width: 15px;
    height: 15px;
}

.card-cf .p-checkbox .p-checkbox-box.p-highlight .p-checkbox-icon.pi-check:before {
    top: 4px;
    left: 0px;
}

@media screen and (max-width: 1100px) {
    .main-row {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-pd {
        width: auto;
    }

    .sub {
        display: none;
    }

    .card-image img {
        width: 25vw;
        height: auto;
    }

    .card-content {
        margin-left: 2vw;
    }

    .card-title h3 {
        text-align: justify;
    }

    .card-cf {
        margin-top: 3vh;
    }

    .w-full {
        width: 50% !important;
    }

    .c-btn{
        margin-top: 2vh;
    }

    .row-cf{
        align-items: center;
    }
    .card-pdd{
        font-size: smaller;
    }
}

@media screen and (max-width: 500px) {
    .card-header{
        display: flex;
        flex-direction: column;
    }
    
    .w-full {
        width: 70% !important;
    }

    .card-image{
        justify-content: center;
    }
    .card-image img {
        width: 45vw;
        height: auto;
    }

    .card-title{
        margin-top: 3vh;
    }
}


</style>