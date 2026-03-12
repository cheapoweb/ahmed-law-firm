import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
  const { t } = useTranslation()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchQuery.trim()
    if (q) {
      navigate(`/search?q=${encodeURIComponent(q)}`)
      setSearchQuery('')
      setSearchOpen(false)
    }
  }

  return (
    <footer className="footer">
      {/* Top Section - White Background */}
      <div className="footer-top-section">
        <div className="footer-top-container">
          {/* First Row: Logo and Social Icons */}
          <div className="footer-row-1">
            <Link to="/" className="footer-top-left">
              <img src={logo} alt={t('footer.logoAlt')} className="footer-logo" />
            </Link>
            
            <div className="footer-social">
              <span className="footer-social-label">{t('footer.followUs')}</span>
              <div className="footer-social-icons">
                <a href="https://www.youtube.com/@AhmedLawFirm-YT" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/people/Ahmed-Law-Firm-PC/100071133752996/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/ahmedlawfirm" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Separator */}
          <div className="footer-separator"></div>
          
          {/* Second Row: Menu and Search */}
          <div className="footer-row-2">
            <nav className="footer-nav">
              <Link to="/about" className="footer-nav-link">{t('footer.about')}</Link>
              <Link to="/attorneys" className="footer-nav-link">{t('footer.attorneys')}</Link>
              <Link to="/practice-areas" className="footer-nav-link">{t('footer.practiceAreas')}</Link>
              <Link to="/verdicts-settlements" className="footer-nav-link">{t('footer.verdictsSettlements')}</Link>
              <Link to="/reviews-ratings" className="footer-nav-link">{t('footer.reviewsRatings')}</Link>
              <Link to="/faq" className="footer-nav-link">{t('footer.faq')}</Link>
              <Link to="/legal-resources" className="footer-nav-link">{t('footer.resources')}</Link>
              <Link to="/contact" className="footer-nav-link">{t('footer.contact')}</Link>
            </nav>
            <div className="footer-search-wrap">
              <form className={`footer-search-form ${searchOpen ? 'footer-search-form--open' : ''}`} onSubmit={handleSearchSubmit}>
                <input
                  ref={searchInputRef}
                  type="search"
                  className="footer-search-input"
                  placeholder={t('footer.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onBlur={() => !searchQuery && setSearchOpen(false)}
                  aria-label={t('common.search')}
                />
                <button type="submit" className="footer-search-submit" aria-label={t('footer.submitSearch')}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                </button>
              </form>
              <button
                type="button"
                className="footer-search-icon footer-search-toggle"
                onClick={() => setSearchOpen((open) => !open)}
                aria-label={searchOpen ? t('footer.searchClose') : t('footer.searchOpen')}
                aria-expanded={searchOpen}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile: full-width search bar (always visible, not as icon) */}
          <div className="footer-search-mobile">
            <form className="footer-search-form footer-search-form--mobile" onSubmit={handleSearchSubmit}>
              <input
                type="search"
                className="footer-search-input"
                placeholder={t('footer.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label={t('common.search')}
              />
              <button type="submit" className="footer-search-submit" aria-label={t('footer.submitSearch')}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Black Background */}
      <div className="footer-bottom-section">
        <div className="footer-bottom-container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>{t('footer.locationText')}</p>
              <div className="footer-bottom-links">
                <Link to="/privacy-policy" className="footer-bottom-link">{t('footer.privacyPolicy')}</Link>
                <span className="footer-bottom-sep"> | </span>
                <Link to="/disclaimer" className="footer-bottom-link">{t('footer.disclaimerLink')}</Link>
              </div>
            </div>
            
            <div className="footer-bottom-right">
              <p className="footer-disclaimer">{t('footer.disclaimer')}</p>
              <div className="footer-links-bottom">
                <a href="#sitemap">{t('footer.sitemap')}</a>
                <span> | </span>
                <a href="https://www.lawyers.com" target="_blank" rel="noopener noreferrer">{t('footer.lawyersProfile')}</a>
              </div>
            </div>
          </div>
          
          <div className="footer-copyright">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
