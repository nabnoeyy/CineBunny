<template>
    <div class="container">
      <div class="Menu">
        <div class="Menu1" @click="toggleDropdown">
          <h1>หมวดหมู่</h1>
          <i class="pi pi-caret-down"></i>
        </div>
        <transition name="slide-fade">
          <div v-if="dropdownVisible" class="dropdown-menu">
            <ul>
              <li v-for="category in categories" :key="category">{{ category }}</li>
            </ul>
          </div>
        </transition>
      </div>
  
      <div class="Movie">
        <div class="Movie1">
          <MovieList />
          <MovieList />
          <MovieList />
        </div>
      </div>
  
      <ButtonN />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ButtonN from '../components/ButtonN.vue';
  import MovieList from '../components/MovieList.vue';
  
  const dropdownVisible = ref(false);
  const categories = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Romance', 'Horror', 'การ์ตูน']; // เพิ่มการ์ตูน
  
  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* จัดแนวให้เริ่มจากด้านบน */
    gap: 10px;
    height: 100%;
    padding: 10px 0;
    align-items: flex-start; /* จัดแนวให้เริ่มจากด้านซ้าย */
    position: relative;
    overflow: hidden; /* ซ่อน overflow */
  }
  
  .Menu {
    position: relative;
    z-index: 1;
  }
  
  .Menu1 {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .Menu1 > i {
    color: #ae2545;
  }
  
  .Menu1 > h1 {
    color: #F45277;
  }
  
  .dropdown-menu {
    position: sticky;
    top: 60px; /* ปรับตำแหน่ง dropdown ให้ต่ำกว่านี้ */
    left: 0;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 10px;
  }
  
  .dropdown-menu ul {
    list-style: none;
    padding: 0;
  }
  
  .dropdown-menu ul li {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .dropdown-menu ul li:hover {
    background-color: #f0f0f0;
  }
  
  .Movie1 {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  
  /* Animation */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
  </style>
  