<template>
    <div class="navbar">
      
     
      <a href="Home"><i class="fas fa-home"></i></a>
    
      <a href="MenuN"><i class="fas fa-play-circle"></i></a>
     
      <a href=""><i class="fas fa-download"></i></a>
     
      <a href="UserN1"><i class="fas fa-user"></i></a>
    </div>
            
   
    <div id="Home" class="Home" ></div>
    <div id="MenuN" class="MenuN"></div>
    <div id="Download" class="Download"></div>
    <div id="UserN1" class="UserN1"></div>
  </template>
  
  <style scoped>
  .Home {
    background: url("../assets/home.png");
    width: 23px;
    height: 20px;
    top: 50px;
  }
  
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: right;
    background-color: #FF5E74;
    border-radius: 30px;
    padding: 10px;
    width: 300px;
    position: fixed;  
    top: 390px;
    right: 2720px;
    margin: 450px auto;
   
  }
  .navbar a:hover {
  color: #B9D8FF; 
}
  
  .navbar a {
    color: white;
    text-decoration: none;
    font-size: 24px;
    padding: 10px;
  }
  
  .navbar i {
    font-size: 30px;
  }
  
  </style>
  