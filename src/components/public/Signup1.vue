<template>
    <div class="surface-card p-4 shadow-2 border-round login">
        <div class="text-center mb-5">
            <img src="../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Create A New Account!</div>
        </div>

        <div v-on:keyup="validateSamePassword()">
            <div class="input-div">
                <label for="email" class="block text-900 font-medium mb-2"> <strong> Email</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-at" />
                    <InputText type="email" class="p-inputtext-md" placeholder="Email" v-model="email"
                        v-on:change="validateEmail()" />
                </span>
                <Message v-if=emailError v-on:close="emailError=false" severity="error">Email address<strong> is not valid</strong> </Message>
                <Message v-if=sameEmailError v-on:close="sameEmailError=false" severity="warn">This email is <strong>
                    already used</strong>
                </Message>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Password</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-lock" />
                    <InputText type="password" class="p-inputtext-md" placeholder="************" v-model="password"
                        v-on:keyup="validatePassword()"/>
                </span>
                <Message v-if=passwordError v-on:close="passwordError=false" severity="error">Password must have at least <strong> 7 characters </strong>
                </Message>
            </div>

            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Confirm
                        Password</strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-lock" />
                    <InputText type="password" class="p-inputtext-md" placeholder="************"
                        v-model="confirmPassword"  />
                </span>
                <Message v-if=passwordConfirmError v-on:close="passwordConfirmError=false" severity="error">The confirm password <strong> does not match
                    </strong></Message>
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
import { UserApiServiceJSON } from "../../services/user-api-service-json";

export default {
    name: "Signup1",
    components: {

    },
    data() {
        this.userApiServiceJSON = new UserApiServiceJSON();

        return {
            sameEmailError: false,
            email: "",
            password: "",
            confirmPassword: "",
            link: "",
            emailError: false,
            passwordError: false,
            passwordConfirmError: false
        }
    },
    created() {
        sessionStorage.clear();
    },
    methods: {
        validate() {
            if (this.password == "" || this.confirmPassword == "" || this.email == "") {
                alert("Please fill in all fields!");
            }

            else if (!this.emailError && !this.passwordError && !this.passwordConfirmError) {
                this.link = "/signup2"
                sessionStorage.setItem("email", this.email);
                sessionStorage.setItem("password", this.password);
            }

        },
        validateEmail() {

            var re = /\S+@\S+\.\S+/;

            if (re.test(this.email)) 
                this.emailError = false;
            else {
                this.emailError = true;
            }
            this.emailExists();


        },
        validatePassword() {
            if (this.password.length < 7)
                this.passwordError = true;
            else
                this.passwordError = false;
        },
        validateSamePassword() {
            if (this.password != this.confirmPassword) {
                this.passwordConfirmError = true
            }
            else
                this.passwordConfirmError = false;
        },
        emailExists() {
            this.userApiServiceJSON.emailExists(this.email).then(response => {
                if (response.data.email == this.email) {
                    this.sameEmailError = true;
                }
            }).catch(error => {
                this.sameEmailError = false;
            });

        }
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