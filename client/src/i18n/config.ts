import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Direct imports ensure the data is bundled and available immediately
import enLabels from './en.json';
import frLabels from './fr.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enLabels },
      fr: { translation: frLabels }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    interpolation: {
      escapeValue: false // React already escapes values to prevent XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
