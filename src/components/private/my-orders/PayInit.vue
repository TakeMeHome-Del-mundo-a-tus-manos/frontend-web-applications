<!-- <template>
    <div class="text-900 text-3xl font-medium mb-3 text-center mt-3">Enter The Order ID</div>

    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 pay">
        <div class="text-center mb-5"> -->
            <!-- <img src="../../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3"> -->
        <!-- </div>

        <div>
            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Order ID </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-shopping-cart" />
                    <InputText type="text" class="p-inputtext-md" placeholder="ID" v-model="orderCode" />
                </span> -->
                <!-- <Message v-if=usernameError v-on:close="usernameError=false" severity="error">orderCode is <strong>
                        empty</strong>
                </Message>
                <Message v-if=sameUsernameError v-on:close="sameUsernameError=false" severity="warn">This username <strong>
                    already exists</strong>
                </Message> -->
            <!-- </div>
            <div class="input-div">

                <label class="block text-900 font-medium mb-2"> <strong> Amount To Pay </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-money-bill" />
                    <InputText type="text" class="p-inputtext-md" placeholder="Amount" />
                </span>
            </div>
            <div class="input-div">
                <RouterLink :to="link">
                    <Button label="Continue" class="w-full" v-on:click="validate()">
                    </Button>
                </RouterLink>
            </div>

        </div>
    </div>
</template> -->

<!-- <script>

import { MyOrdersApiService } from "../../../services/my-orders/myOrders-api-service";


export default {
    data() {

        this.myOrdersApiService = new MyOrdersApiService();

        return {
            orderCode: '',
            amount: '',
            link: '',
            inputError: true

        }
    },
    methods: {
        validate() {
            if (this.orderCode == '') {
                this.inputError = true;
                return;
            }


            this.myOrdersApiService.getByOrderCode(this.orderCode).then((response) => {
                if (response.data == '') {
                    alert("Order ID not found");
                }

                else {
                    this.inputError = false;
                    this.link = '/payment-details';
                }

            });


        }

    }
}

</script> -->



<!-- <style>
.pay {
    font-family: Poppins;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
}

.pay input {
    width: 100%;
}

.pay .input-span {
    width: 100%;
}

.input-div {
    margin: 30px;
}

.extra-form-div {
    width: 100%;
}

.p-inputtextarea {
    width: 100%;
}

button {
    text-decoration: dotted;
}
</style> -->


<template>
    <Toast />
    <div class="form-demo">

        <div class="text-900 text-3xl font-medium mb-3 text-center mt-3">Enter The Order ID</div>

        <div class="flex justify-content-center">
            <div class="card">
                <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
                    <div class="field">
                        <div class="p-float-label">
                            <InputText id="orderCode" v-model="v$.orderCode.$model"
                                :class="{'p-invalid':v$.orderCode.$invalid && submitted}" />
                            <label for="orderCode" :class="{'p-error':v$.orderCode.$invalid && submitted}">Order
                                ID*</label>
                        </div>
                        <small v-if="(v$.orderCode.$invalid && submitted) || v$.orderCode.$pending.$response"
                            class="p-error">{{v$.orderCode.required.$message.replace('Value', 'Order ID')}}</small>
                    </div>
                    <div class="field">
                        <div class="p-float-label">
                            <InputText type="number" id="amount" />
                            <label for="amount">Amount to pay</label>
                        </div>
                    </div>
                    <!-- <div class="field-checkbox">
                        <Checkbox id="accept" orderCode="accept" value="Accept" v-model="v$.accept.$model" :class="{'p-invalid':v$.accept.$invalid && submitted}" />
                        <label for="accept" :class="{'p-error': v$.accept.$invalid && submitted}">I agree to the terms and conditions*</label>
                    </div> -->
                    <Button type="submit" label="Submit" class="mt-2" v-on:click="validateData()" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { MyOrdersApiService } from "../../../services/my-orders/myOrders-api-service";

export default {
    setup: () => ({ v$: useVuelidate() }),
    data() {
        return {
            myOrdersApiService: new MyOrdersApiService(),
            orderData: null,
            orderCode: '',
            submitted: false,
            link: ''
        }
    },
    countryService: null,
    validations() {
        return {
            orderCode: {
                required
            }
        }
    },
    created() {
        //this.countryService = new CountryService();
    },
    mounted() {
        //this.countryService.getCountries().then(data => this.countries = data);
    },
    methods: {
        handleSubmit(isFormValid) {
            this.submitted = true;

            if (!isFormValid) {
                return;
            }
        },
        validateData() {
            if (this.orderCode == '') {
                return;
            }

            this.myOrdersApiService.getByOrderCode(this.orderCode).then((response) => {

                if (response.data == null || response.data == '') {
                    this.$toast.add({ severity: 'error', summary: 'Order ID not found', detail: 'Please type a correct order ID', life: 3000 });
                    return;
                }

                else {
                    this.orderData = response.data[0];

                    var id = response.data[0].id;
                    this.$router.push({ name: 'payment-details', params: { orderCode: id } });
                    localStorage.setItem('orderData', JSON.stringify(this.orderData));

                    //Comunicación entre componentes
                    /* setTimeout(() => {
                         this.emitter.emit("orderCodeEmit", response.data[0]);
                     }, 500);*/
                }

            });


        }
    }
}
</script>

<style lang="scss" scoped>
.form-demo {
    .card {
        min-width: 450px;

        form {
            margin-top: 2rem;
        }

        .field {
            margin-bottom: 1.5rem;
        }
    }

    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}
</style>