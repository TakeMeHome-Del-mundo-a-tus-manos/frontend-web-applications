<template>
    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6 login">
        <div class="text-center mb-5">
            <img src="../../components/icons/TKM-favicon.png" alt="logo-image" height="50" class="mb-3">
            <div class="text-900 text-3xl font-medium mb-3">Fill In your User Information</div>
        </div>

        <div>
            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Username </strong></label>
                <span class="p-input-icon-left input-span">
                    <i class="pi pi-user" />
                    <InputText type="text" class="p-inputtext-md" placeholder="Username" v-model="username"
                        v-on:change="" /> <!-- TODO : validateUsername()-->
                </span>
                <Message v-if=usernameError v-on:close="usernameError=false" severity="error">Name is <strong>
                        empty</strong>
                </Message>
                <Message v-if=sameUsernameError v-on:close="sameUsernameError=false" severity="warn">This username <strong>
                    already exists</strong>
                </Message>
            </div>
            <div class="input-div">
                            <label class="block text-900 font-medium mb-2"> <strong> Photo url </strong></label>
                            <span class="p-input-icon-left input-span">
                                <i class="pi pi-camera" />
                                <InputText type="text" class="p-inputtext-md" placeholder="Paste your photo url" v-model="photoUrl"/>
                            </span>
                        </div>
            <div class="input-div">
                <label class="block text-900 font-medium mb-2"> <strong> Description about you </strong></label>
                <span class="input-span">
                    <Textarea :autoResize="true" class="p-inputtextarea" v-model="description" />
                </span>
            </div>

            

            <div class="input-div">
                <RouterLink :to="link">
                    <Button label="Create account" class="w-full" v-on:click="validate()">
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

button {
    text-decoration: dotted;
}

@media only screen and (max-width: 750px) {
    .login {
        width: 100%;
    }
}
</style>

<script>
import { UserApiServiceJSON } from "../../services/user-api-service-json";
import Textarea from 'primevue/textarea';
export default {
    components: {
        Textarea
    },
    data() {
        this.userApiServiceJSON = new UserApiServiceJSON();
        return {
            username: "",
            description: "",
            link: "",

            usernameError: false,
            sameUsernameError: false,

            user: {
                fullName: "",
                username: "",
                password: "",
                email: "",
                country: "",
                dateOfBirth: "",
                idNumber: "",
                description: "",
                photoUrl: "https://www.nicepng.com/png/full/202-2024580_png-file-profile-icon-vector-png.png",
                points: 0,
                rating: 0,
                phone: "",

            }
        }
    },
    methods: {
        validate() {
            if (this.name == "" || this.description == "") {
                alert("Please fill in all the fields");
            } else {
                this.link = "/"
                //Convertir a JSON
                this.user.fullName = sessionStorage.getItem("name");
                this.user.username = this.username;
                this.user.password = sessionStorage.getItem("password");
                
                this.user.email = sessionStorage.getItem("email");
                this.user.country = sessionStorage.getItem("country");
                this.user.dateOfBirth = sessionStorage.getItem("birthDate");
                this.user.idNumber = sessionStorage.getItem("idCard");
                this.user.description = this.description;

                if(this.photoUrl != ""){
                    this.user.photoUrl = this.photoUrl;
                }

                this.user.phone = sessionStorage.getItem("phone");
                console.log(this.user)
                //sessionStorage.setItem("user", JSON.stringify(user));
                this.userApiServiceJSON.create(this.user);
                console.log(user);
                //sessionStorage.clear();
                alert("Success!")
            }
        },
        validateUsername() {
            this.usernameExists();
            if (this.username == "") {
                this.usernameError = true;
            }
            else {
                this.usernameError = false;
            }
        },
        usernameExists() {
            this.userApiServiceJSON.usernameExists(this.username).then(response => {
                console.log(response.data[0].username);
                if (response.data[0].username == this.username) {
                    this.sameUsernameError = true;
                }
            }).catch(error => {
                console.log(error);
                this.sameUsernameError = false;
            });

        }

    }
}

</script>