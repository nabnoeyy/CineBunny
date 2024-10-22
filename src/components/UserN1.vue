<template>
    <div class="container">
     

          </div>
        <div class="BoxN ">
            <div class="image">
        <img src="../assets/noey.png">
        </div>
        <div class="nameN">
            
                <h1 class="font">nabnoeyy</h1>
                <h3  class="font">สมาชิก VIP</h3>
                <p class="font">สมาชิกใหม่สมัครเพียง 49 บาท ในเดือนแรก</p>

                 <div class="Boxx">
                <p >สมัครเลย</p>
                </div>
               
                
            </div>
            
            <div class="icon">
                <i class="pi pi-coin"></i>
            </div>

            <div class="wallet">
                <i class="pi pi-wallet"></i>
            </div>
        </div>
    
    
     
     
  
</template>

<script>
export default {
     name: 'UserN1',
     };
</script>

<style scope>


.image>img{
    width:48px;
    height: 48px;
    border-radius:100% ;
    object-fit: cover;
    position: relative;
    left: 20px;
    top: 25px;
}


.BoxN{
    width:350px ;
    height: 129px;
    border-radius: 10px;
    background-color:#F1A7B8 ;
    position: relative;
    overflow-y: hidden;
    overflow-x: hidden;/*ซ่อมส่วนที่เกิน*/ 
    
}
.nameN>h1{
    font-family:Montserrat;
    font-size: 16px;
    font-weight:bold;
    color:#fff;
    position: relative;
    top: -27px;
    left: 80px;
}
.nameN>h3{
    font-family:Montserrat;
    font-size: 10px;
    font-weight:bold;
    color:#fff;
    position: relative;
    left: 20px;
    top: -10px;
}
.nameN>p{
    font-family:Montserrat;
    font-size: 8px;
    color:#fff;
    position: relative;
    left: 20px;
    top: -15px;
}
ื.Boxx>p{
 
    color: black;
    border-radius:10px ;
    display: flex;
    position: relative;

}
.Boxx{
    width: 46px;
    height: 19px;
    background-color:#A7C6ED  
     
}
.font {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}




</style>