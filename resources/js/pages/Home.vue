<script setup>
const changeLanguage = (lang) => {
   console.log(lang);
};
</script>
<template>


   <body>

      <div class="languageButton ">
         <button class="langButton" @click="changeLanguage('en')">EN</button>
         <button class="langButton" @click="changeLanguage('de')">GE</button>
         <button class="langButton" @click="changeLanguage('fr')">FR</button>
         <button class="langButton" @click="changeLanguage('it')">IT</button>
      </div>

      <div class="menu">
         
         <div class="options">
            <button class="optionButton">
               <p>Emergency Numbers</p><img src="" alt="">
            </button>
            <button class="optionButton">
               <p>medical crisis</p><img src="" alt="">
            </button>
            <button class="optionButton">
               <p>Mental cryis</p><img src="" alt="">
            </button>
            <button class="optionButton">
               <p>Save haven</p><img src="" alt="">
            </button>
         </div>
      </div>
   </body>

</template>
<style scoped>
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

   .menu{
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      height: 40vh;
      width: 750px;}

   .optionButton {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 100px;
      background-color: yellow;
      
   
   }

   .options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      justify-content: center;
      align-content: center;
      gap: 20px;
      align-items: center;
      height: 100%;
      width: 100vw;
      background-color: black;
      color: white;
      font-size: 20px;
      font-family: 'Arial';
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
      font-family: 'Arial';
      border: 7px solid black;
      border-radius: 10px;
      cursor: pointer;
      grid-area: auto;
   }

   .optionButton:nth-child(1),.optionButton:nth-child(2) {
      grid-row: 1;
   }

   .optionButton:nth-child(3),.optionButton:nth-child(4) {
      grid-row: 2;
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
      /* Green */
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

</style>
