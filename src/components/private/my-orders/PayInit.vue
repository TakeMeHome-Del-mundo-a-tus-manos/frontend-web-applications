<template>
    <div class="text-900 text-3xl font-medium mb-3 text-center mt-3">Enter The Order ID</div>

    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 pay">
        <div class="text-center mb-5">
            <!-- <img src="../../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3"> -->
        </div>

        <div>
            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Order ID </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="text" class="p-inputtext-md" placeholder="ID"/>
                </span>
                <!-- <Message v-if=usernameError v-on:close="usernameError=false" severity="error">Name is <strong>
                        empty</strong>
                </Message>
                <Message v-if=sameUsernameError v-on:close="sameUsernameError=false" severity="warn">This username <strong>
                    already exists</strong>
                </Message> -->
            </div>
            <div class="input-div">

            <label class="block text-900 font-medium mb-2"> <strong> Amount To Pay </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="text" class="p-inputtext-md" placeholder="Amount"/>
                </span>
            </div>
            <div class="input-div">
                <RouterLink to="/payment-details">
                    <Button label="Continue" class="w-full">
                    </Button>
                </RouterLink>
            </div>

        </div>
    </div>
</template>

<style>
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


</style>