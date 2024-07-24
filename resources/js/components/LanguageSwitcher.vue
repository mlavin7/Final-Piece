<template>
  <div class="langContainer">
    <button @click="setLanguage('en')" :class="{ active: locale.value === 'en' }" style="margin-right: 8px">EN</button>
    <button @click="setLanguage('de')" :class="{ active: locale.value === 'de' }">DE</button>
    <button @click="setLanguage('fr')" :class="{ active: locale.value === 'fr' }">FR</button>
    <button @click="setLanguage('it')" :class="{ active: locale.value === 'it' }">IT</button>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { watchEffect } from 'vue';

const { locale } = useI18n();

const setLanguage = (newLang) => {
  locale.value = newLang;
  localStorage.setItem('lang', newLang);
};

watchEffect(() => {
  const storedLang = localStorage.getItem('lang');
  if (storedLang) {
    locale.value = storedLang;
  }
});
</script>

<style scoped>
.langContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
}

button {
  background-color: azure;
  border: 2px solid black;
  border-radius: 10px;
  height: 70px;
  width: 70px;
  font-size: 20px;
  display: flex;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

button:focus{
  background-color: violet;
  
}
</style>
