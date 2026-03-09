import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.png'
import { PRACTICE_AREAS_CATEGORIES } from '../../pages/PracticeAreasPage/practiceAreasConfig'
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher'
import './Header.css'

type DropdownKey = 'about' | 'practice-areas' | 'results' | 'resources' | null

const Header = () => {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null)

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  const toggleDropdown = (key: DropdownKey) => {
    setOpenDropdown((prev) => (prev === key ? null : key))
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setOpenDropdown(null)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={`header ${menuOpen ? 'header--menu-open' : ''}`}>
      {/* Backdrop for flyout – click to close */}
      <div
        className="header-flyout-backdrop"
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      />

      <div className="header-container">
        {/* Left Section - Logo */}
        <Link to="/" className="header-brand" onClick={closeMenu}>
          <img src={logo} alt={t('header.logoAlt')} className="header-logo" />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="header-menu-toggle"
          aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="header-menu-toggle-bar" />
          <span className="header-menu-toggle-bar" />
          <span className="header-menu-toggle-bar" />
        </button>

        {/* Center Section - Navigation */}
        <nav className={`header-nav ${menuOpen ? 'header-nav--open' : ''}`} id="header-nav">
          <button
            type="button"
            className="header-flyout-close"
            aria-label={t('header.closeMenu')}
            onClick={closeMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <Link to="/" className="header-flyout-logo" onClick={closeMenu} aria-hidden="true">
            <img src={logo} alt={t('header.logoAlt')} className="header-flyout-logo-img" />
          </Link>
          <Link to="/" className="nav-link" onClick={closeMenu}>{t('header.home')}</Link>
          <div className={`nav-dropdown ${openDropdown === 'about' ? 'nav-dropdown--open' : ''}`}>
            <div className="nav-dropdown-trigger-row">
              <Link to="/about" className="nav-link nav-link-trigger" onClick={closeMenu}>{t('header.about')}</Link>
              <button type="button" className="nav-dropdown-arrow-btn" onClick={() => toggleDropdown('about')} aria-expanded={openDropdown === 'about'} aria-label={t('header.toggleAbout')}>
                <span className="nav-dropdown-arrow">▼</span>
              </button>
            </div>
            <div className="nav-dropdown-menu">
              <Link to="/attorneys" className="nav-dropdown-item" onClick={closeMenu}>{t('header.attorneys')}</Link>
            </div>
          </div>
          <div className={`nav-dropdown ${openDropdown === 'practice-areas' ? 'nav-dropdown--open' : ''}`}>
            <div className="nav-dropdown-trigger-row">
              <Link to="/practice-areas" className="nav-link nav-link-trigger" onClick={closeMenu}>{t('header.practiceAreas')}</Link>
              <button type="button" className="nav-dropdown-arrow-btn" onClick={() => toggleDropdown('practice-areas')} aria-expanded={openDropdown === 'practice-areas'} aria-label={t('header.togglePracticeAreas')}>
                <span className="nav-dropdown-arrow">▼</span>
              </button>
            </div>
            <div className="nav-dropdown-menu">
              {PRACTICE_AREAS_CATEGORIES.map((cat) => (
                <Link key={cat.slug} to={cat.path} className="nav-dropdown-item" onClick={closeMenu}>
                  {t(`practiceAreas.${cat.slug}`)}
                </Link>
              ))}
            </div>
          </div>
          <div className={`nav-dropdown ${openDropdown === 'results' ? 'nav-dropdown--open' : ''}`}>
            <div className="nav-dropdown-trigger-row">
              <Link to="/verdicts-settlements" className="nav-link nav-link-trigger" onClick={closeMenu}>{t('header.results')}</Link>
              <button type="button" className="nav-dropdown-arrow-btn" onClick={() => toggleDropdown('results')} aria-expanded={openDropdown === 'results'} aria-label={t('header.toggleResults')}>
                <span className="nav-dropdown-arrow">▼</span>
              </button>
            </div>
            <div className="nav-dropdown-menu">
              <Link to="/verdicts-settlements" className="nav-dropdown-item" onClick={closeMenu}>{t('header.verdictsSettlements')}</Link>
              <Link to="/reviews-ratings" className="nav-dropdown-item" onClick={closeMenu}>{t('header.reviewsRatings')}</Link>
            </div>
          </div>
          <div className={`nav-dropdown ${openDropdown === 'resources' ? 'nav-dropdown--open' : ''}`}>
            <div className="nav-dropdown-trigger-row">
              <Link to="/legal-resources" className="nav-link nav-link-trigger" onClick={closeMenu}>{t('header.resources')}</Link>
              <button type="button" className="nav-dropdown-arrow-btn" onClick={() => toggleDropdown('resources')} aria-expanded={openDropdown === 'resources'} aria-label={t('header.toggleResources')}>
                <span className="nav-dropdown-arrow">▼</span>
              </button>
            </div>
            <div className="nav-dropdown-menu">
              <Link to="/legal-blog" className="nav-dropdown-item" onClick={closeMenu}>{t('header.legalBlog')}</Link>
              <Link to="/faq" className="nav-dropdown-item" onClick={closeMenu}>{t('header.faq')}</Link>
              <Link to="/legal-resources" className="nav-dropdown-item" onClick={closeMenu}>{t('header.legalResources')}</Link>
            </div>
          </div>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>{t('header.contactUs')}</Link>
          <Link to="/contact" className="header-nav-cta" onClick={closeMenu}>
            {t('header.scheduleConsultation')}
          </Link>
        </nav>

        {/* Right Section - Language, Contact Info and CTA */}
        <div className="header-contact">
          <LanguageSwitcher />
          <div className="header-phone">
            <svg
              className="phone-icon" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span className="phone-number">{t('common.phone')}</span>
          </div>
          <Link to="/contact" className="header-cta-button" onClick={closeMenu}>
            {t('header.scheduleConsultation')}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
