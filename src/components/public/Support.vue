<template>
  <div class="c-supp">
    <h2 class="supp-subtitle">Do you have a claim?</h2>
    <img class="img-signo" src="../img/signo.png" alt="signo de interrogación">
      <div class="box-right">
        <div class="box-input-gmail">
          <i class="pi-envelop pi pi-at"></i>
          <!-- <img class="pi-envelop" src="../icons/pi-envelop.png" alt="pi pi-envelop"> -->
          <div class="input">
                <InputText id="input-gmail" type="text" placeholder="tmh@gmail.com" disabled="true"/>
          </div>
        </div>
         <div class="box-input-number">
          <i class="pi-envelop pi pi-phone"></i>
           <!-- <img class="pi-user" src="../icons/pi-user.png" alt="pi pi-user"> -->
           <div class="input">
              <InputText id="input-number" type="text" placeholder="+51 962273579" disabled="false"/>
           </div>
        </div>
        <div class="box-social-networks">
          <a href=""><img class="i-wpp" src="../img/wpp.png" alt="icon wpp"></a>
          <a href=""><img class="i-fb" src="../img/fb.png" alt="icon fb"></a>
          <a href=""><img class="i-ig" src="../img/ig.png" alt="icon tw"></a>
        </div>
        <Button label="SEND US A MESSAGE" class="btn-send w-18rem h-3rem text-white text-lg font-bold justify-content-center">SEND US A MESSAGE
        </Button>
      </div>
  </div>
</template>

<style scoped>
*{
  margin:0;
  padding:0;
}

.pi{
  color: black;
}
.supp-subtitle{
  font-size:40px;
  padding-top:60px;
  padding-left:190px;
}
.box-right{
  border-radius: 2%;
  margin-top:-350px;
  margin-left:1060px;
  height: 450px;
  width:380px;
}
.box-input-gmail{
  border: #c2c2c2 1px solid;
  height: 50px;
  width:350px;
  margin-left:12px;
  margin-top:70px;
  border-top-left-radius: 100px 100px;
  border-bottom-left-radius: 100px 100px;
  border-top-right-radius: 100px 100px;
  border-bottom-right-radius: 100px 100px;
}
.box-input-number{
  border: #c2c2c2 0.2px solid;
  height: 50px;
  width:350px;
  margin-left:12px;
  margin-top:50px;
  border-top-left-radius: 100px 100px;
  border-bottom-left-radius: 100px 100px;
  border-top-right-radius: 100px 100px;
  border-bottom-right-radius: 100px 100px;
}
#input-gmail{
  margin-left:80px;
  margin-top:13px;
  width:250px;
  height: 5px;
  border: 0;
}
#input-number{
  margin-left:80px;
  margin-top:13px;
  width:250px;
  height: 5px;
  border: 0;
}
.pi-envelop{
  width:30px;
  height: 30px;
  margin-left:30px;
  margin-top:2vh;
  color: black;
}
.pi-user{
  width:30px;
  height: 30px;
  margin-left:30px;
  margin-top:10px;
}
.input{
  margin-top: -53px;
}
InputText{
  font-family: Poppins;
}
.i-fb{
  height:65px;
  width: 70px;
  padding-left: 10px;
}
.i-ig{
  height:55px;
  width: 60px;
  padding-left: 13px;
  margin-bottom: 5px;
}
.i-wpp{
  height:60px;
  width: 60px;
  padding-left: 10px;
}

.box-social-networks{
  margin-top: 50px;
  margin-left: 80px;
  letter-spacing:30px;
}
.btn-send{
  margin-top: 60px;
  margin-left: 82px;
  left:-30px;
}
.img-signo{
  margin-top: 100px;
  margin-left:300px;
  height:260px;
  width: 260px;
}
@media only screen and (max-width: 1440px) {
  .box-right {
    margin-left:800px;
  }
}
@media only screen and (max-width: 1180px) {
  .box-right {
    margin-left:700px;
  }
  .c-supp{
    margin-left:-120px;
  }
}
</style>