<template>
    <div>
      <button @click="setLanguage('en')" style="margin-right: 8px">EN</button>
      <button @click="setLanguage('de')">DE</button>
      <button @click="setLanguage('fr')">FR</button>
      <button @click="setLanguage('it')">it</button>
      
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