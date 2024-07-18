<script setup>
import { RouterLink } from 'vue-router';
import PanicButton from '../components/PanicButton.vue';
import Mental from '../components/MentalHospitalList.vue';
import i18next from 'i18next';

const t = i18next.t.bind(i18next);

</script>



<template>
    
       
    

    <body>
        <router-link :to="{ name: 'start' }">
            <button class="backButton">{{ $t('Back') }}</button>
        </router-link>
        <div class="headerTitle">
            <h1>{{ $t('Mental Crisis') }}</h1>
        </div>
        
            <Mental/>
        
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
