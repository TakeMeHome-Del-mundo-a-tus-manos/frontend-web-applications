<template>
    <div class="surface-card p-4 shadow-2 border-round login">
        <div class="text-center mb-5">
            <img src="../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Fill In your User Information</div>
        </div>

        <div>
            <div class="input-div">
                <label for="email" class="block text-900 font-medium mb-2"> <strong> Full Name </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="email" class="p-inputtext-md" placeholder="Full name" />
                </span>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Country </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-home" />
                    <InputText type="text" class="p-inputtext-md" placeholder="Country" />
                </span>
            </div>
        
            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Birth Date</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-calendar" />
                    <InputText type="date" class="p-inputtext-md" />

                </span>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Phone Number</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-phone" />
                    <InputText type="tel" class="p-inputtext-md" placeholder="Phone number" />
                </span>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Identify card</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-id-card" />
                    <InputText type="tel" class="p-inputtext-md" placeholder="ID number" />
                </span>
            </div>

            <div class="input-div">
                <RouterLink to="/signup3">
                    <Button label="Continue" class="w-full">
                    </Button>
                </RouterLink>
            </div>

        </div>
    </div>
</template>

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
</style>

<script>


</script>