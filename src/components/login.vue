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

            <Button  label="Login" class="w-full" v-on:click="login" ></Button>

        </div>
    </div>
</template>

<style>
    .login{
        font-family: Poppins;
    }
    
    Button{
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
import axios from 'axios'
export default {
     name: 'login',
     components: {
        
     },
     data: function() {
         return {
             user: "",
             password: "",
             error: false,
             error_msg: ""
         }
     },
     methods: {
         login() {
             let json = {
                "user": this.user,
                "password": this.password
             };

         }
     }
}
</script>