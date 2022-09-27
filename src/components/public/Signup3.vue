<template>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 login">
        <div class="text-center mb-5">
            <img src="../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Fill In your User Information</div>
        </div>

        <div>
            <div class="input-div">
                <label for="email" class="block text-900 font-medium mb-2"> <strong> Username </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="email" class="p-inputtext-md" placeholder="Full name" />
                </span>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Description about you </strong></label>
                <span class="input-span">
                    <Textarea :autoResize="true" class="p-inputtextarea"/>
                </span>
            </div>

            <div class="input-div">
                <RouterLink to="/signup3">
                    <Button label="Create account" class="w-full">
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

.p-inputtextarea {
    width: 100%;
}

button{
    text-decoration: dotted;
}

@media only screen and (max-width: 750px) {
    .login {
        width: 100%;
    }
}
</style>

<script>

    
import Textarea from 'primevue/textarea';
export default {
    components: {
        Textarea
    }
}

</script>