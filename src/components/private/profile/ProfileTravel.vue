<template>
    <div class="Body">
        <div>
            <div class="card">
                <div class="grid">
                    <div class="col-3 ">
                        <br>
                        <div class="contPhoto">
                            <img class="userPhoto" :src="user.photoUrl" alt="Image"  width="200" preview  />
                        </div>
                        
                        <h2 class="userName">{{ user.username }}</h2>
    
                        <a class="userDescription">{{user.description}}</a>
    
                        <Rating class="userRating" :modelValue="user.rating" :readonly="true" :stars="5" :cancel="false" />
                    </div>
                    
                    <div class="col-6 align-items-center justify-content-center">
                        
                        <TabView>
                            <TabPanel header="Personal Information">
                                <br><br>
                                <div class="personalInf"> Full name<Button class="btn-name p-button-rounded" disabled="disabled" >{{ user.username }}</Button></div><br><br>
                                <div class="personalInf">Age<Button class="btn-year p-button-rounded" disabled="disabled" >{{ user.dateOfBirth }} </Button></div><br><br>
                                <div class="personalInf">E-mail<Button class="btn-email p-button-rounded" disabled="disabled" >{{user.email}}</Button></div><br><br>
                                <div class="personalInf">Phone<Button class="btn-phone p-button-rounded" disabled="disabled" >{{user.phone}}</Button></div><br><br>
                                <div class="personalInf">Location<Button class="btn-location p-button-rounded" disabled="disabled" >{{user.country}}</Button></div><br><br>
                            </TabPanel>
                            <TabPanel header="Points">
                                
                                <h2 class="pointsTitle">Currently you have</h2>
                                <div class="points">   
                                    <Knob v-model="user.value" readonly :size="300"/>
                                </div>
                            </TabPanel>
                            <TabPanel header="Comments" >
                                <div v-for="comment in comments">
                                    <div class="card"  >
                                    <Card style="width: 35rem;height: 8rem; ">
                                    
                                    <template #content>
                                        <Avatar :image="comment.order.client.photo"  class="mr-2" size="xlarge" shape="circle" />
                                        <img src="../../img/Star.png" alt="" class="star-foto"/>
                                        <div class="stars">{{comment.stars}}</div>
    
                                        <h2 class="commentName">{{comment.name}}</h2>
                                        <div class="commentComment">{{comment.comment}}</div>
    
                                    </template>
                                    </Card>
                                    <br><br>
                                </div>
                                </div>
                                
                        
                                
                            </TabPanel>
                            
                        </TabView>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    
    import { UserApiServiceJSON } from "../../../services/user-api-service-json";
    import axios from 'axios';
    export default {
      name: 'profileTravel',
      components: {
    
      },
      data: function () {
        return {
            user:{},
            comments:[],
            claims:[],
            profileTravelUserApiService: null,
        }
      },
      created(){
        
        this.profileTravelUserApiService = new UserApiServiceJSON()
        this.profileTravelUserApiService.getById('25').then((response) => {
          this.user = response.data;
    
          console.log(this.user)
        });
        
        this.profileTravelUserApiService.getCommentsById('25').then((response) => {
            this.comments=response.data;
        });
        this.profileTravelUserApiService.getClaimsById('25').then((response) => {
            this.claims=response.data;
        });
        // axios.get(`https://takemehome-api.herokuapp.com/api/v1/comments?id_to_like=${localStorage.getItem("id")}`).then((response)=>{
        //     this.comments=response.data;
        // })   
        // console.log(this.comments)
       
      },
      methods: {
    
      }
    
    }
    </script>
    
    <style scoped>
    .Body{
        align-items: center;
        color:black;
        position: relative;
        align-content: center;
        align-items: center;
        top: 4vw;
        margin-left: 21vw;
        margin-bottom: 12vw;
        overflow: hidden
    }
    .card{
        top: 10px;
    }
    .commentName{
        position: relative;
        left: 17%;
        top: -105px;
    }
    .commentComment{
        position: relative;
        left: 17%;
        top: -115px;
        font-style: normal;
        align-content: flex-start;
    
    }
    
    .claimsName{
        position: relative;
        left: 17%;
        top: -85px;
    }
    .claimsComment{
        position: relative;
        left: 17%;
        top: -95px;
        font-style: normal;
        align-content: flex-start;
    
    }
    .contPhoto{
        display: flex;
      justify-content: center;
      align-items: center;
    }
    .userPhoto{
        
        border-radius:150px;
        align-content:center;
    
    }
    .userName{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .userRating{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .userDescription{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;
    }
    .star-foto{
        position: relative;
        left: 75%;
        top: -20px;
    }
    .stars{
        position: relative;
        left: 84%;
        top: -45px;
    }
    .pointsTitle{
        display: flex;
        font-size: 200%;
        justify-content: center;
        align-items: center;
    }
    .points{
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        align-self: center;
    }
    
    
    .btn{
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        background-color:#ffffff;
        color: #000000;
        margin-top:20px;
        margin-bottom: 20px;
        width: 350px;
        height: 41px;
        border-radius: 40%;
        right: 0;
    
    }
    .btn-name{
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-bottom: 20px;
        width: 350px;
        height: 41px;
        border-radius: 40%;
        left: 5vw;
    }
    .btn-year{
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-bottom: 20px;
        width: 350px;
        height: 41px;
        border-radius: 40%;
        left: 7vw;
    }
    .btn-email{
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-bottom: 20px;
        width: 350px;
        height: 41px;
        border-radius: 40%;
        left: 6vw;
    }
    .btn-phone{
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-bottom: 20px;
        width: 350px;
        height: 41px;
        border-radius: 40%;
        left: 6vw;
    
    }
    .btn-location{
        display: flex;
        position: absolute;
        justify-content: center;
        align-items: center;
        margin-top:20px;
        margin-bottom: 20px;
        width: 350px;
        height: 41px;
        border-radius: 40%;
        left: 5vw;
    
    }
    .personalInf{
        display: flex;
        position: relative;
    align-items: center;
        left: 5vw;
    }
    
    </style>