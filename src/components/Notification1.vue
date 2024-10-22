<template>
    <div class="container">

        <div class="Notification">
           
            <router-link to="/Home" class="icon">            
          <i class="pi pi-arrow-left"> </i>
        </router-link>
     
            
            <h1>Notification</h1>
            <p>Today</p>
        </div>
        </div>

      <div class="Boxx">
        <div class="image">
                <img src="../assets/noey.png" >
            </div>

                <p>ยินดีต้อนรับเข้าสู่โลกของ CineBunny</p>
                <i class="pi pi-clock"> </i>
                <p2>เมื่อ 2 นาที ที่ผ่านมา</p2>
           
    </div>


</template>

<script setup>

</script>

<style scoped>

.icon>i{
    width: 18px;
    height: 13px;
    position: relative;
    left: 20px;
    top: 93px;
   
}
.Notification>h1{
  position: relative;
  top:40px;
  right:-62px;
  color:#F45277;
}

.Notification>p{
    font-size: 18px;
    font-weight: bold;
    position: relative;
    top: 84px;
    left: 20px;
    
}
.Boxx{
    background-color:#BBD5F5;
    width: 362px;
    height: 88px;
    border-radius: 6px;
    position: relative;
    left: 12px;
    top:85px;
}
.Boxx>p{
    position: relative;
    margin-top: -20px;
    left:90px;
    font-size:14px;
    font-weight: bold;
    font-family:Montserrat;
    
    
}
.Boxx>i{
    width:14px;
    height:13px;
    position: relative;
    left: 88px;
    top:-7px;
}

.Boxx>p2{
    position: relative;
    top: -10px;
    left:100px;
    font-size:10px;
    font-family:Montserrat;
    
}

.Boxx:hover{
    background-color: #F1A7B8;
}

</style>