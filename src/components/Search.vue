<template>

   <header>
     <div class="container">
           
        <div class="Box-Content">
            <div class="image">
                <img src="../assets/noey.png" >
            </div>

            <div class="nameN">
                <h1>Hello nabnoeyy.</h1>
                <p>Enjoy your favorlite movie</p>
            </div>

           
            <router-link to="/Notification1" class="icon">
                <i class="pi pi-bell"></i>
            </router-link>
        </div>

        <div class="search">
            <label>
                <i class="pi pi-search"> </i>
                <input type="text" placeholder="Search movie...."> 
            </label>
        </div>
     </div>

   </header>

</template>

<script>
export default {
    name: 'SearchN'
}
</script>

<style scoped>

.image{
 border-radius: 100%;
}
.image>img{
    width: 55px;
    height:55px;
    background-size: cover;
    position: relative;
    top: 10px;
    left: -5px;
    
   
}
.nameN{
    color: #F45277;
}
.nameN>h1{
    font-size: 18px;
    color: #F45277;
    position: relative;
    font-family: Montserrat;
    font-weight: 800;
    left: -30px; 
    top:10px

}
.nameN>p{
    font-size: 10px;
    color: #F45277;
    position: relative;
    left: -30px;
    top:4px; 
}
.Box-Content{
display: flex;
justify-content: space-between;
align-items: center;
}
.icon{
    color: black;
}
.icon>i{
    width: 29px;
    height: 29px;
    position: relative;
    margin-top: 35px;
    right:-5px;
    
}

input{
    background-color: transparent;
    outline-color:#F45277;
    outline-offset: 1px;
    border: none;
    width: 250px;
    height: 46px;
    position: relative;
    left: 25px;

}
::placeholder{
    color: #F45277;
    font-size:10px;
    font-weight:500;
}
label>i{
    width: 26px;
    height: 26px;
    position: relative;
    left:23px;
    top:2px;
}
.container{
    width: 312px;
    height: auto;
}
.search{
    background-color: #fff;
    border-radius: 15px;
    padding: 2px 3px;
    margin-top: 25px;
    

}


</style>