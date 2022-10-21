<template>
    <header>
        <div class="menu-top">
            <div class="prueba">
            <img src="../icons/TKM-favicon.png" height="40" >
            <h2> Take Me Home</h2>
        </div>
        <nav class="menu-left">
            <button class="button-user">
                <i class="pi pi-user"></i>
                <a id="name-user"> {{name}} </a>
                <i id="angle-icon" class="pi pi-angle-down"></i>
            </button>
        </nav>
        </div>
        <router-view>
        <ul class="menu">
            <div class="menu-indicator" :style="{left:positionToMove, width:sliderWidth}"></div>
            <li class="menu-item" v-for="link in links" :key="link.id" @click="sliderIndicator(link.id)" :ref="'menu-item_' + link.id">
                <RouterLink :to="link.path" class="no-underline" >
                <a href="#" class="menu-link" :class="link.id === selectedIndex ? 'active': null">
                <i class="menu-icon" :class="link.icon"></i>
                <span>{{link.text }}</span>
                </a>
                </RouterLink>
            </li>
            <button class="btn-notification" @click="OpenModalMain = true"><i class="pi pi-bell"></i></button>
        </ul>
    </router-view>
    </header>
  <RouterView />



  <div v-if="OpenModalMain" class="modal-bg">
    <div class="modal" ref="modal">
      <button @click="OpenModalMain = false" class="close-btn2">x</button>
      <div class="not-newOrder" v-for="notification in notifications" :key="notification.id" v-if="notifications.type===newOrder">
        <img class="not-message" src="src/components/img/not-message.png" alt="message">
        <div class="not-resume">
          <h3 class="not-resume-txt">You have a new order.</h3>
          <h3 class="not-resume-txt">Click to read the contract</h3>

          <Button @click="OpenModal2 = true" class="OpenNewModal">See</Button>

          <div v-if="OpenModal2" class="modal2-bg">
            <div class="modal2" ref="modal2">
              <div class="not3-box">
                <button @click="OpenModal2 = false" class="close-btn">x</button>
                <center><aside class="sub-contract-information">Contract Information</aside></center>
                <aside class="sub-contract-resume">Contract Resume</aside>
                <div class="Boxes" v-for="product in recent_orders.slice(1,2)" :key="product.id">
                  <div class="box_container_contract p-4 shadow-0 border-round w-full lg:w-20">

                    <div class="Box-dates-available-order" v-for="order in availableOrders.slice(0,1)" :key="order.id" >
                      <img id="Play5" alt="Play5" :src="order.productImage">
                      <aside class="Subtitle-Play5">{{order.orderName}}</aside>
                      <div class="date-container">
                        <aside class="date-container-txt">Delivery <b class="date-container-txt-bold">{{order.orderDestination}}</b></aside>
                        <aside class="date-container-txt">Bring from <b class="date-container-txt-bold">{{order.orderOrigin}}</b></aside>
                        <aside class="date-container-txt">Agreement date <b class="date-container-txt-bold">{{order.orderDate}}</b></aside>
                        <aside class="date-container-txt">Delivery before <b class="date-container-txt-bold">{{order.orderMaxDate}}</b></aside>
                        <div class="box-bottom-contract">
                          <aside class="sub-sold-by">Sold by</aside>
                          <img class="Amazon" alt="Amazon" :src="order.storeImage">
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="box-courier-data">
                    <aside class="subtitle-courier-data">Courier data</aside>
                    <img class="Courier-data-Photo" alt="CourierPhoto" :src="this.photo_src">
                    <aside class="name-courier-data">{{ this.name }}</aside>
                  </div>
                  <div class="Box-dates-available-order2" v-for="order in availableOrders.slice(0,1)" :key="order.id" >
                    <div class="box-client-data">
                      <aside class="subtitle-client-data">Client data</aside>
                      <img class="client-data-Photo" alt="ClientPhoto" :src="order.iconImage">
                      <aside class="name-client-data">{{ order.name }}</aside>
                    </div>
                  </div>
                  <div class="box-bottom-contract-information">
                    <div class="box-bottom-left-contract-information">
                      <aside class="txt-order">Order ID:</aside>
                      <aside class="txt-amount">Amount:</aside>
                    </div>
                    <div class="box-bottom-right-contract-information">
                      <aside class="txt-order-id">GRGATSA</aside>
                      <div class="Box-dates-available-order2" v-for="order in availableOrders.slice(0,1)" :key="order.id" >
                        <aside class="txt-amount-usd">{{order.amount}}</aside>
                      </div>
                    </div>
                  </div>
                  <div class="btns">
                    <Button class="btn-accept" @click="OpenModal3 = true " ><div class="txt-acc">Accept</div></Button>
                    <Button class="btn-decline" @click="OpenModal4 = true" ><div class="txt-dec">Decline</div></Button>
                    <div v-if="OpenModal3" class="modal3-bg">
                      <div class="modal3" ref="modal3">
                        <center><aside class="txt-accept-contract">You have accepted the contract</aside></center>
                        <center><aside class="txt-accept-contract-add">The item will be added to your account</aside></center>
                        <Button @click="OpenModal3 = false" class="close-btn3"><div class="txt-close">Close</div></Button>
                      </div>
                    </div>
                    <div v-if="OpenModal4" class="modal4-bg">
                      <div class="modal4" ref="modal4">
                        <center><aside class="txt-decline-contract">You have rejected the contract</aside></center>
                        <Button @click="OpenModal4 = false" class="close-btn4"><div class="txt-close">Close</div></Button>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="not-orderArrived" v-for="notification in notifications" :key="notification.id" v-if="notifications.type===orderArrived">
        <img class="not-message" src="src/components/img/not-box.png" alt="box">
        <div class="not-resume">
          <h3 class="not-resume-txt">Your order has arrived!.</h3>
        </div>
      </div>

      <div class="not-contractAccepted" v-for="notification in notifications" :key="notification.id" v-if="notifications.type===contractAccepted">
        <img class="not-message" src="src/components/img/not-contact-accepted.png" alt="box">
        <div class="not-resume">
          <h3 class="not-resume-txt">Contract accepted!</h3>
        </div>

        <Button @click="OpenModalContractAccepted = true" class="btn-OpenNewModalContractAccepted">See</Button>
        <div v-if="OpenModalContractAccepted" class="modalContractAccepted-bg">
          <div class="modalContractAccepted" ref="modalContractAccepted">
            <div class="title-m-c-a"><center>Your order has been accepted</center></div>


            <div class="box-complete-contract-accepted">
              <div class="not3-box">
                <aside class="sub-contract-resume">Contract Resume</aside>
                <div class="Boxes" v-for="product in recent_orders.slice(1,2)" :key="product.id">
                  <div class="box_container_contract p-4 shadow-0 border-round w-full lg:w-20">

                    <div class="Box-dates-available-order" v-for="order in availableOrders.slice(0,1)" :key="order.id" >
                      <img id="Play5" alt="Play5" :src="order.productImage">
                      <aside class="Subtitle-Play5">{{order.orderName}}</aside>
                      <div class="date-container">
                        <aside class="date-container-txt">Delivery <b class="date-container-txt-bold">{{order.orderDestination}}</b></aside>
                        <aside class="date-container-txt">Bring from <b class="date-container-txt-bold">{{order.orderOrigin}}</b></aside>
                        <aside class="date-container-txt">Agreement date <b class="date-container-txt-bold">{{order.orderDate}}</b></aside>
                        <aside class="date-container-txt">Delivery before <b class="date-container-txt-bold">{{order.orderMaxDate}}</b></aside>
                        <div class="box-bottom-contract">
                          <aside class="sub-sold-by">Sold by</aside>
                          <img class="Amazon" alt="Amazon" :src="order.storeImage">
                        </div>
                      </div>
                    </div>

                  </div>
                  <div class="box-courier-data">
                    <aside class="subtitle-courier-data">Courier data</aside>
                    <img class="Courier-data-Photo" alt="CourierPhoto" :src="this.photo_src">
                    <aside class="name-courier-data">{{ this.name }}</aside>
                  </div>
                  <div class="Box-dates-available-order2" v-for="order in availableOrders.slice(0,1)" :key="order.id" >
                    <div class="box-client-data">
                      <aside class="subtitle-client-data">Client data</aside>
                      <img class="client-data-Photo" alt="ClientPhoto" :src="order.iconImage">
                      <aside class="name-client-data">{{ order.name }}</aside>
                    </div>
                  </div>
                  <div class="box-bottom-contract-information">
                    <div class="box-bottom-left-contract-information">
                      <aside class="txt-order">Order ID:</aside>
                      <aside class="txt-amount">Amount:</aside>
                    </div>
                    <div class="box-bottom-right-contract-information">
                      <aside class="txt-order-id">GRGATSA</aside>
                      <div class="Box-dates-available-order2" v-for="order in availableOrders.slice(0,1)" :key="order.id" >
                        <aside class="txt-amount-usd">{{order.amount}}</aside>
                      </div>
                    </div>
                  </div>
                  <div class="btns">
                    <Button class="btn-accept2" @click="OpenModalContractAccepted = false" ><div class="txt-acc">Accept</div></Button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>


      <div class="not-contractRejected" v-for="notification in notifications" :key="notification.id" v-if="notifications.type===contractRejected">
        <img class="not-message" src="src/components/img/not-contact-rejected.png" alt="box">
        <div class="not-resume">
          <h3 class="not-resume-txt">Contract rejected!</h3>
          <Button @click="OpenModalContractRejected = true" class="btn-OpenNewModalContractRejected">See</Button>
          <div v-if="OpenModalContractRejected" class="modalContractRejected-bg">
            <div class="modalContractRejected" ref="modalContractRejected">
              <div class="title-m-c-r"><center>Your order has been rejected by</center></div>


              <div class="box-complete-rejected">
                <div class="box-courier-data-by">
                  <aside class="subtitle-courier-data">Courier data</aside>
                  <img class="Courier-data-Photo" alt="CourierPhoto" :src="this.photo_src">
                  <aside class="name-courier-data">{{ this.name }}</aside>
                </div>

                <div class="box-contract-resume-rejected">
                  <aside class="sub-contract-resume">Contract Resume</aside>
                  <div class="Boxes" v-for="product in recent_orders.slice(1,2)" :key="product.id">
                    <div class="box_container_contract p-4 shadow-0 border-round w-full lg:w-20">

                      <div class="Box-dates-available-order" v-for="order in availableOrders.slice(0,1)" :key="order.id" >
                        <img id="Play5" alt="Play5" :src="order.productImage">
                        <aside class="Subtitle-Play5">{{order.orderName}}</aside>
                        <div class="date-container">
                          <aside class="date-container-txt">Delivery <b class="date-container-txt-bold">{{order.orderDestination}}</b></aside>
                          <aside class="date-container-txt">Bring from <b class="date-container-txt-bold">{{order.orderOrigin}}</b></aside>
                          <aside class="date-container-txt">Agreement date <b class="date-container-txt-bold">{{order.orderDate}}</b></aside>
                          <aside class="date-container-txt">Delivery before <b class="date-container-txt-bold">{{order.orderMaxDate}}</b></aside>
                          <div class="box-bottom-contract">
                            <aside class="sub-sold-by">Sold by</aside>
                            <img class="Amazon" alt="Amazon" :src="order.storeImage">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button class="btn-accept-rejected" @click="OpenModalContractRejected = false" ><div class="txt-acc">Accept</div></Button>

            </div>
          </div>

        </div>
      </div>


    </div>
  </div>


