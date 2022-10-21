<template>
  <div class="surface-card p-4 shadow-0 border-round w-180 lg:w-7 SeeMessage">
    <aside class="subtitle">You have 0 new messages</aside>
    <div class="box20">
      <img class="ContactPhoto" alt="ContactPhoto" src="src/components/img/ContactPhoto.png">
      <RouterLink to="/profile-travel">   
        <aside class="name">Lili Ramos</aside>      
      </RouterLink>
      
      <aside class="message">Write a message...</aside>
    </div>
    <div class="box30">
      <img class="ContactPhoto" alt="ContactPhoto" src="src/components/img/Contact2Photo.png">
      <aside class="name">Jean Pearse</aside>
      <aside class="message">Write a message...</aside>
    </div>
    <div class="box40">
      <img class="ContactPhoto" alt="ContactPhoto" src="src/components/img/Contact3Photo.png">
      <aside class="name">Emily Pinedo</aside>
      <aside class="message">Write a message...</aside>
    </div>
  </div>
</template>

<style>
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
  margin-left:170px;
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
div.box30{
  margin-top:30px;
  height: 150px;
  width: 500px;
  box-shadow: 0px 0px 1px #999;
  transition:all 300ms;
}
div.box30:hover{
  transform: scale(1.1,1.1);
}
div.box40{
  margin-top:30px;
  height: 150px;
  width: 500px;
  box-shadow: 0px 0px 1px #999;
  transition:all 300ms;
}
div.box40:hover{
  transform: scale(1.1,1.1);
}
</style>