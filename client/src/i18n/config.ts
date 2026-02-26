import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import local JSON files
import enLabels from './en.json';
import frLabels from './fr.json';

i18n
  // Detects user language from browser settings or localStorage
  .use(LanguageDetector)
  // Passes i18n instance to react-i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enLabels },
      fr: { translation: frLabels }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already protects from XSS
    },
    detection: {
      // Look for language in localStorage first, then browser settings
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
