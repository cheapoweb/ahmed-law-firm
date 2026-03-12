/**
 * Supported languages and their display labels.
 * Code is used in localStorage and for i18n when you add translations.
 */
import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import i18n from '../i18n'

export const LANGUAGES = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'es', label: 'Spanish', shortLabel: 'ES' },
  { code: 'pa', label: 'Punjabi', shortLabel: 'PA' },
  { code: 'ur', label: 'Urdu', shortLabel: 'UR' },
  { code: 'hi', label: 'Hindi', shortLabel: 'HI' },
  { code: 'bn', label: 'Bengali', shortLabel: 'BN' },
  { code: 'fr', label: 'French', shortLabel: 'FR' },
  { code: 'ar', label: 'Arabic', shortLabel: 'AR' },
] as const

export type LanguageCode = (typeof LANGUAGES)[number]['code']

const STORAGE_KEY = 'ahmed-law-firm-lang'

export function getStoredLanguage(): LanguageCode {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  const found = LANGUAGES.some((l) => l.code === stored)
  return found ? (stored as LanguageCode) : 'en'
}

export function setStoredLanguage(code: LanguageCode): void {
  localStorage.setItem(STORAGE_KEY, code)
}

export function getLanguageByCode(code: LanguageCode) {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0]
}

/* Context */
type LanguageContextValue = {
  language: LanguageCode
  setLanguage: (code: LanguageCode) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => getStoredLanguage())

  useEffect(() => {
    setStoredLanguage(language)
  }, [language])

  useEffect(() => {
    i18n.changeLanguage(language)
    document.documentElement.lang = language
    document.documentElement.setAttribute('dir', (language === 'ar' || language === 'ur') ? 'rtl' : 'ltr')
  }, [language])

  const setLanguage = useCallback((code: LanguageCode) => {
    setLanguageState(code)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
