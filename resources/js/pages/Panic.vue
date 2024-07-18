<script setup>

import PanicButton from '../components/PanicButton.vue';
import { RouterLink } from 'vue-router';
</script>



<template>
    

    <body>

<header>
        <div class="headerTitle">
            <router-link :to="{ name: 'start' }">
                <button class="backButton">{{ $t('Back') }}</button>
            </router-link>
            <h1 class="title">{{ $t('Panic Button') }}</h1>
        </div>
    </header>
        
        <PanicButton />


    </body>
</template>




<style scoped>
@import "../../css/app.css";


/* Your CSS styles go here */
</style>
