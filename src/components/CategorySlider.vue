<template>
    <div class="slider-container">
      <button class="prev" @click="prevSlide">&#10094;</button>
      <div class="slider">
        <div class="slider-item" v-for="(category, index) in categories" :key="index">
          {{ category }}
        </div>
      </div>
      <button class="next" @click="nextSlide">&#10095;</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = ref([
    'Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Romance', 'Sci-Fi', 'Slice of Life'
  ]);
  
  // ฟังก์ชันสำหรับการเลื่อนสไลด์
  const slider = ref(null);
  
  function nextSlide() {
    slider.value.scrollBy({ left: 200, behavior: 'smooth' });
  }
  
  function prevSlide() {
    slider.value.scrollBy({ left: -200, behavior: 'smooth' });
  }
  </script>
  
  <style scoped>
  .slider-container {
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .slider {
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    width: calc(100% - 80px); /* ลดพื้นที่ปุ่มเลื่อน */
  }
  
  .slider-item {
    min-width: 150px;
    background-color: #f1f1f1;
    padding: 10px;
    margin: 10px;
    text-align: center;
    border-radius: 8px;
    flex: 0 0 auto; /* ป้องกันการขยายขนาด */
  }
  
  button {
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
  }
  
  .prev, .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  }
  
  .prev {
    left: 0;
  }
  
  .next {
    right: 0;
  }
  </style>
  