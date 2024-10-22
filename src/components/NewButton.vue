<template>
     <router-link to="/Login" class="login-title"></router-link>
    <div class="container">
<router-link to="/Login"class="Button1 btn"> 
    <p>Sign in</p>
</router-link>
<div class="Button2 btn">
    <i class="pi pi-google"></i>
    <p> Continue with Google</p>
    
</div>
    </div>
</template>

<script setup>
import 'primeicons/primeicons.css'

</script>

<style scoped>
.Button1{
   background-color: #F1A7B8;
   border: 1px #F5F5DC solid;
   text-decoration: none ;
   color: black;
}
p{
    font-family:Montserrat;
    font-weight:500;
    font-size: 19px;
    font-weight: 500;
}
.btn{
    width: 288px;
    height: 56px;
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   top: -60px
   
}
.Button2{
    background-color:#F5F5DC ;
    border: 1px #F1A7B8 solid;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 22px;
}
</style>