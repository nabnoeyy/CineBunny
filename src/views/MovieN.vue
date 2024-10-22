<template>
    <div>
<MovieN/>
    </div>
    
    <router-link to="/Home" class="icon">
        <i class="pi pi-chevron-left"></i>
    </router-link>
    
</template>

<script setup>
import MovieN from '../components/MovieN.vue';
import router from '../router';


</script>

<style scoped>
.icon>i{
    position: relative;
    top:-820px;
    left: 20px;
    z-index: 120px;
   
    
}

    





</style>