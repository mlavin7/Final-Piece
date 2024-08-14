<script setup>
import PanicButton from '../components/PanicButton.vue';
import Hospital from '../components/HospitalList.vue';
import { RouterLink } from 'vue-router';
import i18next from 'i18next';
import { usePanicStore } from '../stores/PanicStore.js';
import { storeToRefs } from 'pinia';

const { isAlarmActive} = storeToRefs(usePanicStore());


console.log("panic", isAlarmActive);
console.log("reAD");


const t = i18next.t.bind(i18next);
</script>



<template>


    <body>

        <div  class="header">
            <router-link :to="{ name: 'start' }">
                <button class="backButton">{{ $t("Back") }}</button>
            </router-link>
            <h1  v-if="isAlarmActive == true" class="title">{{ $t('Panic Button') }}</h1>
            <h1 v-else class="title">{{ $t('Medical Crisis') }}</h1>
        </div>
        


        <di v-if="isAlarmActive == false">
            <Hospital />
        </di>
        <PanicButton />
    </body>
</template>




<style scoped>
@import "../../css/app.css";



/* Your CSS styles go here */
</style>