</template>

<script>

import { UserApiService } from "../../services/user-api-service";

export default {
  data () {
        return {
            name: "",
            sliderPosition:0,
            selectedElementWidth:0,
            selectedIndex:0,

            OpenModalMain: false,
            modal:null,
            OpenModal2: false,
            modal2:null,
            OpenModal3: false,
            modal3:null,
            OpenModal4: false,
            modal4:null,

            OpenModalContractAccepted: false,
            modalContractAccepted:null,
            OpenModalContractRejected: false,
            modalContractRejected:null,

            homeUserApiService: null,
            photo_src:"",
            popular_stores:[],
            recent_orders:[],

            availableOrders:[],

            notifications:[],

            links:[
            {
                id:1,
                text: "Home",
                path: '/home',
            },
            {
                id:2,
                text: "My Messages",
                path: '/messages',
            },
            {
                id:3,
                text: "My Orders",
                path: '/my-orders',
            },
            {
                id:4,
                text: "Order Request",
                path: '/make-order',
            },
            {
                id:5,
                text: "Resume",
                path: '/resume',
            },
            {
                id:6,
                text: "Support",
                path: '/support',
            },

            ],

        };
        
    },
    created() {
        console.log(localStorage.getItem("nombre"));
        this.name = localStorage.getItem("nombre");

        this.photo_src = localStorage.getItem("photo_url");

        this.homeUserApiService = new UserApiService()
        this.homeUserApiService.getPopularStores().then((response) => {
          this.popular_stores = response.data;
          console.log(this.popular_stores)
        });

        this.homeUserApiService.getRecentOrders(localStorage.getItem("id")).then((response) => {
          this.recent_orders = response.data;
          console.log(this.recent_orders)
        });

        this.homeUserApiService.getAvailable_Orders().then((response) => {
          this.availableOrders = response.data;
          console.log(this.availableOrders)
        });

      this.homeUserApiService.getNotifications(localStorage.getItem("id")).then((response) => {
        this.notifications = response.data;
        console.log(this.notifications)
      });

    },
    methods: {
      Add_code_to_dbJson(add_code){
        // Requiring fs module
        const fs = require("fs");
        // Storing the JSON format data in myObject
        const data = fs.readFileSync("db.json");
        const myObject = JSON.parse(data);
        // Defining new data to be added
        let newData = {
          code: add_code,
        };
        // Adding the new data to our object
        myObject.push(newData);
      },

        sliderIndicator(id){
            let el = this.$refs[`menu-item_${id}`][0];
            this.sliderPosition = el.offsetLeft;
            this.selectedElementWidth = el.offsetWidth;
            this.selectedIndex = id;
        },
    },
    computed:{
        positionToMove(){
            return this.sliderPosition+"px";
        },
        sliderWidth(){
            return this.selectedElementWidth + "px";

        },
    },
};
</script>

