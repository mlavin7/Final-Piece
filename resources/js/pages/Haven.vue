<script setup>


import PanicButton from '../components/PanicButton.vue';
import i18next from 'i18next';
import { RouterLink } from 'vue-router';
import { usePanicStore } from '../stores/PanicStore.js';
import { storeToRefs } from 'pinia';

const { isAlarmActive} = storeToRefs(usePanicStore());


console.log("panic", isAlarmActive);
console.log("reAD");

const t = i18next.t.bind(i18next);

</script>



<template>
    <header>
        <div  class="header">
            <router-link :to="{ name: 'start' }">
                <button class="backButton">{{ $t('Back') }}</button>
            </router-link>

            <h1  v-if="isAlarmActive == true" class="title">{{ $t('Panic Button') }}</h1>
            <h1  v-else class="title">{{ $t('Safe Heaven') }}</h1>
        </div>
        
    </header>
   

    <body>              
 <div v-if="isAlarmActive == false" class="googleMap">
   
        
<iframe
  width="360"
  height="250"
  frameborder="0" style="border:0; display:flex; justify-content: center; align-content: center; align-items: center;"
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBDpmcltvE_g4XJNXj_Rk0YVqydurt6T2w&q=queer+safe+haven+in+Zurich"
  allowfullscreen> 
</iframe>


    </div>

        <div>
            <!-- Your HTML content goes here -->
        </div>
        <PanicButton />
    </body>
</template>




<style scoped>
@import "../../css/app.css";


/* Your CSS styles go here */
</style>
