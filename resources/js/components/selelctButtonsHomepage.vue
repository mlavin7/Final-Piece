<script setup>
import { ref } from 'vue';

</script>

<template>
    <div class="options right">
            <button class="optionButton">
               <p>Emergency Numbers</p><img src="../../ImgStore/emergency.svg" alt="Emergencies">
         
            </button>
            <button class="optionButton">

               <p>medical crisis</p><img src="../../ImgStore/medical.svg" alt="Medical Crisis">
            </button>

   <div class="options left">
            <button class="optionButton">
               <p>Mental crisis</p><img src="../../ImgStore/Mental.svg" alt="Mental Crisis">
            </button>
            <button class="optionButton">
               <p>Save haven</p><img src="../../ImgStore/save haven.svg" alt="Save Haven">
            </button>
         </div>
</template>

<style scoped>
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
   </style>