<style>

:root{
  --activa-color:#ffffff;
  --link-text-color:#f1faee;
  --menu-background-color:#264986;
  --active-background-color:#264986;

}
header{
    margin:0;
}
.button-user{
    background-color: var(--menu-background-color);
    margin:0;
    padding:0;
    color:white;
    border:none;
    display: inline-flex;
    justify-items: center;
    font-size:15px;
}
.btn-notification{
  background-color: var(--menu-background-color);
  margin-top:20px;
  margin-right:150px;
  color:white;
  border:none;
  display: inline-flex;
  justify-items: center;
  font-size:15px;
  cursor:pointer;
}

#name-user{
    margin-top: 15px;
    width: 150px;
    margin-inline: 2px;
}
#angle-icon{
    font-size: 15px;
    
    
}
i{
    margin-top: 15px;
    ;
    font-size: 20px;
    
}
.prueba{
    font-family: "Poppins";
    width: 1440px;
    height: 49px;
    background-color:var(--menu-background-color);
    align-items: center;
    display: flex;
    margin-inline-start:71px;
    color:white;
    font-size: 20px;
    width: 70%;
    margin-left: 60px;
    margin-right: 0;
    
}
.prueba img{
    height: 40px;
    width: 40px;
    display: flex;
    
}
.menu-left{
    display: flex;
    margin-inline-end:150px;

}
.menu-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    
}
/* ul */
.menu{
    /*
    top:49.68px;
    top:7.52%;*/
    margin:0;
    left: 12%;
    bottom:86%;
    width: 75%;
    height: 80.32px;
    position: relative;
    background-color: var(--menu-background-color);
    display: inline-flex;
    
    list-style: none;
    
}
/* li */

