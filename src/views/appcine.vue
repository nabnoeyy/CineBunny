<template>
    <div class="nab scrollable-content">
        <CineBunny/>
        <div class="image">
            <img src="../assets/appcine.png">
        </div>
        
        <NewButton/>

    </div>
</template>

<script setup>
import CineBunny from '../components/CineBunny.vue';

import NewButton from '../components/NewButton.vue';


</script>

<style  scoped>
.image{
   width: 393px;
   height: 480px;
   position: relative;
   left: -20px;
}

.image>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    position: relative;
    top:40px;

}
.nab{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
     gap: 10px;
    height: 100%;
    padding:10px 0;
    align-items: center;
    overflow-y: hidden;/**ซ่อนส่วนที่เกิน */
    overflow-x: hidden;
}
.scrollable-content {
  max-height: 100vh; /* ใช้ความสูงตามหน้าจอ */
  overflow-y: scroll; /* อนุญาตให้เลื่อนในแนวตั้ง */
  scrollbar-width: none; /* ซ่อน scrollbar ใน Firefox */
}

/* ซ่อน scrollbar ใน Chrome, Safari, และ Edge */
.scrollable-content::-webkit-scrollbar {
  display: none; /* ซ่อน scrollbar */
}
</style>