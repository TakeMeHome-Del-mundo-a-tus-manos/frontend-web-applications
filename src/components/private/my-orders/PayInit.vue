<template>
    <Toast />
    <div class="form-demo flex">

        <div class="text-900 text-3xl font-medium mb-3 text-center mt-5 title">Enter The Order ID</div>

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

                    <Button type="submit" label="Submit" class="mt-2" v-on:click="validateData()" />
                </form>
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

            this.myOrdersApiService.getByOrderCode(this.orderCode, localStorage.getItem('id')).then((response) => {

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    .card {
        width: 45%;
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