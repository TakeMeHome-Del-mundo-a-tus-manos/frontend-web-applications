<template>
    <div class="main-content-pc">
        <div>
            <img src="../../img/Check.png" alt="">
            <h2>Payment Completed</h2>
        </div>

        <div class="card-pd">
            <div class="card-details">
                <div class="row">
                    <p><b>Order Number:</b></p>
                    <p class="accent-info"><b>123456789</b></p>
                </div>
                <div class="row">
                    <p><b>Order ID: </b></p>
                    <p class="accent-info"> <b>{{orderData.orderCode}}</b></p>
                </div>
                <div class="row">
                    <p><b>Amount: </b></p>
                    <p class="accent-info"> <b>{{orderData.amount}} {{orderData.currency}}</b></p>
                </div>
            </div>

            <Button label="ACCEPT" class="confirm" v-on:click="goPay()"></Button>

        </div>
    </div>



</template>


<script>

export default {
    name: "PaymentCompleted",
    data() {
        return {
            orderData: {
                orderCode: '',
                amount: 0,
                currency: '',
            }
        }
    },
    mounted() {

        localStorage.getItem("orderData") ? this.orderData = JSON.parse(localStorage.getItem("orderData")) : this.orderData = {};

    },
    methods: {
        goPay() {
            this.$router.push('/pay');
        }
    }
}

</script>


<style>
.main-content-pc {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
}

.main-content-pc .row {
    justify-content: center;
}

.main-content-pc .card-pd {
    width: 20em;
    display: flex;
    flex-direction: column;
    padding-left: 3vw;
    padding-right: 3vw;
    padding-top: 2vh;
}

.accent-info {
    display: flex;
    justify-content: right;
    text-align: end;
}

.confirm {
    margin-top: 2vh;
    width: 90%;
}

@media only screen and (max-width: 750px) {
    .main-content-pc .card-pd {
        padding-left: 10vw;
        padding-right: 10vw;
    }
}
</style>