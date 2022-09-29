<template>
  <div class="surface-card p-4 shadow-0 border-round w-100 lg:w-20 Home">
    <img class="UserPhoto" alt="UserPhoto" src="src/components/img/Oscar_User.jpg">
    <aside class="text5">Hi, Oscar!.</aside>
    <div class="box_blank2 p-4 shadow-0 border-round w-auto lg:w-100 Home"> </div>
    <aside class="text3 font-medium line-height-3 ">Popular Stores</aside>
    <div class="box3 p-4 shadow-0 border-round w-auto lg:w-20">
      <a href="https://www.walmart.com/" target="_blank"><img class="Walmart" alt="Walmart" src="src/components/img/Walmart.jpg"></a>
      <a href="https://www.amazon.com/" target="_blank"><img class="Amazon" alt="Amazon" src="src/components/img/Amazon.png"></a>
    </div>
    <div class="box6 p-4 shadow-0 border-round w-full lg:w-20"></div>
    <div class="box4 p-4 shadow-0 border-round w-auto lg:w-20">
      <a href="https://www.ebay.com/" target="_blank"><img class="Ebay" alt="Ebay" src="src/components/img/Ebay.png"></a>
      <a href="https://www.apple.com/" target="_blank"><img class="Apple" alt="Apple" src="src/components/img/Apple.png"></a>
    </div>
  </div>

  <div class="surface-card2 p-4 shadow-0 border-round w-auto lg:w-20 Home">
    <div style="text-align: center;"><a href="" ><aside class="text2 font-medium line-height-3">My account</aside></a></div>
    <Button  label="Order Request" class="w-auto" v-on:click="" ></Button>
    <div class="box_blank p-4 shadow-0 border-round w-auto lg:w-20 Home"> </div>
    <aside class="text3 font-medium line-height-3">Recent Orders</aside>
    <div class="Boxes">
      <div class="box1 p-4 shadow-1 border-round w-full lg:w-20">
        <img id="PhotoIphone" alt="PhotoIphone" src="src/components/img/Iphone.png">
        <center>
          <aside class="Subtitle1">Iphone 13 PRO MAX</aside>
          <aside class="time1">3 months ago</aside>
          <img class="Apple2" alt="Apple2" src="src/components/img/Apple.png">
        </center>
      </div>
      <div class="box7 p-4 shadow-0 border-round w-full lg:w-20"></div>
      <div class="box2 p-4 shadow-1 border-round w-full lg:w-20">
        <img id="PhotoXbox" alt="PhotoXbox" src="src/components/img/Xbox.png">
        <center>
          <aside class="Subtitle2">XBOX SERIES S 512GB</aside>
          <aside class="time2">5 months ago</aside>
          <img class="Amazon2" alt="Amazon2" src="src/components/img/Amazon2.png">
        </center>
      </div>
    </div>
  </div>
</template>

<style>
.Home{
  font-family: Poppins;
}
Button{
  background-image: linear-gradient(to right, rgba(39, 70, 133, 0.8) 0%, rgba(61, 179, 197, 0.8) 100%);
  left: 300px;
  top: -30px;
}
.Home input{
  width: 100%;
}
img.UserPhoto {
  float:left;
  height: 120px;
  width:120px;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #999
}
img.Amazon{
  height: 100px;
  width: 120px;
  box-shadow: 0px 0px 1px #999;
  float:right;
  transition:all 300ms;
}
img.Amazon:hover{
  transform: scale(1.2,1.2);
}
img.Walmart{
  height: 100px;
  width: 120px;
  box-shadow: 0px 0px 1px #999;
  transition:all 300ms;
}
img.Walmart:hover{
  transform: scale(1.2,1.2);
}
img.Ebay{
  height: 100px;
  width: 120px;
  box-shadow: 0px 0px 1px #999;
  transition:all 300ms;
}
img.Ebay:hover{
  transform: scale(1.2,1.2);
}
img.Apple{
  height: 50px;
  width: 120px;
  box-shadow: 0px 0px 1px #999;
  float:right;
  transition:all 300ms;
}
img.Apple:hover{
  transform: scale(1.2,1.2);
}
img.Apple2{
  height: 20px;
  width: 70px;
  box-shadow: 0px 0px 1px #999;
}
img.Amazon2{
  height: 50px;
  width: 90px;
  box-shadow: 0px 0px 1px #999;
}
aside.text2 {
  font-weight: bold;
  text-decoration: underline black;
  font-size:15px;
}

aside.text3 {
  color:#08445C;
  font-weight: bold;
  font-size:25px;
  border-left:3px solid #2794E3;
  left:50%;
}
aside.text5{
  font-size:40px;
  right:200px;
  font-weight: bold;
}
aside.time1{
  font-size:12px;
  text-decoration: underline black;
}
aside.time2{
  font-size:12px;
  text-decoration: underline black;
}
div.Boxes {
  width: 400px;
  height: 250px;
}
div.surface-card2{
  width: 500px;
  height: 650px;
}
div.surface-card{
  width: 400px;
  height: 650px;
  left:100px
}
div.box_blank{
  width: 500px;
  height: 100px;
}
div.box_blank2{
  width: 500px;
  height: 108px;
}
aside.Subtitle1{
  font-weight: bold;
  font-family: Poppins;
  margin: 10px auto;

}
aside.Subtitle2{
  font-weight: bold;
  font-family: Poppins;
}
#PhotoIphone{
  top:-10px;
  width: 100px;
  height: 100px;
  float:left;
}
#PhotoXbox{
  width: 130px;
  height: 110px;
  float:left
}
div.box1{
  width: 130px;
  height: 150px;
  margin-top:25px;
}
div.box2{
  width: 130px;
  height: 150px;
}
div.box3{
  width: 20px;
  height: 150px;
}
div.box4{
  width: 20px;
  height: 150px;
}
div.box6{
  width: 20px;
  height: 20px;
}
div.box7{
  width: 20px;
  height: 20px;
}
div.surface-card{
  margin-top:60px;
  margin-bottom:-16px;
}
div.surface-card2{
  margin-top:60px;
  margin-bottom:-16px;
}
</style>
