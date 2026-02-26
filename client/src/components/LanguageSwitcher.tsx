import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // Ensure the switcher knows the current language on load
  const currentLang = i18n.language || 'en';

  const switchLanguage = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Remembers preference
  };

  return (
    <div className="flex items-center gap-1 bg-black/5 backdrop-blur-sm rounded-full px-2 py-1 border border-black/10">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          currentLang.startsWith('en')
            ? 'bg-primary text-white shadow-sm'
            : 'text-foreground/60 hover:text-primary'
        }`}
      >
        EN
      </button>
      <span className="text-black/10">|</span>
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
          currentLang.startsWith('fr')
            ? 'bg-primary text-white shadow-sm'
            : 'text-foreground/60 hover:text-primary'
        }`}
      >
        FR
      </button>
    </div>
  );
}
