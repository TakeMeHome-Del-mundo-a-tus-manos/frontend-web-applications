<template>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 login">
        <div class="text-center mb-5">
            <img src="./icons/TKM-favicon.png" alt="Image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Welcome, let's get started!</div>
            <span class="text-600 font-medium line-height-3">Don't have an account?</span>
            <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
            <div class="input-div">
                <label for="email1"  class="block text-900 font-medium mb-2"> <strong> Email/Username</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="email" class="p-inputtext-md" placeholder="Username" v-model="user"/>
                </span>
            </div>
            <div class="input-div" >
                <label for="password1" class="block text-900 font-medium mb-2" > <strong> Password</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-lock" />
                    <InputText type="password" class="p-inputtext-md" placeholder="************" v-model="password" />
                </span>
            </div>


            <div class="flex align-items-center justify-content-center mb-6 extra-form-div">
                <a class="font-medium no-underline ml-2 text-blue-500 text-center cursor-pointer">Forgot password?</a>
            </div>

            <Message v-if="error" severity="error" key="Dynamic Warning Message">{{error_msg}}</Message>

            <RouterLink :to="link">
                <Button  label="Login" class="w-full" v-on:click="login" >
                </Button>
            </RouterLink>

        </div>
    </div>
</template>

<style>
    .login{
        font-family: Poppins;
    }
    
    RouterLink Button{
        background-image: linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%);
    }
    .login input{
        width: 100%;
    }
    .login .input-span{
        width: 100%;
    }
    .input-div{
        margin: 30px;
    }
    .extra-form-div{
        width: 100%;
    }
    

</style>

<script>
import { UserApiService } from "../services/user-api-service";
import { StorageService } from "../services/http/storage-service"; 

export default {
    name: 'login',
    components: {

    },
    data: function () {
        this.usuarioApiService = new UserApiService()

        return {
            user: "",
            password: "",
            error: false,
            error_msg: "",
            link:""
        }
    },
    methods: {
        login() {
            this.submittedLogin = true
            this.usuarioApiService.getByEmailAndPassword(this.user, this.password).then(response => {

                this.link = '/about'
                console.log(response.data)
                this.storage.set("usuario", response.data.id)
                this.storage.set("nombre", response.data.name)

            }).catch((e) => {
                this.error = true
                this.error_msg = e.message;
                }
            )
        }
    }

}
</script>