.menu-item{
    display: inline-flex;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    
}
/* a */

.menu-link{
    
   
    /*margin-left: 10px;
    margin-right: 0;*/
    
    padding:21px;
    width: 142px;
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--link-text-color);
    text-decoration: none;
    


}

.menu-link:hover, .menu-link.active{
    color: var(--activa-color);
    background-color: var(--active-background-color);
}

/* icon */
.menu-icon{
    
   /* height: 1.5rem;
    width: 1.5rem;*/
   
    justify-content: center;
    align-items: center;
    display: inline-flex;
    /*margin-right: 0.2rem;*/

}

/* slider */
.menu-indicator{
    position: absolute;
    height: 0.25rem;
    background-color: var(--activa-color);
    bottom:0;
    left: 0;
    margin: auto;
    width: 3rem;
    transition: all ease 0.5s;

}





*{
  margin:0;
  padding:0;
}
.modal-bg{
  position:absolute;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;

  background-color:rgba(0,0,0,0.5);

  display :flex;
  justify-content:center;
  align-items: center;
  color:black;
  font-weight:normal;
}
.modal2-bg{
  position:fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;

  background-color:rgba(0,0,0,0.5);

  display :flex;
  justify-content:center;
  align-items: center;
}
.modal3-bg{
  position:fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;

  background-color:rgba(0,0,0,0.5);

  display :flex;
  justify-content:center;
  align-items: center;
}
.modal4-bg{
  position:fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;

  background-color:rgba(0,0,0,0.5);

  display :flex;
  justify-content:center;
  align-items: center;
}
.modalContractAccepted-bg{
  position:fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;

  background-color:rgba(0,0,0,0.5);

  display :flex;
  justify-content:center;
  align-items: center;
}
.modalContractRejected-bg{
  position:fixed;
  top:0;
  left:0;
  width: 100vw;
  height: 100vh;

  background-color:rgba(0,0,0,0.5);

  display :flex;
  justify-content:center;
  align-items: center;
}
.modal{
  position:absolute;
  background: rgba(255, 255, 255, 0.92);
  padding:50px 100px;
  border-radius: 7px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
  width: 580px;
  margin-top: -210px;
  margin-right: -500px;
  color:black;
  font-weight:normal;
}
@media (max-width: 1860px) {
  .modal {
    margin-right: -400px;
  }
}
.modal2{
  position:relative;
  background: rgba(255, 255, 255, 0.92);
  padding:50px 100px;
  border-radius: 7px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
  width: 600px;
  height: 450px;
  margin-top:-20px;
  margin-right: 120px;
}
.modal3{
  position:relative;
  background: rgba(255, 255, 255, 0.92);
  padding:50px 100px;
  border-radius: 7px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
  width: 600px;
  height: 250px;
  margin-top:-20px;
  margin-right: 120px;
}
.modal4{
  position:relative;
  background: rgba(255, 255, 255, 0.92);
  padding:50px 100px;
  border-radius: 7px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
  width: 600px;
  height: 250px;
  margin-top:-20px;
  margin-right: 120px;
}
.modalContractAccepted{
  position:relative;
  background: rgba(255, 255, 255, 0.92);
  padding:50px 100px;
  border-radius: 7px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
  width: 600px;
  height: 500px;
  margin-top:-250px;
  margin-right: 120px;
}
.modalContractRejected{
  position:relative;
  background: rgba(255, 255, 255, 0.92);
  padding:50px 100px;
  border-radius: 7px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
  width: 600px;
  height: 500px;
  margin-top:-250px;
  margin-right: 120px;
}
.close-btn{
  position:relative;
  bottom: 85px;
  left:545px;
  cursor:pointer;
}
.close-btn2{
  position:relative;
  bottom: 50px;
  left:460px;
  cursor:pointer;
}
.close-btn3{
  margin-top: 70px;
  margin-left: -350px;
  position:relative;
  bottom: 50px;
  left:485px;
  width:140px;
  cursor:pointer;
}
.close-btn4{
  margin-top: 80px;
  margin-left: -350px;
  position:relative;
  bottom: 50px;
  left:485px;
  width:140px;
  cursor:pointer;
}
.not-newOrder{
  margin-bottom: 50px;
  width: 500px;
  height: 97px;
  top:100px;
  margin-top: -40px;
  margin-left: -60px;
  background: white;
  border-radius: 7px;
  font-weight:normal;
}
.not3-box{
  width: 500px;
  height: 290px;
  margin-top: 35px;
  margin-left: -60px;
  border-radius: 7px;
  background: white;
  font-weight:normal;
}
.not-resume{
  width:280px;
}
.sub-contract-information{
  margin-top:-70px;
  margin-left: 60px;
  font-weight: bold;
  font-size: 25px;
  margin-bottom:35px;
}
.sub-contract-resume{
  margin-left: 22px;
  margin-top:-20px;
  margin-bottom:20px;
  font-weight: bold;
  font-size: 15px;
}

