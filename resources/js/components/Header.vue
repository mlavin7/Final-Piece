<script setup>
import { ref } from 'vue';

function changeLanguage(language) {
    lang.value = language;
}

const lang = ref('en'); // default language

const translate = (text) => {
    const translations = {
        'en': {
            'Emergency Numbers': 'Emergency Numbers',
            'Mental Crisis': 'Mental Crisis',
            'Medical Crisis': 'Medical Crisis',
            'Panic Button': 'Panic Button',
            'Safe Heaven': 'Safe Heaven',
            'Back': 'Back'
        },
        'de': {
            'Emergency Numbers': 'Notrufnummern',
            'Mental Crisis': 'Mentale Krise',
            'Medical Crisis': 'Medizinische Krise',
            'Panic Button': 'Panikknopf',
            'Safe Heaven': 'Sicherer Himmel',
            'Back': 'Zurück'
        },
        'fr': {
            'Emergency Numbers': "Numéros d\'urgence_",
            'Mental Crisis': 'Crise mentale',
            'Medical Crisis': 'Crise médicale',
            'Panic Button': 'Bouton de panique',
            'Safe Heaven': 'Havre de sécurité',
            'Back': 'Retour'
        },
        'it': {
            'Emergency Numbers': 'Numeri di emergenza',
            'Mental Crisis': 'Crisi mentale',
            'Medical Crisis': 'Crisi medica',
            'Panic Button': 'Bottone di panico',
            'Safe Heaven': 'Rifugio sicuro',
            'Back': 'Indietro'
        }
    };

    return translations[lang.value][text];
};


</script>

<template>
    <div class="header">

        <div v-if="startPage" class="languageButton ">
            <button class="langButton" @click="changeLanguage('en')">EN</button>
            <button class="langButton" @click="changeLanguage('de')">GE</button>
            <button class="langButton" @click="changeLanguage('fr')">FR</button>
            <button class="langButton" @click="changeLanguage('it')">IT</button>
        </div>

        <div v-if="Emergencies && lang == 'en'" class="HeaderGeneral">


            <div class="backButtonContainer">
                <router-link :to="{ name: 'start', }">
                    <button class="backButton">{{ translate('Back') }}</button>
                </router-link>
            </div>

            <div v-if="emergency" class="HeaderTitle">
                <h1>{{ translate('Emergency Numbers') }}</h1>
            </div>

            <div v-if="mental" class="HeaderTitle">
                <h1>{{ translate('Mental Crisis') }}</h1>
            </div>

            <div v-if="hospital" class="HeaderTitle">$
                <h1>{{ translate('Medical Crisis') }}</h1>
            </div>
            <div v-if="haven" class="HeaderTitle">
                <h1>{{ translate('Safe Heaven') }}</h1>
            </div>


        </div>





    </div>




</template>



<style scoped></style>