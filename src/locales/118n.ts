// src/locales/118n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './pt/translation.json';
import enTranslation from './en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: ptTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'en', // Idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz o escape
    },
  });

export default i18n;
