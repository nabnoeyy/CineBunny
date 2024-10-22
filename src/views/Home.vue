<template>
    <div class="container scrollable-content">
<Search/>
<ShowsN/>
<div class="Move">
<MovieList/>
<MovieList/>
</div>

<ButtonN/>
    </div>
</template>

<script setup>
import Search from '../components/Search.vue';
import MovieList from '../components/MovieList.vue';
import ButtonN from '../components/ButtonN.vue';
import ShowsN from '../components/ShowsN.vue';
</script>

<style  scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: start;
     gap: 35px;
    height: 100%;
    padding:10px 0;
    padding-top: 65px;
    align-items: center;
    position: relative;
    overflow-y: scroll;

}
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
.Move{
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;
}
</style>