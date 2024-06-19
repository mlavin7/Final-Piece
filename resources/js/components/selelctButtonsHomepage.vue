<script setup>
import { ref } from 'vue';

</script>

<template>
   <div class="optionsRightContainer">
      <router-link :to="{ name: 'emergency', }">
         <button class="optionButton">
            <p>Emergency</p>
            <img src="../../ImgStore/emergency.svg" alt="Emergency">
         </button>
      </router-link>
      <router-link :to="{ name: 'hospital', }">
         <button class="optionButton">
            <p>Medical Crisis</p>
            <img src="../../ImgStore/medical.svg" alt="Medical Crisis">
         </button>
      </router-link>

   </div>

   <div class="optionsLeftContainer">
      <router-link :to="{ name: 'mental', }">
         <button class="optionButton">
            <p>Mental crisis</p>
            <img src="../../ImgStore/Mental.svg" alt="Mental Crisis">
         </button>
      </router-link>
      <router-link :to="{ name: 'haven', }">
         <button class="optionButton">
            <p>Save haven</p><img src="../../ImgStore/save haven.svg" alt="Save Haven">
         </button>
      </router-link>
   </div>
</template>

<!-- <style scoped>
* {
   box-sizing: border-box;
   margin: 0px;
   border: 0px;
   padding: 0px;
}

.options {
   display: flex;
   justify-content: center;
   align-content: center;
   align-items: center;
   height: 40vh;
   width: 750px;
}

.optionButton {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100px;
   width: 100px;
   background-color: yellow;
}
</style> -->