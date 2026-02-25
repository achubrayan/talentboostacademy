import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';

// Get language from URL or localStorage
const getInitialLanguage = () => {
  // Check URL path first
  const path = window.location.pathname;
  if (path.startsWith('/fr')) return 'fr';
  if (path.startsWith('/en')) return 'en';
  
  // Check localStorage
  const savedLang = localStorage.getItem('language');
  if (savedLang === 'fr' || savedLang === 'en') return savedLang;
  
  // Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('fr')) return 'fr';
  
  // Default to English
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
