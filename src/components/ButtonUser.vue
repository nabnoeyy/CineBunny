<template>
  <div container>
    
    <div class="line"></div> 
    <div class="line1"></div><!--เส้น-->
    <div class="BUse">
      <div class="BN">
        <i class="pi pi-arrow-circle-down"> </i>
        <p>ดาวน์โหลด</p>
      </div>

      <i class="pi pi-angle-right"></i>
    </div>

    <div class="BUse">
      <div class="BN">
        <p>รายการและการจองของฉัน</p>
      </div>
      <i class="pi pi-angle-right"></i>
    </div>

    <div class="line"></div> <!--เส้น-->


    <div class="BUse">
      <div class="BN">
        <i class="pi pi-question-circle"> </i>
        <p>ความช่วยเหลือและคำติชม</p>
      </div>

      <i class="pi pi-angle-right"></i>
    </div>


    <div class="BUse">
      <div class="BN">
        <i class="pi pi-cog"> </i>
        <p>ตั้งค่า</p>
      </div>

      <i class="pi pi-angle-right"></i>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container{
    display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  
}
.BUse:hover {
  background-color: #f07c92; /* เปลี่ยนสีเมื่อเลื่อนเมาส์ไปโดน */
}
.BUse {
  width: 336px;
  height: 47px;
  background-color: #fbaec0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: auto;
  position: relative;
  top:-189px;
  margin: 10px;/**เว้นขอบระหว่างปุ่ม */

 
}
.BN {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 6px;
}
.line{
    width: 345px;
    border-top:1px  #BEBCBC solid;
    position: relative;
    left:14px;
    margin: 10px 0;
    position: relative;
    top:-186px;

}
.line1{
    width: 345px;
    border-top:1px  #BEBCBC solid;
    position: relative;
    left:5px;
    margin: 10px 0;
    position: relative;
    top:-385px;
}
</style>
