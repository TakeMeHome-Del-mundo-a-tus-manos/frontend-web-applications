<template>
    <div class="surface-card p-4 shadow-2 border-round login">
        <div class="text-center mb-5">
            <img src="../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Create A New Account!</div>
        </div>

        <div>
            <div class="input-div">
                <label for="email" class="block text-900 font-medium mb-2"> <strong> Email/Username</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="email" class="p-inputtext-md" placeholder="Username" />
                </span>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Password</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-lock" />
                    <InputText type="password" class="p-inputtext-md" placeholder="************" />
                </span>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Confirm
                        Password</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-lock" />
                    <InputText type="password" class="p-inputtext-md" placeholder="************" />
                </span>
            </div>

            <div class="input-div">
                <RouterLink to="/signup2">
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
    margin-bottom: 10vh;
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