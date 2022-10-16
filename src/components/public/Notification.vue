<script>
import {ref} from "vue"
import { onClickOutside } from '@vueuse/core'

const OpenModal=ref(false)
const modal = ref(null)

onClickOutside(modal,()=>(OpenModal.value=false))

export default {
  data() {
    return {
      OpenModal: true,
      modal:null
    }
  }
}
</script>

<template>


  <div v-if="OpenModal" class="modal-bg">
    <div class="modal" ref="modal">
      <button @click="OpenModal = false" class="close-btn">x</button>
      <div class="not1-box">
        <img class="not-message" src="src/components/img/not-message.png" alt="message">
        <div class="not-resume">
          <h3 class="not-resume-txt">You have a new order.</h3>
          <h3 class="not-resume-txt">Click to read the contract</h3>
        </div>
      </div>
      <div class="not2-box">
        <img class="not-message" src="src/components/img/not-box.png" alt="box">
        <div class="not-resume">
          <h3 class="not-resume-txt">Your order has arrived!.</h3>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
*{
  margin:0;
  padding:0;
  color:black;
  font-size: Poppins;
  font-weight:normal;
}
.modal-bg{
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
  position:relative;
  background: white;
  padding:50px 100px;
  border-radius: 5px;
  box-shadow: 0 10px 5px 2px rgba(0,0,0,0.1);
  width: 580px;
  margin-top: -420px;
  margin-right: -520px;
}
.close-btn{
  position:relative;
  bottom: 50px;
  left:465px;
}
.not1-box{
  box-shadow: 0px 0px 1px black;
  width: 500px;
  height: 100px;
  top:100px;
  margin-top: -60px;
  margin-left: -60px;
}
.not-resume{
  width:280px;

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
}
.not2-box{
  box-shadow: 0px 0px 1px black;
  width: 500px;
  height: 100px;
  top:100px;
  margin-top: 15px;
  margin-left: -60px;
}
</style>