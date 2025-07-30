import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // charge les fichiers via fetch
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}.json', // chemin vers public/locales
    },
    interpolation: {
      escapeValue: false, // React gère l’échappement
    },
  });

export default i18n;
