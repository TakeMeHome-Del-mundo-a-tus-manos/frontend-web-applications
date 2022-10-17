<template>
  <div class="p-4 shadow-0 border-round ">
    <aside v-if="messages.length == 0" class="subtitle">You have 0 new messages</aside>
    <div class="box20" v-for="message in messages">
      <img class="ContactPhoto" alt="ContactPhoto" :src="message.receiver.photo_url">
      <aside class="name">{{message.receiver.name}}</aside>
      <div>
        <aside class="message inline">Write a message...</aside>
        <Button v-on:click="selectChat(message.id, message.receiver.name)" icon="pi pi-angle-right" class="p-button-rounded p-button-second inline"></Button>
      </div>
    </div>
  </div>

  <div class="container chat inline" v-if="actualChat!=-1">
    <h2 class="text-primary text-center">Chat</h2>
    <div class="card">
        <div class="card-body">
            <p class="text-secondary nomessages" v-if="messages.length == 0">
                {{messages.list_message.length}}
            </p>
            <div class="messages">
                <div class="single-message" v-for="message in actualListMessage" :key="message.id">
                    <span v-if="message.type=='sent'" class="text-info">[Me]: </span>
                    <span v-if="message.type=='received'" class="text-info">[{{ actualChatName }}]: </span>
                    <span>{{message.message}}</span>
                    <span class="text-secondary time">{{message.date}}</span>
                </div> 
            </div>
        </div>
        <div class="card-action">
          <div class="container" style="margin-bottom: 30px">
            <div class="row">  
                <InputText type="text" name="message" placeholder="Enter message ..." v-model="newMessage"></InputText>
                </div>
                <Button class="btn btn-primary" v-on:click="sendMessage" label="Submit" type="submit" name="action"></Button>
            
          </div>
        </div>
    </div>
</div>
</template>


<script>
import { UserApiServiceJSON } from "../../services/user-api-service-json";
    
    export default {
      name: 'messages',
      components: {
    
      },
      data: function () {
        this.usuarioApiService = new UserApiServiceJSON()

        return {
          actualChat: -1,
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
      methods: {
        selectChat: function (id, name) {
          this.actualChat = id;
          this.actualChatName = name;
          this.actualListMessage=this.messages.find(message => message.id == id).list_message
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
          console.log("GG")
          this.newMessage=''
        }
      }
    
    }
    </script>

<style>
.chat h2{
  font-size: 2.6em;
  margin-bottom: 0px;
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