.not-message{
  width: 70px;
  height: 70px;
  margin-top: 20px;
  margin-left: 60px;
}
.not-resume-txt{
  margin-left: 200px;
  margin-top: -50px;
  width:400px;
  font-weight:normal;
}
.not-orderArrived{
  width: 500px;
  height: 100px;
  top:100px;
  margin-top: -35px;
  margin-left: -60px;
  background: white;
  border-radius: 7px;
}
.not-contractAccepted{
  width: 500px;
  height: 100px;
  top:100px;
  margin-top: 15px;
  margin-left: -60px;
  background: white;
  border-radius: 7px;
}
.not-contractRejected{
  width: 500px;
  height: 100px;
  top:100px;
  margin-top: 15px;
  margin-left: -60px;
  background: white;
  border-radius: 7px;
}
#Play5{
  margin-top:0;
  margin-bottom:10px;
  width: 100px;
  height: 100px;
  float:left;
}
.Amazon{
  margin-left:40px;
  margin-top:-25px;
  height: 30px;
  width: 43px;
  box-shadow: 0 0 0 #999;
}
.sub-sold-by{
  padding-top:-30px;
  font-size: 9px;
}
.box-bottom-contract{
  margin-top:-10px;
  margin-left:18px;
  width: 100px;
  height: 40px;
}
.box_container_contract{
  margin-top:0;
  height: 165px;
}
.Subtitle-Play5{
  margin-top: -20px;
  margin-left: 110px;
  font-weight: bold;
  font-size: 13px;
}
.date-container-txt{
  margin-left: 110px;
  font-size: 13px;
}
.date-container{
  margin-top: 10px;
}
.date-container-txt-bold{
  font-size: 13px;
}

