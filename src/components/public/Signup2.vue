<template>
    <div class="surface-card p-4 shadow-2 border-round login">
        <div class="text-center mb-5">
            <img src="../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Fill In your User Information</div>
        </div>

        <div>
            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Full Name </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="text" class="p-inputtext-md" placeholder="Full name" v-model="name" v-on:change="validateName()" />
                </span>
                <Message v-if=nameError v-on:close="nameError=false" severity="error">Name is <strong> empty</strong> </Message>


            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Country </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-home" />
                    <InputText type="text" class="p-inputtext-md" placeholder="Country" v-model="country" v-on:change="validateCountry()"/>
                </span>
                <Message v-if=countryError v-on:close="countryError=false" severity="error">Country is<strong> empty</strong> </Message>

            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Birth Date</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-calendar" />
                    <InputText type="date" class="p-inputtext-md" v-model="birthDate" v-on:change="validateBirthDate()" />
                </span>
                <Message v-if=birthDateError v-on:close="birthDateError=false" severity="error">Birth date<strong> is not valid</strong> </Message>

            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Phone Number</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-phone" />
                    <InputText type="number" class="p-inputtext-md" placeholder="Phone number" v-model="phone" v-on:change="validatePhoneNumber()" />
                </span>
                <Message v-if=phoneError v-on:close="phoneError=false" severity="error">Phone number is<strong> empty</strong> </Message>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Identify card</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-id-card" />
                    <InputText type="number" class="p-inputtext-md" placeholder="ID number" v-model="idCard" v-on:change="validateIdCard()" />
                </span>
                <Message v-if=idCardError v-on:close="idCardError=false" severity="error">ID card is<strong> empty</strong> </Message>
            </div>

            <div class="input-div">
                <RouterLink :to="link">
                    <Button label="Continue" class="w-full" v-on:click="validate()">
                    </Button>
                </RouterLink>
            </div>

        </div>
    </div>
</template>

<script>
export default {

    name: "Signup2",
    components: {

    },
    data() {
        return {
            name: "",
            country: "",
            birthDate: "",
            phone: "",
            idCard: "",
            link: "",

            nameError: false,
            countryError: false,
            birthDateError: false,
            phoneError: false,  
            idCardError: false
        }
    },
    methods: {
        validate: function () {
            if (this.email == "" || this.country == "" || this.birthDate == "" || this.phone == "" || this.idCard == "") {
                alert("Please fill in all the fields");
            } else {
                this.link = "/signup3";
                sessionStorage.setItem("name", this.name);
                sessionStorage.setItem("country", this.country);
                sessionStorage.setItem("birthDate", this.birthDate);
                sessionStorage.setItem("phone", this.phone);
                sessionStorage.setItem("idCard", this.idCard);
            }
        }, 
       
        validateName: function () {
            if (this.name == "") {
                this.nameError = true
            } else {
                this.nameError = false
            }
        },
        validateCountry: function () {
            if (this.country == "") {
                this.countryError = true
            } else {
                this.countryError = false
            }
        },
        validateBirthDate: function () {
            if (this.birthDate == "") {
                this.birthDateError = true
            } else {
                this.birthDateError = false
            }
        },
        validatePhoneNumber(){
            if (this.phone == "") {
                this.phoneError = true
            } else {
                this.phoneError = false
            }
        },
        validateIdCard(){
            if (this.idCard == "") {
                this.idCardError = true
            } else {
                this.idCardError = false
            }
        },
    }


}


</script>

<style>
.login {
    font-family: Poppins;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10vh;
}

.login input {
    width: 100%;


}

.login .input-span {
    width: 100%;
}

.input-div {
    margin: 30px;
}

.extra-form-div {
    width: 100%;
}

@media only screen and (max-width: 750px) {
    .login {
        width: 100%;
    }
}


input[type=number]::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;}

</style>