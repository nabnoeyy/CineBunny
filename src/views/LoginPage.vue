<template>
    <div class="container scrollable-content">
      
      <CineBunny/>
      <Login/>


    </div>
</template>

<script setup>
import Login from '../components/Login.vue';
import CineBunny from '../components/CineBunny.vue';
</script>

<style  scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
     gap: 10px;
    height: 100%;
    padding:10px 0;
    align-items: center;
    position: relative;
    top: -125px;
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