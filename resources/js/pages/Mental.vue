<script >
import { RouterLink } from 'vue-router';
import PanicButton from '../components/PanicButton.vue';
import Mental from '../components/MentalHospitalList.vue';
import i18next from 'i18next';
import { usePanicStore } from '../stores/PanicStore.js';
import { storeToRefs, getActivePinia } from 'pinia';




const { isAlarmActive} = storeToRefs(usePanicStore());


console.log("panic", isAlarmActive);
console.log("reAD");

const t = i18next.t.bind(i18next);




</script>


<template>




    <body>

        

        <div   class="header">
            <router-link :to="{ name: 'start' }">
                <button class="backButton"  >{{ $t("Back") }}</button>
            </router-link>
           <h1  v-if="isAlarmActive == true" class="title">{{ $t('Panic Button') }}</h1>
            <h1 v-else class="title">{{ $t('Mental Crisis') }}</h1> 
            
        </div>
        <div v-if="isAlarmActive == false">
        <Mental />
        </div>
        <PanicButton />
    </body>
</template>




<style scoped>
@import "../../css/app.css";

ul {
    list-style-type: none;
    padding: 0;
    width: 320px;
    ;
}

h1 {
    color: white;
    width: 320px;
}
</style>
