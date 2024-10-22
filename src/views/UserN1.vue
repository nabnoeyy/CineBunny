<template>
       <router-link to="/Notification1" class="icon">
        
                <i class="pi pi-bell"></i>
            
            </router-link>
    <div class="container scrollable-content">
        
        <div class="Cineny">
            
     <CineBunny/>
        </div>

        <div class="UserN">
     <UserN1/>
        </div>

        
        <div class="HistoryN">
           
    <HistoryN/>
        </div>

        <div class="Button">
     <ButtonN/>
        </div>

        <ButtonUser/>
     
    </div>
    
    
</template>

<script setup>
import ButtonN from '../components/ButtonN.vue';
import ButtonUser from '../components/ButtonUser.vue';
import CineBunny from '../components/CineBunny.vue';
import UserN1 from '../components/UserN1.vue';
import HistoryN from '../components/HistoryN.vue';


</script>

<style scoped>

.container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
     gap: 10px;
    height: 100%;
    padding:10px 0px;
    align-items: center;
    position: relative;
    top: 0px;
    overflow-y: hidden;/**ซ่อนส่วนที่เกิน */
    overflow-x: hidden;
    
}
.HistoryN{
    position: relative;
    top:-180px;
}
.Cineny{
    position: relative;
    right: 80px;
    top:-50px;
}

.icon>i{
    width: 27px;
    height: 29px;
    position: relative;
    top:83px;
    left:320px;
    color: black;
}






</style>