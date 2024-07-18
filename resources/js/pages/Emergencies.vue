<script setup>

import PanicButton from '../components/PanicButton.vue';
import i18next from 'i18next';
import { RouterLink } from 'vue-router';

const t = i18next.t.bind(i18next);
</script>



<template>$
    <header>
        <div  class="headerTitle">
            <router-link :to="{ name: 'start' }">
                <button class="backButton">{{ $t('Back') }}</button>
            </router-link>
            
            <h1 class="title">{{ $t('Emergency Numbers') }}</h1>
        </div>

    </header>

    <body>

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
