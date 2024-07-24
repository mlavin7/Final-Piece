<script setup>
import PanicButton from '../components/PanicButton.vue';
import Hospital from '../components/HospitalList.vue';
import { RouterLink } from 'vue-router';
import i18next from 'i18next';


const t = i18next.t.bind(i18next);
</script>



<template>
   

    <body>

 <div  class="header">
            <router-link :to="{ name: 'start' }">
                <button class="backButton">{{ $t("Back") }}</button>
            </router-link>
            <h1 class="title">{{ $t('Medical Crisis') }}</h1>
        </div>


        <div>
            <Hospital />
        </div>
        <PanicButton />
    </body>
</template>




<style scoped>

@import "../../css/app.css";



/* Your CSS styles go here */
</style>
