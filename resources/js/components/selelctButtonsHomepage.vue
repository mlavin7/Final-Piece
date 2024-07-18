<script setup>

import { RouterLink } from 'vue-router';
import { useI18n } from 'vue-i18n';


const { t } = useI18n();
</script>

<template>
   <div class="optionsRightContainer">
      <router-link :to="{ name: 'emergency', }">
         <button class="optionButton">
            <p>{{ t('Emergency Numbers') }}</p>
            <img src="../../ImgStore/emergency.svg" alt="Emergency">
         </button>
      </router-link>
      <router-link :to="{ name: 'hospital', }">
         <button class="optionButton">
            <p>{{t('Medical Crisis')}}</p>
            <img src="../../ImgStore/medical.svg" alt="Medical Crisis">
         </button>
      </router-link>

   </div>

   <div class="optionsLeftContainer">
      <router-link :to="{ name: 'mental', }">
         <button class="optionButton">
            <p>{{t('Mental Crisis')}}</p>
            <img src="../../ImgStore/Mental.svg" alt="Mental Crisis">
         </button>
      </router-link>
      <router-link :to="{ name: 'haven', }">
         <button class="optionButton">
            <p>{{t('Safe Heaven')}}</p><img src="../../ImgStore/save haven.svg" alt="Save Haven">
         </button>
      </router-link>
   </div>
</template>

<style scoped>

a{
   text-decoration: none;
   color: black;

}

.options {
   display: flex;
   justify-content: center;
   align-content: center;
   align-items: center;
   height: 40vh;
 
}

.optionButton {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 170px;
   width: 170px;
   background-color: yellow;
   border-radius: 10px;
   text-decoration: none;
   color: black;
   font-size: larger;
   font-weight: bolder;
}
.optionsRightContainer {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap:10px;
   margin-bottom: 10px;

 
}
.optionsLeftContainer {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   gap:10px
  
   
}
</style>