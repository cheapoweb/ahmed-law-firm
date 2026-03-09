import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import pa from './locales/pa.json'
import ur from './locales/ur.json'
import hi from './locales/hi.json'
import bn from './locales/bn.json'
import fr from './locales/fr.json'
import ar from './locales/ar.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
  pa: { translation: pa },
  ur: { translation: ur },
  hi: { translation: hi },
  bn: { translation: bn },
  fr: { translation: fr },
  ar: { translation: ar },
}

const supportedLngs = ['en', 'es', 'pa', 'ur', 'hi', 'bn', 'fr', 'ar'] as const
const getInitialLng = (): string => {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem('ahmed-law-firm-lang')
  return stored && supportedLngs.includes(stored as (typeof supportedLngs)[number]) ? stored : 'en'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLng(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
