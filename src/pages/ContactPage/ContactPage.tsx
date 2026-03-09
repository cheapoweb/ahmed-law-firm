import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer'
import PageBanner from '../../components/PageBanner'
import { PRACTICE_AREAS_CATEGORIES } from '../PracticeAreasPage/practiceAreasConfig'
import './ContactPage.css'

const location = {
  name: 'Ahmed Law Firm',
  address: '104-09 113th St',
  city: 'South Richmond Hill, NY 11419',
  phone: '(718) 848-9595',
  email: 'frontdesk@lawahmed.com',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-73.8273456!3d40.6963456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f3b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s104-09%20113th%20St%2C%20South%20Richmond%20Hill%2C%20NY%2011419!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  directionsUrl: 'https://maps.app.goo.gl/E1r4nEqMQBZNr4yz9',
}

const ContactPage = () => {
  const { t } = useTranslation()
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    practiceAreas: true,
    contactInfo: true,
  })

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="contact-page">
      <PageBanner
        title={t('pages.contact.bannerTitle')}
        subtitle={t('pages.contact.bannerSubtitle')}
      />

      <section className="contact-intro-section">
        <div className="contact-intro-container">
          <p className="contact-intro-label">{t('pages.contact.introLabel')}</p>
          <h2 className="contact-intro-heading">
            {t('pages.contact.introHeading')} <em>{t('pages.contact.introHeadingEm')}</em>
          </h2>
          <p className="contact-intro-text">
            {t('pages.contact.introText')} <a href="tel:7188489595">{t('common.phone')}</a>.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <aside className="contact-sidebar">
            <div className="contact-sidebar-inner">
              <h2 className="sidebar-section-title">{t('pages.contact.quickLinks')}</h2>
              <nav className="sidebar-nav">
                <div className="sidebar-collapsible-block">
                  <button
                    type="button"
                    className={`sidebar-section-toggle ${expandedSections.practiceAreas ? 'expanded' : ''}`}
                    onClick={() => toggleSection('practiceAreas')}
                    aria-expanded={expandedSections.practiceAreas}
                  >
                    <span>{t('header.practiceAreas')}</span>
                    <span className="dropdown-chevron">▼</span>
                  </button>
                  {expandedSections.practiceAreas && (
                    <div className="sidebar-collapsible-content">
                      {PRACTICE_AREAS_CATEGORIES.map((cat) => (
                        <Link key={cat.slug} to={cat.path} className="sidebar-nav-link">
                          {t(`practiceAreas.${cat.slug}`)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="sidebar-collapsible-block">
                  <button
                    type="button"
                    className={`sidebar-section-toggle ${expandedSections.contactInfo ? 'expanded' : ''}`}
                    onClick={() => toggleSection('contactInfo')}
                    aria-expanded={expandedSections.contactInfo}
                  >
                    <span>{t('pages.contact.getInTouch')}</span>
                    <span className="dropdown-chevron">▼</span>
                  </button>
                  {expandedSections.contactInfo && (
                    <div className="sidebar-collapsible-content contact-sidebar-contact">
                      <a href={`tel:${location.phone.replace(/\D/g, '')}`} className="sidebar-nav-link">
                        {location.phone}
                      </a>
                      <a href={`mailto:${location.email}`} className="sidebar-nav-link">
                        {location.email}
                      </a>
                      <Link to="/faq" className="sidebar-nav-link">{t('header.faq')}</Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </aside>

          <div className="contact-content">
            <div className="contact-content-card">
              <h2 className="contact-heading">{t('pages.contact.requestHeading')}</h2>
              <p className="contact-content-intro">
                {t('pages.contact.requestIntro')}
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label htmlFor="contact-name">{t('pages.contact.nameLabel')}</label>
                    <input id="contact-name" type="text" name="name" required placeholder={t('pages.contact.namePlaceholder')} />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-email">{t('pages.contact.emailLabel')}</label>
                    <input id="contact-email" type="email" name="email" required placeholder={t('pages.contact.emailPlaceholder')} />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-phone">{t('pages.contact.phoneLabel')}</label>
                    <input id="contact-phone" type="tel" name="phone" required placeholder={t('pages.contact.phonePlaceholder')} />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="contact-state">{t('pages.contact.stateLabel')}</label>
                    <select id="contact-state" name="state">
                      <option value="NY">New York</option>
                      <option value="NJ">New Jersey</option>
                      <option value="CT">Connecticut</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="contact-form-group contact-form-group-full">
                    <label htmlFor="contact-message">{t('pages.contact.messageLabel')}</label>
                    <textarea id="contact-message" name="message" rows={4} required placeholder={t('pages.contact.messagePlaceholder')} />
                  </div>
                </div>
                <div className="contact-checkbox-group">
                  <label className="contact-checkbox-label">
                    <input type="checkbox" name="contact_email" defaultChecked />
                    <span>{t('pages.contact.contactByEmail')}</span>
                  </label>
                  <label className="contact-checkbox-label">
                    <input type="checkbox" name="contact_phone" defaultChecked />
                    <span>{t('pages.contact.contactByPhone')}</span>
                  </label>
                </div>
                <div className="contact-disclaimer">
                  <label className="contact-checkbox-label">
                    <input type="checkbox" name="disclaimer" required />
                    <span>{t('pages.contact.disclaimerCheck')}</span>
                  </label>
                </div>
                <button type="submit" className="contact-submit">{t('pages.contact.sendMessage')}</button>
              </form>
            </div>

            <div className="contact-map-card">
              <h2 className="contact-map-heading">{t('pages.contact.ourOffice')}</h2>
              <div className="contact-map-wrapper">
                <iframe
                  src={location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('pages.contact.mapTitle')}
                  className="contact-map-iframe"
                />
              </div>
              <div className="contact-map-info">
                <p className="contact-map-name">{location.name}</p>
                <p className="contact-map-address">{location.address}</p>
                <p className="contact-map-city">{location.city}</p>
                <p className="contact-map-phone">
                  <a href={`tel:${location.phone.replace(/\D/g, '')}`}>{location.phone}</a>
                </p>
                <a href={location.directionsUrl} target="_blank" rel="noopener noreferrer" className="contact-map-directions">
                  {t('pages.contact.getDirections')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-media-section">
        <div className="contact-media-container">
          <p className="contact-media-label">{t('pages.contact.learnMore')}</p>
          <h2 className="contact-media-heading">{t('pages.contact.watchHeading')} <em>{t('pages.contact.watchHeadingEm')}</em></h2>
          <div className="contact-media-cards">
            <Link to="/reviews-ratings" className="contact-media-card">
              <span className="contact-media-icon">▶</span>
              <span className="contact-media-text">{t('pages.contact.watchTestimonials')}</span>
            </Link>
            <Link to="/reviews-ratings" className="contact-media-card">
              <span className="contact-media-icon">♫</span>
              <span className="contact-media-text">{t('pages.contact.listenStories')}</span>
            </Link>
            <Link to="/legal-blog" className="contact-media-card">
              <span className="contact-media-icon">📖</span>
              <span className="contact-media-text">{t('pages.contact.readBlog')}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ContactPage
