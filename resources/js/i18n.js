import { createI18n } from 'vue-i18n';
import en from '../../i18n/locales/en/en.json';
import de from '../../i18n/locales/de/de.json';
import fr from '../../i18n/locales/fr/fr.json';
import it from '../../i18n/locales/it/it.json';


const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de,
    fr,
    it, 
  },
});

export default i18n;