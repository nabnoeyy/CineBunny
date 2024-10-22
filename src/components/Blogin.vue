<template>
    <div class="login-container">
      <div class="login-header">
        
        <router-link to="/Login" class="login-title"></router-link>
        <span class="login-title-text">Sign in</span>
      </div>
  
      <div class="login-option">
        <div class="login-option-background"></div>
        <div class="login-option-icon"></div>
        <span class="login-option-text">Continue with Google</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Blogin',
  };
  </script>
  
  <style scoped>
  *{
    box-sizing: border-box;
  } 
  body {
    font-size: 14px;
  }
  
  .login-container {
    width: 288px;
    height: 134px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    overflow: hidden;
    background-color: red;
  }
  
  .login-header {
    width: 288px;
    height: 56px;
    background: url("../images/v69_68.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    
    overflow: hidden;
  }
  
  .login-title {
    width: 288px;
    height: 56px;
    background: rgba(241, 167, 184, 1);
    position: absolute;
    border: 1px solid rgba(227, 203, 208, 1);
    border-radius: 20px;
    overflow: hidden;
  }
  
  .login-title-text {
    width: 70px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 16px;
    left: 109px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 20px;
    text-align: left;
  }
  
  .login-option {
    width: 288px;
    height: 56px;
    background: url("../images/v145_444.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: 78px;
    left: 0px;
    overflow: hidden;
  }
  
  .login-option-background {
    width: 288px;
    height: 56px;
    background: rgba(245, 245, 220, 1);
    position: absolute;
    top: 0px;
    left: 0px;
    border: 2px solid rgba(241, 167, 184, 1);
    border-radius: 20px;
    overflow: hidden;
  }
  
  .login-option-icon {
    width: 51px;
    height: 33px;
    background: url("../assets/Google.png");
    background-size: cover;
    position: absolute;
    top: 11px;
    left: 8px;
  }
  
  .login-option-text {
    width: 189px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 17px;
    left: 76px;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 17px;
    text-align: left;
  }
  </style>
  