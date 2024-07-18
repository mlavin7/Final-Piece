<script setup>

import LanguageSwitcher from '../components/LanguageSwitcher.vue';
import SelectButtonsHomepage from '../components/selelctButtonsHomepage.vue';
import PanicButton from '../components/PanicButton.vue';


</script>
<template>
   


   

      <div class="switcher">
         <LanguageSwitcher />
         </div>
      <div class="menu">
         <SelectButtonsHomepage />
      </div>
      <div class="panicContainer">
         <PanicButton />
      </div>

   

</template>

<style scoped>
@import "../../css/app.css";





</style>



<!-- <style scoped>
* {
      box-sizing: border-box;
      margin: 0px;
      border: 0px;
      padding: 0px;
   }

   body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background-color: black;
   }


   .optionButton {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 100px;
      background-color: yellow;
      color: black;
      font-size: 20px;
    
   }
   .languageButton {
      display: flex;
      justify-content: center;
      align-items: center;
      hewight: 100px;
      width: 100vw;
      color: white;
      font-size: 20px;
      gap: 20px; 
      font-family: 'Arial';
   }

   .langButton {
      display: flex;
      background-color: plum;
      /* Green 
      border: none;
      color: white;
      padding: 15px 15px;
      text-align: center;
      text-decoration: none; 
      font-size: 16px;
      cursor: pointer;
      height: 50px;
      width: 50px;
      gap: 20px;
      height: 70px;
      width: 70px;
   }

   .langButton:hover {
      background-color: pink ;
   }
</style> -->
