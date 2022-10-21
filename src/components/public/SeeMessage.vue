<template>

  <div class="chat-container">
    <div class="p-4 shadow-0 border-round ">
      <aside v-if="messages.length == 0" class="subtitle">You have 0 new messages</aside>
      <div class="box20" v-for="message in messages">
        <img class="ContactPhoto" alt="ContactPhoto" :src="message.receiver.photo_url">
        <RouterLink to="/profile-travel">  
        <aside class="name">{{message.receiver.name}}</aside>
        </RouterLink>
        <div>
          <aside class="message inline">Write a message...</aside>
          <Button v-on:click="selectChat(message.id, message.receiver.name)" icon="pi pi-angle-right" class="p-button-rounded p-button-second inline"></Button>
        </div>
      </div>


    </div>

    <div class="container chat m-7 border-round shadow-0" v-if="actualChat!=-1">
        <div class="chat-header">
          <h2 class="text-primary" style="width: 70%;">Chat</h2>
          <Button v-on:click="addContract" icon="pi pi-cart-plus" class="p-button-rounded add-cart-button p-button-second"></Button>
        </div>
      <div class="card">
          <div class="card-body">
              <div ref="scrollPanel" class="messages">
                  <div class="single-message" v-for="message in actualListMessage" :key="message.id">
                      <span v-if="message.type=='sent'" class="text-info">[Me]: </span>
                      <span v-if="message.type=='received'" class="text-info">[{{ actualChatName }}]: </span>
                      <span>{{message.message}}</span>
                      <span class="text-secondary time">{{message.date}}</span>
                  </div> 
                </div >
          </div>
          <div class="card-action mt-3">
            <div class="" style="margin-bottom: 30px">
              <div class="row">  
                <InputText type="text" name="message" placeholder="Enter message ..." v-model="newMessage"></InputText>

              </div>
                <Button class="btn btn-primary" v-on:click="sendMessage()" label="Submit" type="submit" name="action"></Button>
              
            </div>
          </div>
      </div>
  </div>
</div>

<Dialog
    v-model:visible=makeContract
    :style="{ width: '900px' }"
    class="p-fluid"
  >
  <template #header>
    <h2 style=" text-align: center;">Do yo want to make a contract?</h2>  
  </template>
    <div class="input-div" style="width: 40%; margin: auto;">
      <label for="email1"  class="block text-900 font-medium mb-2"> <strong> Delivery Date</strong></label>
      <span class="p-input-icon-left input-span">
          <i class="pi pi-user" />
          <pv-calendar inputId="icon" placeholder="10/10/2010" v-model="deliveryDate" :showIcon="true" />
        </span>
    </div>


    <div class="input-div mt-5" style="width: 40%;  margin: auto;">
      <label for="email1"  class="block text-900 font-medium mb-2"> <strong> Amount to be paid</strong></label>
      <span class="p-input-icon-left input-span">
          <i class="pi pi-money-bill" />
          <InputText type="email" class="p-inputtext-md" placeholder="560" v-model="user"/>
        </span>
    </div>  

  <div class="chat resume-info mt-5">

                <aside class="sub-contract-resume">Contract Resume</aside>
                <div class="Boxes" key="1">
                  <div class="box_container_contract p-4 shadow-0 border-round w-full lg:w-20">

                    <div class="Box-dates-available-order" >
                      <img id="Play5" alt="Play5" src="https://falabella.scene7.com/is/image/FalabellaPE/17843527_1?wid=800&hei=800&qlt=70">
                      <aside class="Subtitle-Play5">OrderName</aside>
                      <div class="date-container">
                        <aside class="date-container-txt">Delivery: <b class="date-container-txt-bold">Lima Peru</b></aside>
                        <aside class="date-container-txt">Bring from: <b class="date-container-txt-bold">EE UU</b></aside>
                        <aside class="date-container-txt">Agreement date: <b class="date-container-txt-bold">13/09/2022</b></aside>
                        <aside class="date-container-txt">Delivery before: <b class="date-container-txt-bold">17/09/2022</b></aside>
                        <div class="box-bottom-contract">
                          <img class="Amazon" alt="Amazon" src="https://cdn.portalfruticola.com/2022/09/Walmart.jpeg">
                        </div>
                      </div>
                    </div> 

                  </div>

                  <div class="box-courier-data">
                    <aside class="subtitle-courier-data">Courier data</aside>
                    <img class="Courier-data-Photo" alt="CourierPhoto" src="https://previews.123rf.com/images/fotoluminate/fotoluminate1706/fotoluminate170600162/80630508-retrato-al-aire-libre-hermoso-de-la-mujer-joven-en-una-configuraci%C3%B3n-del-parque-.jpg">
                    <aside class="name-courier-data">Emily Gavez</aside>
                  </div>
                  <div class="Box-dates-available-order2"  key="order.id" >
                    <div class="box-client-data">
                      <aside class="subtitle-client-data">Client data</aside>
                      <img class="client-data-Photo" alt="ClientPhoto" src="https://cdn.discordapp.com/attachments/1009641657194532868/1032860455900819497/image_11.png">
                      <aside class="name-client-data">Oscar Cañellas</aside>
                    </div>
                  </div>
                </div>


  </div>

    <template #footer>
      <Button
        label="Create Contract"
        icon="pi pi-check-circle"
        class="p-button w-full"
        v-on:click="createContract()"
      />
      
    </template>
  </Dialog>
 


