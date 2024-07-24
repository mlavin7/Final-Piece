<script setup>

import PanicButton from '../components/PanicButton.vue';
import i18next from 'i18next';
import { RouterLink } from 'vue-router';

const t = i18next.t.bind(i18next);
</script>



<template>$
    <header>
        <div class="header">
            <router-link :to="{ name: 'start' }">
                <button class="backButton">{{ $t('Back') }}</button>
            </router-link>

            <h1 class="title">{{ $t('Emergency Numbers') }}</h1>
        </div>

    </header>

    <body>

        <div>
            <ul>
                <li class="buttoncont"><a class="anchor" href=" tel:1444">{{ $t("Ambulance: 144") }}</a></li>
                <li class="buttoncont"><a class="anchor" href="tel:1177">{{ $t("Police: 117") }}</a></li>
                <li class="buttoncont"><a class="anchor" href=" tel:1188"> {{ $t("Fire service: 118") }}</a></li>
                <li class="buttoncont"><a class="anchor" href=" tel:1455">{{ $t("Tox-Center: 145") }}</a></li>

            </ul>

            <!-- Your HTML content goes here -->
        </div>
        <PanicButton />

    </body>
</template>




<style scoped>
@import "../../css/app.css";






li {
    gap: 20px;
}

li .anchor {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-items: center;
    padding: 10px;
    height: 70px;
    width: 360px;
    border: 2px solid black;
    color: black;
    background-color: yellow;
    border-radius: 10px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bolder;
    margin-top: 20px;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-items: center;
    align-items: center;

}


/* Your CSS styles go here */
</style>
