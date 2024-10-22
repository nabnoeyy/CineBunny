<template>
  <div class="Movie-main">
    <div class="v301_276">
      <div class="TV_shows">TV shows</div>
      <span class="v43_385">นาคามรกต</span>
      <span class="v43_386">แอ็กชัน ตื่นเต้น</span>
      <div class="v38_379"></div>
    </div>
    <div class="Movie">
      <div class="nab12">แอลวิน กับสหาย์..</div>
      <span class="v43_384">Family, Adventure,....</span>
      <router-link to="/MovieN" class="Movie-img hover-effect"></router-link>
    </div>
    <div class="v301_277">
      <span class="v43_387">Pets United</span>
      <span class="v43_388">คอมเมดี้</span>
      <div class="v38_380"></div>
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
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   position: relative;
   top: -30px;
   z-index: 10;
   /*overflow: hidden;*/
 }
 .Movie-main>p{
        font-size: 18px;
        font-weight: 800;
        color:#F45277;
        position: relative;
        top: -50px;
        /*transform: translateX(-175px);
        /*transform: translateY(35px);*/
        /*right: 122px;*/
       
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
   color: rgba(243,81,119,1);
   position: absolute;
   top: 137px;
   left: 7px;
   font-family: Montserrat;
   font-weight: SemiBold;
   font-size: 14px;
   opacity: 1;
   text-align: left;
 }
 .v43_386 {
   width: 60px;
   color: rgba(63,63,63,1);
   position: absolute;
   top: 155px;
   left: 10px;
   font-family: Montserrat;
   font-weight: Medium;
   font-size: 10px;
   opacity: 1;
   text-align: left;
 }
 .v38_379 {
   width: 127px;
   height: 126px;
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
   transition: transform 0.3s ease;
 }
 .nab12{
   color: rgba(243,81,119,1);
   position: absolute;
   border-radius: 12px;
   top: 137px;
   left: 10px;
   font-family: Montserrat;
   font-weight: SemiBold;
   font-size: 14px;
   opacity: 1;
   text-align: left;
 }
 
 .v43_384{
   width: 120px;
   color:#3f3f3f;
   position: absolute;
   top: 155px;
   left: 12px;
   font-family: Montserrat;
   font-weight: Medium;
   font-size: 10px;
   opacity: 1;
   text-align: left;
 }
 
 
 .Movie-img {
   width: 127px;
   height: 126px;
   background: url("../assets/noey3.webp");
   border-radius: 10px;
   background-position: center center;
   background-size: cover;
   opacity: 1;
   position: absolute;
   top: 0px;
   left: 5px;
   overflow: hidden;
   transition: transform 0.3s ease;
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
   color: rgba(243,81,119,1);
   position: absolute;
   top: 137px;
   left: 8px;
   font-family: Montserrat;
   font-weight: SemiBold;
   font-size: 14px;
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
   width: 127px;
   height: 126px;
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
   transition: transform 0.3s ease;
 }
 
 .Movie-img {
  width: 127px;
  height: 126px;
  background: url("../assets/noey3.webp");
  border-radius: 10px;
  background-position: center center;
  background-size: cover;
  opacity: 1;
  position: absolute;
  top: 0px;
  left: 5px;
  overflow: hidden;
  transition: transform 0.3s ease;  /* การเปลี่ยนแปลงที่ราบรื่น */
}

.hover-effect:hover {
  transform: scale(1); /* ขยายภาพขึ้น 10% */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* เพิ่มเงา */
}

 
 
 </style>