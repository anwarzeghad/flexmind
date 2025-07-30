import { createContext } from 'react';

export const TranslationContext = createContext({
  t: (key) => key,            // fonction par défaut qui renvoie la clé brute
  lang: 'fr',                 // langue par défaut
  changeLanguage: () => {},   // fonction vide par défaut
});
