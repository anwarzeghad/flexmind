import { useState, useEffect } from 'react';

// Cache pour stocker les traductions chargées
const translationCache = {};

const useTranslation = (initialLang = 'fr') => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || initialLang;
  });
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        // Utilise le cache si disponible
        if (translationCache[lang]) {
          setTranslations(translationCache[lang]);
          return;
        }

        const response = await fetch(`/locales/${lang}.json`);
        const data = await response.json();
        
        // Met en cache et sauvegarde les traductions
        translationCache[lang] = data;
        setTranslations(data);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };

    loadTranslations();
  }, [lang]);

  const changeLanguage = (newLang) => {
    localStorage.setItem('lang', newLang);
    setLang(newLang);
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: newLang }));
  };

  const t = (key) => {
    return key.split('.').reduce((obj, keyPart) => obj?.[keyPart] || key, translations);
  };

  return { t, lang, changeLanguage };
};

export default useTranslation;