.box-courier-data{
  margin-top: -180px;
  margin-left: 360px;
  box-shadow: 0 1px 0 0 rgba(0,0,0,0.1);
  width: 135px;
  height: 80px;
}
.subtitle-courier-data{
  font-weight: bold;
  font-size: 11px;
}
.Courier-data-Photo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.name-courier-data{
  font-size: 10px;
  margin-left:60px ;
  margin-top:-50px ;
  font-weight: bold;
}

.box-client-data{
  margin-top: 0;
  margin-left: 360px;
  width: 135px;
  height: 80px;
}
.subtitle-client-data{
  font-weight: bold;
  font-size: 11px;
}
.client-data-Photo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.name-client-data{
  font-size: 10px;
  margin-left:60px ;
  margin-top:-50px ;
  font-weight: bold;
}
.box-bottom-left-contract-information{
  margin-left:150px ;
  margin-top:15px ;
  width: 110px;
}
.txt-order{
  font-size: 13px;
}
.txt-amount{
  font-size: 13px;
  margin-top:10px ;
}
.box-bottom-right-contract-information{
  margin-left:240px ;
  margin-top:-53px ;
  width: 110px;
}
.txt-order-id{
  font-size: 16px;
  color: #264986;
  font-weight: bold;
}
.txt-amount-usd{
  font-size: 16px;
  color: #264986;
  font-weight: bold;
  margin-top:7px ;
}

.btn-accept{
  background-image: linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%);
  margin-left: 98px;
  width: 150px;
}
.btn-decline{
  background-image: linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%);
  width: 150px;
  left:10px;
}
.btns{
  margin-top:25px ;
}
.txt-acc{
  margin-left: 35px;
}
.txt-dec{
  margin-left: 35px;
}
.txt-accept-contract{
  font-weight: bold;
  font-size: 30px;
}
.txt-decline-contract{
  font-weight: bold;
  font-size: 30px;
}
.txt-accept-contract-add{
  font-weight: bold;
  font-size: 15px;
  color:#264986;
}
.OpenNewModal{
  width: 40px;
  height: 20px;
  margin-left: 430px;
  margin-top: 15px;
}
.box-bottom-contract-information{
  margin-top: 30px;
}
.txt-close{
  margin-left: 35px;
}
.btn-OpenNewModalContractAccepted{
  width: 40px;
  height: 20px;
  margin-left: 430px;
  margin-top: 0;
  top:-5px;
}
.title-m-c-a{
  font-weight: bold;
  font-size: 28px;
  margin-top: -30px;
}
.box-complete-contract-accepted{
  margin-top: 40px;
  margin-left: 10px;
}
.btn-accept2{
  margin-top: 20px;
  margin-left: 180px;
  width: 160px;
}
.btn-OpenNewModalContractRejected{
  width: 40px;
  height: 20px;
  margin-left: 430px;
  margin-top: 0;
  top:-5px;
}
.title-m-c-r{
  font-weight: bold;
  font-size: 28px;
  margin-top: -30px;
}
.box-courier-data-by{
  height: 90px;
  margin-top: 40px;
  padding-left: 150px;
  box-shadow: 0 2px 0 0 rgba(0,0,0,0.1);
}
.box-contract-resume-rejected{
  margin-top: 35px;
  padding-left: 40px;
}
.box-complete-rejected{
  background: white;
  height: 300px;
  margin-top:-25px;
  border-radius: 5%;
}
.btn-accept-rejected{
  margin-top: 20px;
  margin-left: 120px;
  width: 160px;
}
</style>