</template>


<script >
import { UserApiServiceJSON } from "../../services/user-api-service-json";

    export default {
      name: 'messages',
      components: {
    
      },
      data: function () {
        this.usuarioApiService = new UserApiServiceJSON()

        return {
          deliveryDate:'',
          actualChat: -1,
          makeContract: false,
          actualChatName: '',
          actualListMessage: [],
          newMessage:'',
          messages: []
        }
  },
  
  created: function () {
        this.usuarioApiService.getMessages(localStorage.getItem("id")).then(response => {
            this.messages=response.data
        })
  },
  updated: function () {
  this.$nextTick(function () {
    this.scroll();
    
  })
},
  methods: {
    createContract() {
      this.makeContract = false
    },
    
    addContract() {
      this.makeContract = true;
      console.log(this.makeContract)
    },
    
    selectChat: function (id, name) {
      this.actualChat = id;
      this.actualChatName = name;
      this.actualListMessage = this.messages.find(message => message.id == id).list_message
    },

    sendMessage: function () {
      const today= new Date();
      const message = {
        message: this.newMessage,
        date: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        type: 'sent'
      }
      this.actualListMessage.push(message)
      this.usuarioApiService.sendMessage(this.actualChat, this.actualListMessage)
      this.newMessage = '';
    },
    scroll() {
      const container = this.$refs.scrollPanel;
      container.scrollTop = container.scrollHeight;
      }
      }
    
    }
    </script>

<style scoped>
.resume-info{
  margin: auto;
}
.add-cart-button{
  margin-right: 20px;
}
.chat-header{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-height: 80px;
  background: rgba(21, 137, 162, 0.3);
box-shadow: 9px 5px 33px rgba(72, 72, 72, 0.09);
border-radius: 10px;
}
.card{
  margin: 10px;
}
.chat-container{
  display: flex;
  justify-content: space-evenly;
}
.chat{
  width: 40vw;
  box-shadow: 3px 3px 9px #999;

}
.chat h2{
  font-size: 2.6em;
}
.chat h5{
  margin-top: 0px;
  margin-bottom: 40px;
}
.chat span{
  font-size: 1.2em;
}
.single-message{
  margin-bottom: 10px;
}
.chat .time{
  display: block;
  font-size: 0.7em;
}
.messages{
  max-height: 300px;
  overflow: auto;
}
.inline{
  display: inline-block;
}
.SeeMessage{
  font-family: Poppins;
  margin-bottom: 3vw;
}
img.ContactPhoto{
  bottom:50px;
  height: 130px;
  width:130px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px #999;
  display: block;
  float:bottom;
  display:block;
  display:inline-block;
  line-height:0;
  float:left;
  margin-top:8px;
  margin-left:10px;
}
aside.subtitle{
  font-size:35px;
  font-weight: bold;
}
aside.message{
  margin-top:30px;
  margin-left:30px;
  margin-right: 20px;
}
aside.name{
  margin-top:30px;
  margin-left:30px;
  font-size:23px;
  font-weight: bold;
  right:30px;
  display:block;
  display:inline-block;
  line-height:0;
}
div.box20{
  margin-top:50px;
  height: 150px;
  width: 500px;
  box-shadow: 0px 0px 1px #999;
  transition:all 300ms;
}
div.box20:hover{
  transform: scale(1.1,1.1);
}









</style>