<template>
  
    <div class="Movie-main">
        <h2>ประวัติการรับชม</h2>

        <div class="nab">
     <div class="noey">
         <div class="v301_276">
           <div class="TV_shows">TV shows</div>
             <span class="v43_385">นาคามรกต</span>
             
             <div class="v38_379"></div>
         </div>
         <div class="Movie">
             <div class="nab12">แอลวิน กับสหาย์..</div>
             
             
             <router-link to="/MovieN" class="Movie-img"></router-link>
         </div>
         <div class="v301_277">
             <span class="v43_387">Pets United</span>
             <div class="v38_380"></div>
         </div>
     </div>
    </div>
    </div>

 </template>
 <script>
 export default {
     name: 'MovieList',
   
     }
 </script>
 
 <style scoped>
 * {
   box-sizing: border-box;
 }
 body {
   font-size: 14px;
 }
 .Movie-main {
   width: 409px;
   height: 162px;
   padding: 50px;
   position: relative;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   padding: 10px;
   position: relative;
   top: 200px;
  
   
 }
.nab>noey{
    position: relative;
    padding: 2px;
    

    
}
 .Movie-main>p{
        font-size: 18px;
        font-weight: 800;
        color:#F45277;
        position: relative;
        top: 20px;
        /*transform: translateX(-175px);
        /*transform: translateY(35px);*/
        /*right: 122px;*/
       
 }
 .Movie-main>h2{
    font-size: 16px;
    font-weight: bold;
    position: relative;
    top:-60px;
    color: #595959;

 }
 
 
 .v301_276 {
   width: 127px;
   height: 167px;
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   position: absolute;
   top: 0px;
   left: 144px;
   overflow: hidden;
 }
 .v43_385 {
   width: 69px;
   color:#595959;
   position: absolute;
   top: 80px;
   left: 7px;
   font-family: Montserrat;
   font-weight: SemiBold;
   font-size: 10px;
   opacity: 1;
   text-align: left;
 }
 
 .v38_379 {
   width: 123px;
   height: 71px;
   background: url("../assets/v38_379.png");
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   position: absolute;
   top: 0px;
   left: 0px;
   border-top-left-radius: 12px;
   border-top-right-radius: 12px;
   border-bottom-left-radius: 12px;
   border-bottom-right-radius: 12px;
   overflow: hidden;
 }
 .nab12{
   color: #595959;
   position: absolute;
   border-radius: 12px;
   top: 80px;
   left: 10px;
   font-family: Montserrat;
   font-weight: SemiBold;
   font-size: 10px;
   opacity: 1;
   text-align: left;
 }
 
 
 
 
 .Movie-img {
   width: 123px;
   height: 71px;
   background: url("../assets/noey3.webp");
   border-radius: 10px;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   position: absolute;
   top: 0px;
   left: 5px;
   overflow: hidden;
 }
 .name {
   color: #fff;
 }
 
 .name {
   color: #fff;
 }
 .v301_277 {
   width: 127px;
   height: 167px;
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   position: absolute;
   top: 0px;
   left: 282px;
   overflow: hidden;
 }
 .v43_387 {
   width: 93px;
   color: #595959;
   position: absolute;
   top: 80px;
   left: 8px;
   font-family: Montserrat;
   font-weight: SemiBold;
   font-size: 10px;
   opacity: 1;
   text-align: left;
 }
 .v43_388 {
   width: 34px;
   color: rgba(63,63,63,1);
   position: absolute;
   top: 155px;
   left: 11px;
   font-family: Montserrat;
   font-weight: Medium;
   font-size: 10px;
   opacity: 1;
   text-align: left;
 }
 .v38_380 {
   width: 123px;
   height: 71px;
   background: url("../assets/v38_380.png");
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   position: absolute;
   top: 0px;
   left: 0px;
   border-top-left-radius: 12px;
   border-top-right-radius: 12px;
   border-bottom-left-radius: 12px;
   border-bottom-right-radius: 12px;
   overflow: hidden;
 }
 
 
 </style>