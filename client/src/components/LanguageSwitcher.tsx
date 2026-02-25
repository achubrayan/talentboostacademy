import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [location, setLocation] = useLocation();
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    // Detect language from URL path
    if (location.startsWith('/fr')) {
      setCurrentLang('fr');
      i18n.changeLanguage('fr');
      localStorage.setItem('language', 'fr');
    } else {
      setCurrentLang('en');
      i18n.changeLanguage('en');
      localStorage.setItem('language', 'en');
    }
  }, [location, i18n]);

  const switchLanguage = (lang: 'en' | 'fr') => {
    if (currentLang === lang) return;

    // Save preference
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);

    // Update URL path
    let newPath = location;
    
    // Remove existing language prefix
    if (newPath.startsWith('/en/')) {
      newPath = newPath.replace('/en/', '/');
    } else if (newPath.startsWith('/fr/')) {
      newPath = newPath.replace('/fr/', '/');
    } else if (newPath === '/en' || newPath === '/fr') {
      newPath = '/';
    }

    // Add new language prefix
    if (lang === 'fr') {
      newPath = newPath === '/' ? '/fr' : `/fr${newPath}`;
    } else {
      newPath = newPath === '/' ? '/en' : `/en${newPath}`;
    }

    setLocation(newPath);
    setCurrentLang(lang);
  };

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 border border-white/20">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 ${
          currentLang === 'en'
            ? 'bg-gold text-purple-900 font-semibold'
            : 'text-white hover:text-gold'
        }`}
      >
        EN
      </button>
      <span className="text-white/40">|</span>
      <button
        onClick={() => switchLanguage('fr')}
        className={`px-3 py-1 rounded-full font-medium transition-all duration-200 ${
          currentLang === 'fr'
            ? 'bg-gold text-purple-900 font-semibold'
            : 'text-white hover:text-gold'
        }`}
      >
        FR
      </button>
    </div>
  );
}
