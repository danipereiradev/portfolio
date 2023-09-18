import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from '../../locales/en.json'; // Import your language files
import esTranslation from '../../locales/es.json';
import glTranslation from '../../locales/gl.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
      gl: {
        translation: glTranslation,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false,
    },
  });

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set the language based on the user's preference
    i18n.changeLanguage(localStorage.getItem('language') || 'en');
  }, []);

  return <Component {...pageProps} />;
}
