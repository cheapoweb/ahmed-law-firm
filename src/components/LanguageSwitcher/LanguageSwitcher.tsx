import { useState, useRef, useEffect } from 'react'
import { LANGUAGES, useLanguage, getLanguageByCode } from '../../context/LanguageContext'
import './LanguageSwitcher.css'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = getLanguageByCode(language)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleSelect = (code: typeof language) => {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <div className={`language-switcher ${open ? 'language-switcher--open' : ''}`} ref={ref}>
      <button
        type="button"
        className="language-switcher-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="language-switcher-current">{current.shortLabel}</span>
        <span className="language-switcher-chevron" aria-hidden>▼</span>
      </button>
      {open && (
        <div
          className="language-switcher-dropdown"
          role="listbox"
          aria-label="Language options"
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              role="option"
              aria-selected={language === lang.code}
              className={`language-switcher-option ${language === lang.code ? 'language-switcher-option--active' : ''}`}
              onClick={() => handleSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
