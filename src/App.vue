<template>
  <div class="container scrollable-content">
    <router-view></router-view> <!-- ใช้ router-view ให้ถูกต้อง -->
  </div>
</template>

<script setup>
</script>

<style scoped>
/* ตั้งค่าความกว้างและความสูงของ container ให้ยืดตามหน้าจอ */
.container {
  width: 393px; /* เต็มความกว้างหน้าจอ */
  height: 903px; /* เต็มความสูงหน้าจอ */
  overflow: auto;
  background-color: #F5F5DC; /* สีพื้นหลัง */
}

/* การตั้งค่าสำหรับส่วนที่เลื่อน (scrollable content) */
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
